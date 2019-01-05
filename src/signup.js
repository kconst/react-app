
import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Homeicon from './footer';


class Signup extends Component{
    render(){
        return(
            <div className="titleSignup">
                <h1>Crearse una cuenta no esta disponible.</h1>
                <Homeicon />
            </div>
            
        );
    }
    
    
     
};

export default Signup;