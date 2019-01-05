import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import Picuser from './images/user.png';
import Menu from './images/menu.png';

class User extends Component{
    render(){
        return(

            <div className="headerMenu">
                <div className="userBox">
                    <img src={Picuser} className="iconUser" />
                        <p><Link to="/signup">Create Account</Link></p>
                        <p><Link to="/login">Login</Link></p>
                </div>
            <div className="pancho">
                <img src={Menu} className="menuCities" />
            </div>
            </div>
        );
    }
};

export default User;