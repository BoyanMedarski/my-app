import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import ArticleListRow from '../ArticleListRow/ArticleListRow';
import capitilize from '../../helpers/CapitalizeFirstLetter';
import languages from './../../constants/languages';
import './ArticleList.css';

const ArticleList = ({ match }) => {
    const [articles, setArticles] = useState([]);
    const [locale, setLocale] = useState("");
    const history = useHistory();

    useEffect(() => {
        let articles = JSON.parse(localStorage.getItem("articles")).filter(ar => !ar.isDeleted && ar.isActive);
        setArticles(articles);
        setLocale(match.params.locale);
    }, [match.params.locale]);

    const onArticleClick = id => {
        history.push(`/${locale}/articles/${id}/`);
    };

    const onDropDownClick = language => {
        history.push(`/${language}/articles/`);
    };

    return (
        <>
            <div className="language-bar">Lang:
                <DropdownButton
                    as={ButtonGroup}
                    key={locale}
                    id={`dropdown-button-drop`}
                    size="sm"
                    variant=""
                    title={capitilize(locale)}
                    onSelect={onDropDownClick}
                >
                    {languages.map(lang => {
                        return <Dropdown.Item eventKey={lang} key={lang} >{lang}</Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className="articles-header">Articles listing</div>
            <ListGroup>
                {articles.map(ar => <ArticleListRow article={ar} key={ar.id} onArticleClick={onArticleClick} locale={locale} />)}
            </ListGroup>
        </>
    )
};

export default ArticleList;
