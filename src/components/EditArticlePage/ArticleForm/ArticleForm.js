import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import locale from '../../../constants/locale';
import languages from '../../../constants/languages';
import "./ArticleForm.css";

const ArticleForm = ({ language, article, onArticleSubmit, setArticle }) => {

    const [showRequiredText, SetRеquiredText] = useState(false);

    const handleContentChange = e => {
        let newContent = { ...article.content };
        newContent[language] = e;
        setArticle({ ...article, content: newContent });
    };

    const handleTitleChange = e => {
        let newTitle = { ...article.title };
        newTitle[language] = e.target.value;
        setArticle({ ...article, title: newTitle });
    };

    const handleDateChange = e => {
        setArticle({ ...article, date: e.target.value });
    };

    const handleIsActiveChange = e => {
        setArticle({ ...article, isActive: e.target.checked });
    };

    const checkRequiredFields = () => {
        if (article.date === "") {
            return true;
        };

        return languages.some(lang => {
            return article.title[lang] === "" ||
                typeof article.title[lang] === 'undefined' ||
                article.content[lang] === "" ||
                typeof article.content[lang] === 'undefined'
        });
    };

    const handleSubmitChange = e => {
        e.preventDefault();
        if (checkRequiredFields()) {
            SetRеquiredText(true);
        }
        else {
            onArticleSubmit();
        }
    };

    return (<>
        {article
            ? <Form onSubmit={handleSubmitChange}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        {locale[language.toLowerCase()].title}<sup className="required-mark">&#10033;</sup>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={article.title[language]} placeholder="Enter article title" name="title" onChange={handleTitleChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        {locale[language.toLowerCase()].content}<sup className="required-mark">&#10033;</sup>
                    </Form.Label>
                    <Col sm="10">
                        <Editor tools={OriginalTools} value={article.content[language]} onChange={handleContentChange} name="content" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        {locale[language.toLowerCase()].date}<sup className="required-mark">&#10033;</sup>
                    </Form.Label>
                    <Col sm="3">
                        <Form.Control type="date" placeholder="Pick date" name="date" value={article.date} onChange={handleDateChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-left" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Is Active" name="isActive" value={article.isActive} checked={!!article.isActive} onChange={handleIsActiveChange} />
                    </Col>
                </Form.Group>
                <p className={showRequiredText ? "required-text" : "hidden"}>All required fields must be filled</p>
                <Form.Group as={Row} className="mb-3 align-left">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
            : ""
        }
    </>)
};

export default ArticleForm;
