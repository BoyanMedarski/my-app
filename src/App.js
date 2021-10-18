import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ArticleListBackend from './components/ArticleListBackend/ArticleListBackend';
import ArticleList from './components/ArticleList/ArticleList';
import EditArticle from './components/EditArticle/EditArticle';
import ArticleView from './components/ArticleView/ArticleView';

import articles from './data/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
        <Route exact path="/:locale/articles" component={ArticleList}></Route>
        <Route exact path="/:locale/articles/:id" component={ArticleView}></Route>
        <Route exact path="/admin/:locale/articles" component={ArticleListBackend}></Route>
        <Route exact path="/admin/:locale/articles/edit/:id" component={EditArticle}></Route>
        <Route exact path="/admin/:locale/articles/add" component={EditArticle}></Route>
      </Router>
    </div>
  );
}

export default App;
