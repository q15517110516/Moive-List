import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import netflix from './netflix-logo.jpg';
import Router from './Router';




class App extends Component{
  render(){
    return(
      <div align = "center">
        <img className = "netflix" src = {netflix} style = {{width: "50%"}}/>
        <Router/>
      </div>
    )
  }
}
export default App;
