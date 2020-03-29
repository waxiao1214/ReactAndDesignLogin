import React, { Component } from 'react';
import { Button } from 'antd';
import 'tachyons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from  'react-redux';
import 'antd/dist/antd.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import * as actions from './store/actions/auth';
import PrivateRouter from './router/privateRouter'

export default class App extends Component {
 render() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route path="/signup">
          <Signup/>
          </Route>
          <PrivateRouter path="/dashboard/home">
          <Dashboard/>
          </PrivateRouter>
        </Switch>
    </Router>
  )
 }
}
