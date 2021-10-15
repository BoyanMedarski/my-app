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
        let locale = `${match.params.locale} articles`;
        var articles = JSON.parse(localStorage.getItem(locale));
        setArticles(articles);
        setLocale(locale);
    }, [match.params.locale]);

    const onAddClick = () => {
        history.push(`/admin/${match.params.locale}/articles/edit/`);
    };

    const onEditClick = id => {
        history.push(`/admin/${match.params.locale}/articles/edit/${id}`);
    };

    const onDeleteClick = id => {
        let updatedArticles = articles.filter(ar => ar.id !== id);
        localStorage.setItem(locale, JSON.stringify(updatedArticles));
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
                {articles.map(article => <ArticleListBackendRow article={article} onEditClick={onEditClick} onDeleteClick={onDeleteClick} key={article.id} />)}
            </tbody>
        </Table>
    </section>
};

export default ArticleListBackend;
