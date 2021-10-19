import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminDashboardPage from './components/AdminDashboardPage/AdminDashboardPage';
import ArticleListPage from './components/ArticleListPage/ArticleListPage';
import EditArticlePage from './components/EditArticlePage/EditArticlePage';
import ArticlePage from './components/ArticlePage/ArticlePage';

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
        {/* User */}
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:locale/articles" render={(props) => <ArticleListPage articles={articles} {...props} />} />
        <Route exact path="/:locale/articles/:id" render={(props) => <ArticlePage {...props}/>} />

        {/* Admin  */}
        <Route exact path="/admin/:locale/articles" render={(props) => <AdminDashboardPage articles={articles} {...props} />} />
        <Route exact path="/admin/:locale/articles/edit/:id" render={(props) => <EditArticlePage {...props}/>} />
        <Route exact path="/admin/:locale/articles/add" render={(props) => <EditArticlePage {...props}/>} />
      </Router>
    </div>
  );
}

export default App;
