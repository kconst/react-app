import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Cities from './components/cities';
import * as serviceWorker from './serviceWorker';
import Login from './components/login';
import Signup from './components/signup';
import { createStore,  applyMiddleware, compose } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
//import rootReducer from './reducers/rootReducer'; //necesitamos esto y el thunk para que nuestra app no se sincrona. Buscar info, importante.
import cityReducer from "./reducers/cityReducer"
import thunk from 'redux-thunk';
import Itineraries from './components/itinerary';
import rootReducer from './reducers/rootReducer';
// import Activities from './components/activity';
import Slider from './components/slider';
import Activities from './components/Activities';
import Comments from './components/comments'







const initState = {};

 const store = createStore(rootReducer, initState ,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); //aqui creamos nuestro store, donde almacenaremos toda la info de nuestra app(componentes)


const routing = (    //aqui hacemos la ruta de nuestras pagina, se podia haber hecho en app y luego renderizar app en vez de routing( mirar esto y ver si cambiarlo)
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cities" component={Cities} />
        <Route path="/itinerary/:id" component={Itineraries} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} /> 
        <Route path="/slider" component={Slider} />
        <Route path="/sliders" component={Activities} /> 
        <Route path="/comments" component={Comments} />
        
        </Switch>
      </div>
    </Router>
  )
  

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}> {routing} </Provider>, document.getElementById('root'));




serviceWorker.unregister();
