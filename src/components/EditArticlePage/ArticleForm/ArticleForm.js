import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import locale from '../../../constants/locale';
import "./ArticleForm.css";

const ArticleForm = ({ language, article, onArticleSubmit }) => {

    const [showRequiredText, SetRеquiredText] = useState(false)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (article) {
            setTitle(article.title[language]);
            setContent(article.content[language]);
            setDate(article.date);
            setIsActive(article.isActive);
        }

    }, [article, language]);

    const handleContentChange = e => {
        setContent(e);
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleDateChange = e => {
        setDate(e.target.value)
    };

    const handleIsActiveChange = e => {
        setIsActive(e.target.checked)
    };

    const handleSubmitChange = e => {
        e.preventDefault();
        let id = article ? article.id : null;
        if (title === "" || content === "" || date === "") {
            SetRеquiredText(true);
        }
        else {
            let updatedTitle = {};
            let updatedContent = {};
            let editedArticle = {};

            if (article) {
                updatedTitle = { ...article.title }
                updatedContent = { ...article.content }
                updatedTitle[language] = title;
                updatedContent[language] = content;
                editedArticle = { ...article, title: updatedTitle, content: updatedContent, date: date, isActive: isActive }
            } else{
                updatedTitle = { english: "", german: "", bulgarian: "" }
                updatedContent = { english: "", german: "", bulgarian: "" }
                updatedTitle[language] = title;
                updatedContent[language] = content;
                editedArticle = { id: id, title: updatedTitle, content: updatedContent, date: date, isActive: !!isActive, isDeleted: false, slug: "article" + id };
            }
            onArticleSubmit(editedArticle);
        }
    };

    return (<>
        <Form onSubmit={handleSubmitChange}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    {locale[language.toLowerCase()].title}<sup className="required-mark">&#10033;</sup>
                </Form.Label>
                <Col sm="10">
                    <Form.Control value={title} placeholder="Enter article title" name="title" onChange={handleTitleChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    {locale[language.toLowerCase()].content}<sup className="required-mark">&#10033;</sup>
                </Form.Label>
                <Col sm="10">
                    <Editor tools={OriginalTools} value={content} onChange={handleContentChange} name="content" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    {locale[language.toLowerCase()].date}<sup className="required-mark">&#10033;</sup>
                </Form.Label>
                <Col sm="3">
                    <Form.Control type="date" placeholder="Pick date" name="date" value={date} onChange={handleDateChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-left" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Is Active" name="isActive" value={isActive} checked={!!isActive} onChange={handleIsActiveChange} />
                </Col>
            </Form.Group>
            <p className={showRequiredText ? "required-text" : "hidden"}>All required fields must be filled</p>
            <Form.Group as={Row} className="mb-3 align-left">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    </>)
};

export default ArticleForm;
