import React, { Component } from 'react';
// import logo from './logo.svg';
import Member from "./members";//member la cree yo para probar cosas con props.
import './App.css';
import LandingPage from './landing';
import Cities from './cities';
import User from './header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
    
        <LandingPage />
      </div>    
    );
  }
};

export default App;
