import React, { useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import "./ArticleForm.css";
import locale from '../../constants/locale';

const ArticleForm = ({ language }) => {

    const [content, setContent] = useState()

    const handleContentChange = e => {
        setContent(e);
    };
    const handleInputChange = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        formDataObj.content = content;
        console.log(formDataObj)
    };

    return (<>
        <Form onSubmit={handleInputChange}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    {locale[language.toLowerCase()].title}<sup className="required-mark">&#10033;</sup>
                </Form.Label>
                <Col sm="10">
                    <Form.Control defaultValue="" placeholder="Enter article title" name="title" />
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
                    <Form.Control type="date" placeholder="Pick date" name="date" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 align-left" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Is Active" name="isActive" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 align-left">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    </>)
};

export default ArticleForm;
