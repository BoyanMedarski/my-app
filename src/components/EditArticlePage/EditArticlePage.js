import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Tabs, Tab, Container } from 'react-bootstrap';
import ArticleForm from './ArticleForm/ArticleForm';
import capitilize from '../../helpers/CapitalizeFirstLetter';
import generateId from '../../helpers/GenerateId';
import languages from "../../constants/languages";

const EditArticlePage = ({ match }) => {
    const [key, setKey] = useState(languages[0]);
    const [article, setArticle] = useState({ title: "", content: "", date: "" });
    const history = useHistory();

    useEffect(() => {
        setKey(match.params.locale);

        if (typeof match.params.id !== 'undefined') {
            var selectedArticle = JSON.parse(localStorage.getItem("articles")).find(ar => ar.id === match.params.id);
            setArticle(selectedArticle);
        }

    }, [match.params.locale, match.params.id]);

    const onArticleSubmit = () => {
        let articles = JSON.parse(localStorage.getItem("articles"));
        console.log(article)
        let editedArticle = { ...article };
        if (editedArticle.id === "" || typeof editedArticle.id === 'undefined') {
            let newId = generateId().toString();
            editedArticle = { ...editedArticle, id: newId, isDeleted: false, slug: "article-" + newId }
            articles.push(editedArticle);
        } else {
            let filteredArticles = articles.filter(ar => ar.id !== editedArticle.id);
            filteredArticles.push(editedArticle);
            articles = filteredArticles;
        }

        localStorage.setItem("articles", JSON.stringify(articles));
        history.push(`/admin/${key}/articles/`);
    };

    return <>
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {languages.map(lang =>
                    <Tab
                        eventKey={lang}
                        title={capitilize(lang)}
                        key={lang}
                    >
                        <ArticleForm language={lang} article={article} onArticleSubmit={onArticleSubmit} setArticle={setArticle} />
                    </Tab>
                )}
            </Tabs>
        </Container>
    </>
};

export default EditArticlePage;
