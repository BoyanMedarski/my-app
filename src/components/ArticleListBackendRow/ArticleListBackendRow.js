import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ArticleListBackendRow = ({ article, onEditClick, onDeleteClick }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleDelete = () => {
        onDeleteClick(article.id);
        setShow(false);
    };

    return <>
        <tr>
            <td>{article.date}</td>
            <td>{article.title}</td>
            <td>
                <Button variant="warning" className="article-list-button" onClick={() => onEditClick(article.id)} size="sm">Edit</Button>
                <Button variant="danger" className="article-list-button" onClick={() => setShow(true)} size="sm">Delete</Button>
            </td>
        </tr>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete article</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this article</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

export default ArticleListBackendRow;
