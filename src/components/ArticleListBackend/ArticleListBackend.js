import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ArticleListBackendRow from '../ArticleListBackendRow/ArticleListBackendRow';
import './ArticleListBackend.css';

const ArticleListBackend = ({ match, articles }) => {
    // const initialArticle = () =>
    //     window.localStorage.getItem("articles") || null;
    const [articlesList, setArticles] = useState(articles);
    const [locale, setLocale] = useState("");
    const history = useHistory();

    // useEffect(() => {
    //     let articles = JSON.parse(localStorage.getItem("articles"));
    //     setArticles(articles);
    //     setLocale(match.params.locale);
    // }, [articles]);

    useEffect(() => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        if (articles) {
            setArticles(articles);
        }
        setLocale(match.params.locale);
      }, []);

    //   useEffect(() => {
    //     localStorage.setItem('articles', JSON.stringify(articles));
    //   }, [articles]);

    const onAddClick = () => {
        history.push(`/admin/${locale}/articles/add/`);
    };

    const onEditClick = id => {
        history.push(`/admin/${locale}/articles/edit/${id}`);
    };

    const onDeleteClick = id => {
        console.log(articlesList)
        let currentArticles = [...articlesList];

        console.log(currentArticles)
        let articleIndex = currentArticles.findIndex(ar => ar.id === id);
        currentArticles[articleIndex].isDeleted = true;
        setArticles(currentArticles);
        console.log(articlesList)
        localStorage.setItem("articles", JSON.stringify(articlesList));
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
                {articlesList
                    ? articlesList.filter(ar => !ar.isDeleted).map(article => <ArticleListBackendRow article={article} locale={locale} onEditClick={onEditClick} onDeleteClick={onDeleteClick} key={article.id} />)
                    : ""
                }
            </tbody>
        </Table>
    </section>
};

export default ArticleListBackend;
