import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/english/articles')
    }, [])

    return <Container>
        home page
    </Container>
};

export default Home;
