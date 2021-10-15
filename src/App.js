import './App.css';
import Home from './components/Home/Home';
import EditArticle from './components/EditArticle/EditArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <EditArticle></EditArticle>
    </div>
  );
}

export default App;
