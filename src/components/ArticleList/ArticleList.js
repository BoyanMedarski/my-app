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
        let locale = `${match.params.locale} articles`;
        var articles = JSON.parse(localStorage.getItem(locale));
        setArticles(articles);
        setLocale(locale);
    }, [match.params.locale]);

    const onArticleClick = id => {
        history.push(`/${match.params.locale}/articles/${id}/`);
    };

    const onDropDownClick = language =>{
        history.push(`/${language}/articles/`);
    };

    return (
        <>
            <div className="language-bar">Lang:
                <DropdownButton
                    as={ButtonGroup}
                    key={match.params.locale}
                    id={`dropdown-button-drop`}
                    size="sm"
                    variant=""
                    title={capitilize(match.params.locale)}
                    onSelect={onDropDownClick}
                >
                    {languages.map(lang => {
                        return <Dropdown.Item eventKey={lang} key={lang} >{lang}</Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className="articles-header">Articles listing</div>
            <ListGroup>
                {articles.map(ar => <ArticleListRow article={ar} key={ar.id} onArticleClick={onArticleClick} />)}
            </ListGroup>
        </>
    )
};

export default ArticleList;
