
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/Blogdetail';

function App() {

  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
  
      </div>
    </div>
    </Router>
  );
}

export default App;
