const generateId = () => {
    let articles = JSON.parse(localStorage.getItem("articles"));
    return (articles.reduce(
        (max, article) => (Number(article.id) > max ? Number(article.id) : max),
        Number(articles[0].id)) + 1 
    );
};

export default generateId;