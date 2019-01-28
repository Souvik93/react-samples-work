import React, { Component } from 'react';
import App from './App';
import Address from './contact';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
export default class Home extends Component {

    render() {
      return(
        <Router>
            <div>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/address">Coontact</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Route exact path='/' component={App} />
        <Route path='/address' component={Address} />
        </div>
      </Router>
      )  
    }
}