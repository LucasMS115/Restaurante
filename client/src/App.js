import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom'; 
import './assets/styles/global.css';

import Adm from './pages/Adm';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reserves from './pages/Reserves';
import Teste from './pages/Teste';
import User from './pages/User';
import Working from './pages/Working';


class App extends Component{

  render(){
    return (
      /*basename =  {window.location.pathname || ""}  */
      <HashRouter>
        <Switch>
  
          <Route path="/" exact component={Home}/>
          <Route path="/adm" exact component={Adm}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/reserves" exact component={Reserves}/>
          <Route path="/teste" exact component={Teste}/>
          <Route path="/user" exact component={User}/>
          <Route path="/working" exact component={Working}/>
  
        </Switch>
      </HashRouter>
    );
  }
  
}

export default App;
