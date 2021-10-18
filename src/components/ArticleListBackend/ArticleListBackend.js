import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ArticleListBackendRow from '../ArticleListBackendRow/ArticleListBackendRow';
import './ArticleListBackend.css';

const ArticleListBackend = ({ match }) => {
    const [articles, setArticles] = useState([]);
    const [locale, setLocale] = useState("");
    const history = useHistory();

    useEffect(() => {
        var articles = JSON.parse(localStorage.getItem("articles"));
        setArticles(articles);
        setLocale(match.params.locale);
    }, [match.params.locale]);

    const onAddClick = () => {
        history.push(`/admin/${locale}/articles/add/`);
    };

    const onEditClick = id => {
        history.push(`/admin/${locale}/articles/edit/${id}`);
    };

    const onDeleteClick = id => {
        let updatedArticles = articles.filter(ar => ar.id !== id);
        localStorage.setItem("articles", JSON.stringify(updatedArticles));
        setArticles(updatedArticles);
    };

    return <section>
        <div className="add-article"><button onClick={onAddClick}>Add new</button></div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Article name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {articles.map(article => <ArticleListBackendRow article={article} locale={locale} onEditClick={onEditClick} onDeleteClick={onDeleteClick} key={article.id} />)}
            </tbody>
        </Table>
    </section>
};

export default ArticleListBackend;
