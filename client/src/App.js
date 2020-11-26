import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './assets/styles/global.css';

import Adm from './pages/Adm';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reserves from './pages/Reserves';
import ReservesContinue from './pages/Reserves/continue.js';
import ReservesConclude from './pages/Reserves/conclude.js';
import Teste from './pages/Teste';
import User from './pages/User';
import Working from './pages/Working';


class App extends Component{

  state = {
    url: ""
  }

  componentDidMount(){
    var temp = localStorage.getItem('url');
    if(temp){
      this.setState({url: temp});
      console.log(temp);
    } 
    else{
      this.setState({url: window.location.pathname});
      localStorage.setItem('url', window.location.pathname);
      console.log("n tem");
    }
  }

  render(){
    return (
      /* window.location.pathname  */
      <Router basename={this.state.url}>
        <Switch>
  
          <Route path="/" exact component={Home}/>
          <Route path="/adm" exact component={Adm}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/reserves" exact component={Reserves}/>
          <Route path="/reservesContinue" exact component={ReservesContinue}/>
          <Route path="/reservesConclude" exact component={ReservesConclude}/>
          <Route path="/teste" exact component={Teste}/>
          <Route path="/user" exact component={User}/>
          <Route path="/working" exact component={Working}/>
  
        </Switch>
      </Router>
    );
  }
  
}

export default App;
