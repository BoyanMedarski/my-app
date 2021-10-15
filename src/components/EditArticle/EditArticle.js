import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container } from 'react-bootstrap';
import ArticleForm from '../ArticleForm/ArticleForm';
import capitilize from '../../helpers/CapitalizeFirstLetter';
import languages from "../../constants/languages";

const EditArticle = ({ match }) => {
    const [key, setKey] = useState(languages[0]);
    const [article, setArticle] = useState({ title: "", content: "", date: "" });

    useEffect(() => {
        setKey(match.params.locale);
        let locale = `${match.params.locale} articles`;
        var article = JSON.parse(localStorage.getItem(locale)).find(ar => ar.id === match.params.id);
        setArticle(article);
    }, [match.params.locale, match.params.id]);

    return <>
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                {languages.map(lang =>
                    <Tab eventKey={lang} title={capitilize(lang)} key={lang}>
                        <ArticleForm language={lang} article={article} />
                    </Tab>
                )}
            </Tabs>
        </Container>
    </>
};

export default EditArticle;
