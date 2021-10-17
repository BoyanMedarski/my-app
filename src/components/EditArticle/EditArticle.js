import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Tabs, Tab, Container } from 'react-bootstrap';
import ArticleForm from '../ArticleForm/ArticleForm';
import capitilize from '../../helpers/CapitalizeFirstLetter';
import generateId from '../../helpers/GenerateId';
import languages from "../../constants/languages";

const EditArticle = ({ match }) => {
    const [key, setKey] = useState(languages[0]);
    const [article, setArticle] = useState({ title: "", content: "", date: "" });
    const history = useHistory();

    useEffect(() => {
        setKey(match.params.locale);
        let locale = `${match.params.locale} articles`;
        var article = JSON.parse(localStorage.getItem(locale)).find(ar => ar.id === match.params.id);
        setArticle(article);
    }, [match.params.locale, match.params.id]);

    const onArticleSubmit = article => {
        let currentArticlesLocale = `${match.params.locale} articles`;
        let articles = JSON.parse(localStorage.getItem(currentArticlesLocale));
        let newId = generateId();

        let updatedArticles = []


        console.log(articles);
        article.id
            ? console.log("edit")
            : articles.push({ ...article, id: newId })

        console.log(currentArticlesLocale)
        console.log(articles)
        localStorage.setItem(currentArticlesLocale, JSON.stringify(articles));
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
                        disabled={match.params.locale === lang ? false : true}
                    >
                        <ArticleForm language={lang} article={article} onArticleSubmit={onArticleSubmit} />
                    </Tab>
                )}
            </Tabs>
        </Container>
    </>
};

export default EditArticle;
