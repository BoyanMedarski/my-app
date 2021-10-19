import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import ArticleBody from './ArticleBody/ArticleBody';
import capitilize from '../../helpers/CapitalizeFirstLetter';
import languages from '../../constants/languages';
import getNextId from '../../helpers/GetNextId';
import getPreviousId from '../../helpers/GetPreviousId';
import './ArticlePage.css';

const ArticlePage = ({ match }) => {
    const [key, setKey] = useState(languages[0]);
    const [currentArticle, setArticle] = useState({ id: "0" });
    const history = useHistory();

    useEffect(() => {
        setKey(match.params.locale);
        let article = JSON.parse(localStorage.getItem("articles")).find(ar => ar.id === match.params.id);
        if (article.id !== currentArticle.id) {
            setArticle(article);
        }
    }, [match.params.locale, match.params.id, currentArticle.id]);

    const onNextClick = (id) => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        let nextId = getNextId(articles, id);
        if (nextId) {
            let article = JSON.parse(localStorage.getItem("articles")).find(ar => ar.id === nextId);
            setArticle(article)
            history.push(`/${key}/articles/${nextId}`);
        }
    };

    const onPreviousClick = (id) => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        let backId = getPreviousId(articles, id);
        if (backId) {
            let article = JSON.parse(localStorage.getItem("articles")).find(ar => ar.id === backId);
            setArticle(article)
            history.push(`/${key}/articles/${backId}`);
        }
    };

    const onDropDownClick = language => {
        history.push(`/${language}/articles/${match.params.id}`);
    };

    return <section>
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
        <p className="articles-header">Articles listing</p>
        <p className="article-details">Article Details</p>
        <ArticleBody article={currentArticle} locale={match.params.locale} onNextClick={onNextClick} onPreviousClick={onPreviousClick}/>

    </section>
};

export default ArticlePage;
