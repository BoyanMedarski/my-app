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
        var article = JSON.parse(localStorage.getItem("articles")).find(ar => ar.id === match.params.id);
        setArticle(article);
    }, [match.params.locale, match.params.id]);

    const onArticleSubmit = article => {
        let articles = JSON.parse(localStorage.getItem("articles"));
        let newId = generateId().toString();

        if (article.id) {
            let filteredArticles = articles.filter(ar => ar.id !== article.id);
            filteredArticles.push(article);
            articles = filteredArticles;
        }
        else {
            articles.push({ ...article, id: newId, slug: "article-" + newId });
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
                        <ArticleForm language={lang} article={article} onArticleSubmit={onArticleSubmit} />
                    </Tab>
                )}
            </Tabs>
        </Container>
    </>
};

export default EditArticlePage;
