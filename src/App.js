import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './Components/About/index'
import Portfolio from './Components/Portfolio/index'
import Contact from './Components/Contact/index'


const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={About}></Route>
        <Route path='/portfolio' component={Portfolio}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>


    </Router>
  );
}

export default App;
