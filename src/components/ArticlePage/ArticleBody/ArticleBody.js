import dateFormater from '../../../helpers/DateFormater';
import './ArticleBody.css';

const ArticleBody = ({ article, locale, onNextClick, onPreviousClick }) => {
    return (<>
        {article.title
            ? <>
                <p className="article-title">{article.title[locale]}</p>
                <p className="article-content" dangerouslySetInnerHTML={{ __html: article.content[locale] }} />
                <p className="article-date">{dateFormater(article.date)}</p>
                <div className="back-row no-select">
                    <hr className="line-header" />
                    <div>
                        <span className="back-arrow rotate">&#10144;</span>
                        <a href={`/${locale}/articles/`} className="back-link">Back to the listing</a>
                    </div>
                </div>
                <div className="navigation no-select">
                    <span>&#10094;</span>
                    <span className="navigation-link" onClick={() => onPreviousClick(article.id)}>Previous</span>
                    -
                    <span className="navigation-link" onClick={() => onNextClick(article.id)}>Next</span>
                    <span>&#10095;</span>
                </div>
            </>
            : ""
        }

    </>
    )
};

export default ArticleBody;
