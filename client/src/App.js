import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import Adm from './pages/Adm';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reserves from './pages/Reserves';
import Teste from './pages/Teste';
import User from './pages/User';

import './assets/styles/global.css';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
  
          <Route path="/" exact component={Home}/>
          <Route path="/adm" exact component={Adm}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/reserves" exact component={Reserves}/>
          <Route path="/teste" exact component={Teste}/>
          <Route path="/user" exact component={User}/>
  
        </Switch>
      </Router>
    );
  }
  
}

export default App;
