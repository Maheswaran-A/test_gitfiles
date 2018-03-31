import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import CDTTab from '../testComponent/CDTTab';
import LandingPage from '../app/LandingPage';

export default class MainRouter extends Component{
  render(){
    return(
      <Router>
      <div>
        <Route path="/" component= {LandingPage} />
        <Route path="/tab" component= {CDTTab} />
        </div>
      </Router>
    );
  }
}
