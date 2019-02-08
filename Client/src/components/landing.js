import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom'
import '../App.css';
import logo from '../images/MYtineraryLogo.png';
import arrow from '../images/circled-right-2.png';
import home from '../images/homeIcon.png'; //yo doy el nombre de importacion para luego usarlo, en este caso home.


class LandingPage extends Component {
  render() {
    return (
    
      
      <div className="landing">
        <div className="logo">
          <img src={logo} className="myLogo" />
        </div>
        <div className="main-text">
          <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
        </div>
        <div className="main-text2">
          <p>Start browsing</p>
        </div>
        <div className="arrow">
          <Link to="/cities"><img src={arrow} className="myArrow"/></Link>
        </div>
        <div className="main-text">
          <p>Want to build your own MYtinerary?</p>
        </div>
        <div>
          <Link to="/"><img src={home} className="myHome"/></Link>
        </div>
      
      </div>
    
    );
  }
};


export default LandingPage;