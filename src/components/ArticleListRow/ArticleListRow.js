import { ListGroup } from 'react-bootstrap';
import dateFormater from '../../helpers/DateFormater';
import './ArticleListRow.css';

const ArticleListRow = ({ article, onArticleClick }) => {
    return <ListGroup.Item className="list-item" onClick={() => onArticleClick(article.id)}>
        <div className="article-title">{article.title}</div>
        <div>{article.content.substring(0, 50)}</div>
        <div className="article-date">{dateFormater(article.date)}</div>
    </ListGroup.Item>
};

export default ArticleListRow;
