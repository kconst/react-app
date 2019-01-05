import React, {Component} from 'react';
import './App.css';
// import Home from './App.js'; //importamos el componente home de nuestra app.js, y lo usamos aqui(tuvimos que poner export en el componente Home en App.js)
import Homeicon from './footer'
import User from './header';


class Cities extends Component{
    render(){
        return(
            <div className="cityBox">
            <User />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Homeicon />
           

            
            </div>
        );
    }
    
};

class Box extends Component{
    render(){
        return(
            <div className="box-cities"> <p>Hello Team</p></div>
        );
    }
};

export default Cities;
