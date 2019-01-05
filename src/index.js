import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Cities from './cities';
import * as serviceWorker from './serviceWorker';
import User from './header';
import Login from './login';
import Signup from './signup';



const routing = (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cities" component={Cities} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} /> 
        {/* aqui hacemos la ruta de home con el icono, no estoy seguro de si esta bine enrutado o no en "/landing" */}
        {/* <Route component={Notfound} /> */}
        </Switch>
      </div>
    </Router>
  )

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
