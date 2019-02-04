import React, {Component} from 'react';
import '../App.css';
// import Home from './App.js'; //importamos el componente home de nuestra app.js, y lo usamos aqui(tuvimos que poner export en el componente Home en App.js)
import Homeicon from './footer'
import axios from 'axios';//antes de redux importabamos directamente con axios en el componente, ahora redux centralizamos la info.
import { connect } from 'react-redux'; // este connect es actualmente una funcion he invocamos esa funcion para traer de vuelta los componente padre? o por orden?
import { getCities } from '../actions/citiesAction';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



class Cities extends Component{


constructor(){
    super();
    this.state = {
        search: '', //input donde meteremos nuestra busqueda.
        cities: [] //ya podemos poner algo por defecto sin que react no nos deje cambiarlo, pero de momento lo dejaremos vacio para crear el filtro de ciudades.
    };
}

    updateSearch = (event) =>{  //esto lo cambiamos a una arrow function en vez de usar el bind debajo en el componente.
        console.log(event)
        this.setState({search: event.target.value})
    }
    // state = {              //esto ya no sera necesario ya que llamaremos todos los datos a traves de nuestras acciones por lo que ya no traeron mas datos directamente dentro de los componentes.
    //     cities: [],
    // };

    componentDidMount(){
    
        this.props.getCities();

      console.log(this.props.myCities.cities); 
    }

    // componentDidMount(){

    //     axios.get('/city').then(res => {   //con axios hacemos lo mismo que con fetch, /city es nuestro punto final, donde en nuetro backend tendremos nuestro datos
    //         console.log(res);
    //         this.setState({ cities: res.data});
    //     });
    // }
    render(){
        console.log(this.props)
        // const { posts } = this.props; //grabamos el posts en el state
        let filteredCities = this.props.myCities.cities.filter(    //añadimos el cities que es el nombre que tenemos en el rootReducer del reducer de city
            (city) => {
                return city.name.toLowerCase().indexOf(this.state.search) !== -1; //aqui le decimos que si lo que introducimos no coincide con nada no me devuelva nada
            }
        );
        return(  //aqui creamos la lista de ciudades con ma y trayendo la info de nuestro posts que hemos creado ne nuestro accion
            <div className="boxes"> 
                <h3>CITIES</h3>
                <input type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch} 
                    placeholder="Pick your city!"/>
            
                {filteredCities.map(city =>{ return <div key={city._id} className="box-cities"><Link to={`/itinerary/${city._id}`}>{city.name}<div>{city.country}</div></Link></div>})} 
            
         
                <Homeicon />
            </div>
        );
    }
    
};

const mapStateToProps = (state) =>{
    return {
        myCities: state.cities //data from redux state.cities, cree el state cities en rootReducer.js //myCities sera mi nuevo prop(que usare arriba this.props) donde tendre toda la informacion de mis ciudades.
    }
};

// Cities.propTypes = {
//     getCities: PropTypes.func.isRequired,
//     myCities: PropTypes.object.isRequired
//     };

export default connect (mapStateToProps,{getCities})(Cities);  //aqui añadimos la funcion getCities creada en accion donde tenemos toda nuestra info
