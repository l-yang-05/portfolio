import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import About from './Components/About/index';
import Portfolio from './Components/Portfolio/index'
import Contact from './Components/Contact/index';
import Footer from './Components/Footer/index'
import headShot from './images/Lucy_Yang.jpg';

const App = () => {
  return (
    < Router >
      <header>
        <nav>
          <Menu>
            <Link to='/'><h2 className="name-logo">Lucy Yang</h2></Link>
            <img src={headShot} alt="Lucy Yang" className="img-container" />
            <div className="menu-links">
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Menu>
        </nav>
      </header>
      <div>
        <Switch />
        <Route path="/" exact component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router >
  );
}

export default App;
