import { ListGroup } from 'react-bootstrap';
import dateFormater from '../../helpers/DateFormater';
import './ArticleListRow.css';

const ArticleListRow = ({ article, locale, onArticleClick }) => {
    return <ListGroup.Item className="list-item" onClick={() => onArticleClick(article.id)}>
        <div className="article-title">{article.title[locale]}</div>
        <div>{
            article.content[locale].substring(0, 50)}
        </div>
        <div className="article-date">{dateFormater(article.date)}</div>
    </ListGroup.Item>
};

export default ArticleListRow;
