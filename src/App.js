import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import About from './Components/About/index';
import Portfolio from './Components/Portfolio/index'
import Contact from './Components/Contact/index';


const App = () => {
  return (
    < Router >
      <header>
        <nav>
          <Menu>
            <Link to='/'><h2 className="name-logo">Lucy Yang</h2></Link>
            <img src="https://lh3.googleusercontent.com/OC--ruM3o95oinUN-b1ikQHNL4RsAgxOv_ejHwLBWhG45tAiaDWuNVdsxcsgFpKnRjV8k2FofoOKWgbQrYz_hdeIJ7vGC9mRLKgOWhQGA8SgZ2fKTInDy7BlOu5HcoUzd5Md7OszkNh9dAE_EVrw8s_xmlzRXh_nqIYTQBPS67fkO2U1AhKYd257qshvLDL9HaJ_RzPU-ad_9ST4r-L_v9xkl8BDRdMzx02NK6hpcm6HyJ__CVN0iH6NZl4pL30OuZCEDTuHDaEc0kyCMQsIZKIZhTrIwHoyft9r-DnvpWpiw9JLkRITMFmV57tZOIsRv_G5o3qjWQokcBpzE0nxy3l7_G9KetOnK1v_gt1ZwgCVLC7Eg8cjNoGmR5F1UXE46-nq8341wA8-bcVEVEWNp-fQfqVSmanJVArxD-dskh_UtVw1_oS8LdJblmHagbTtHeHONbKFoUVN0AtgKm-Ahx3REgqNXxxRsBC-mWFBPAs0qoFbOCzwF3gfNR35Qy7RWVuECux2ZZy8AHrOlW3FfWwjAQ_TmPZT_eKg0ehjcDlEZEHURExdDryDV3ZH8Y1_aAf04UBDPlapvnLse7L_BzuQzbA2rnZWNiip-vv8c2NW-q1YvB7GTvAAZQ=w2880-h1578"
              alt="Lucy Yang" className="img-container" />
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

    </Router >
  );
}

export default App;
