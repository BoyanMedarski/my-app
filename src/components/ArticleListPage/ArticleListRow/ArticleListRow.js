import { ListGroup } from 'react-bootstrap';
import dateFormater from '../../../helpers/DateFormater';
import './ArticleListRow.css';

const ArticleListRow = ({ article, locale, onArticleClick }) => {
    let content = article.content[locale].replace(/<\/?[^>]+(>|$)/g, "");
    return <ListGroup.Item className="list-item" onClick={() => onArticleClick(article.id)}>
        <div className="article-title">{article.title[locale]}</div>
        <div>
            {content.substring(0, 50)}
            {content && content.length > 50 ? "..." : ""}
        </div>
        <div className="article-date">{dateFormater(article.date)}</div>
    </ListGroup.Item>
};

export default ArticleListRow;
