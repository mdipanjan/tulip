import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect,withRouter,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import './App.css';
import { createBrowserHistory } from "history";
import MainLayout from '../src/layout/Main'
import Login from './Components/Login/Login.js';
import Homepage from './views/Homepage/Homepage.js';
import Cart from './views/Cart/Cart';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        {/* <Route path="/login" component={Login}/> */}
        <Route path="/" component={MainLayout} />
        {/* <Redirect exact path="/" to="/home" /> */}
      </Router>
    )
  }
}


export default App;
