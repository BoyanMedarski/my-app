import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import address from '../../constants/routes';

const Home = () => {

    //const [data, setData] = useState({});

    useEffect(() => {
        fetch(address)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                })
            })

    }, []);

    return <div>
        <Container>
            <Row>
                <Col><Button variant="flat" size="xxl">Add</Button></Col>
            </Row>
        </Container>
    </div>
};

export default Home;
