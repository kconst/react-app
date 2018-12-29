import React, { Component } from 'react';
// import logo from './logo.svg';
import Member from "./members";//member la cree yo para probar cosas con props.
import './App.css';
import logo from './images/MYtineraryLogo.png';
import arrow from './images/circled-right-2.png';
import home from './images/homeIcon.png';  //yo doy el nombre de importacion para luego usarlo, en este caso home.

class App extends Component {
  render() {
    return (
      <div className="App">
        
          {/* <p><img src={logo} className="App-logo" alt="logo" /></p> */}
         {/* <img src={logo} className="myLogo" /> */}
         <Logo />
         <Text bindText="Find your perfect trip, designed by insiders who know and love their cities." styleClass="main-text"/> 
         {/* <Text bindText="Pancho." styleClass="pepe"/>  */} 
         {/* bindText es una de Text que ultizamos para pasarlo texto por parametros */}
         <Text bindText="Start browsing" styleClass="main-text2"/>
         <Arrow />
         <Text bindText="Want ot build your own MYtinerary?" styleClass="main-text"/>
         <Home />
      </div>
    
    );
  }
};

class Logo extends Component {
    render (){
      return (
        <img src={logo} className="myLogo" />
      );
    }
};


class Text extends Component { //con esta funcion introduzco todos los textos que yo quiera en App, usando Text dentro de App
  render (){
    const textToBind = this.props.bindText;
    const myClass = this.props.styleClass ? this.props.styleClass : 'my-text';//esto es un if (?)que nos dice que apliquemos el estilo de styleClass, sino (:) aplicare los valores por defecto.
    return (
      <p className={myClass}>{textToBind} </p>
    );
  }
 
};

class Arrow extends Component {
  render (){
    return(
      <a href="" ><img src={arrow} className="myArrow"/></a> //className es como una clase de HTML.
    );
  }
};

class Home extends Component {
  render (){
    return(
      <a href=""><img src={home} className="myHome"/></a>
    );
  }
};


export default App;
