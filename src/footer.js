import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';
import home from './images/homeIcon.png';


class Homeicon extends Component {
    render(){
        return(
        <div>
          <Link to="/"><img src={home} className="myHome"/></Link>
        </div>
        );
    }


};

export default Homeicon;