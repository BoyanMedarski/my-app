import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import AdminDashboardRow from './AdminDashboardRow/AdminDashboardRow';
import './AdminDashboardPage.css';

const AdminDashboardPage = ({ match, articles }) => {
    const [articlesList, setArticles] = useState(articles);
    const [locale, setLocale] = useState("");
    const history = useHistory();

    useEffect(() => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        if (articles) {
            setArticles(articles);
        }
        setLocale(match.params.locale);
      }, [match.params.locale]);

    const onAddClick = () => {
        history.push(`/admin/${locale}/articles/add/`);
    };

    const onEditClick = id => {
        history.push(`/admin/${locale}/articles/edit/${id}`);
    };

    const onDeleteClick = id => {
        let currentArticles = [...articlesList];

        let articleIndex = currentArticles.findIndex(ar => ar.id === id);
        currentArticles[articleIndex].isDeleted = true;
        setArticles(currentArticles);
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
                    ? articlesList.filter(ar => !ar.isDeleted).map(article => <AdminDashboardRow article={article} locale={locale} onEditClick={onEditClick} onDeleteClick={onDeleteClick} key={article.id} />)
                    : ""
                }
            </tbody>
        </Table>
    </section>
};

export default AdminDashboardPage;
