import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div>
        <Container>
            home page
            <Link to="/admin/english/articles" >English articles</Link>
        </Container>
    </div>
};

export default Home;
