import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/english/articles')
    }, [history])

    return <Container>
        home page
    </Container>
};

export default HomePage;
