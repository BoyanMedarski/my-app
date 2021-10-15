import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import address from '../../constants/routes';

const Home = () => {
    useEffect(() => {
        var retrievedObject = JSON.parse(localStorage.getItem('bulgarian articles'));
    }, []);

    return <div>
        <Container>
            home page
        </Container>
    </div>
};

export default Home;
