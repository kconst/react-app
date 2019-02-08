import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing';
import User from './components/header';
// import Header from './components/Header2';


class App extends Component {
  

  
  render() {
    return (
      <div className="App">
        <User/>
        {/* <Header /> */}
    
        <LandingPage />

      </div>    
    );
  }
};

export default App;
