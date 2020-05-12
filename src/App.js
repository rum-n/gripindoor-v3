import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about/index';
import GymDetails from './pages/gym/index';


function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/:id' component={GymDetails} />
          </Switch>
          <Footer />
        </div> 
      </Router>
  );
}

export default App;
