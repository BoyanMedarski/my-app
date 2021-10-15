import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ArticleListBackend from './components/ArticleListBackend/ArticleListBackend';
import EditArticle from './components/EditArticle/EditArticle';
import 'bootstrap/dist/css/bootstrap.min.css';
import articles from './data/data';

function App() {
  useEffect(() => {
    localStorage.setItem("english articles", JSON.stringify(articles.english));
    localStorage.setItem("german articles", JSON.stringify(articles.german));
    localStorage.setItem("bulgarian articles", JSON.stringify(articles.bulgarian));
  }, []);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/admin/:locale/articles" component={ArticleListBackend}></Route>    
        <Route exact path="/admin/:locale/articles/edit/:id" component={EditArticle}></Route>
        <Route exact path="/admin/:locale/articles/add" component={EditArticle}></Route>
      </Router>
    </div>
  );
}

export default App;
