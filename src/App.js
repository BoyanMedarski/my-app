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
    localStorage.setItem("articles", JSON.stringify(articles));
  }, []);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:locale/articles" render={(props) => <ArticleList articles={articles} {...props} />} />
        <Route exact path="/:locale/articles/:id" render={(props) => <ArticleView {...props}/>} />
        <Route exact path="/admin/:locale/articles" render={(props) => <ArticleListBackend articles={articles} {...props} />} />
        <Route exact path="/admin/:locale/articles/edit/:id" render={(props) => <EditArticle {...props}/>} />
        <Route exact path="/admin/:locale/articles/add" render={(props) => <EditArticle {...props}/>} />
      </Router>
    </div>
  );
}

export default App;
