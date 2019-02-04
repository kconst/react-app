import React, { Component } from 'react';
import '../App.css';
import Homeicon from './footer';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryAction';
import Activities from './Activities';





class Itineraries extends Component{

    constructor(){
        super();
        this.state = {
            itineraries: [],
            viewActivities: ''
        };
    }
//    state ={
//        itineraries:[],
//    };

    componentDidMount(){
     
        const cityId = this.props.match.params.id
        this.props.getItineraries(cityId)

        // this.props.getItineraries();

        console.log(this.props);
    }

    toggleMenu = (event) =>{
        console.log("works!")
        event.preventDefault();
        this.setState({viewActivities: event.target.id});
    }

    render(){
        console.log('ojo', this.props);
        return(
            <div >
                
                <h3>Avaible MYtineraries</h3>
                
                {this.props.myItineraries.itineraries.map(itinerary =>{ 
                    
                    return ( 
                    <div key={itinerary._id}>
                    
                        <img className="profilePic" src={"/uploads/"+itinerary.profilePic} alt="profilePic"/>
                    <div>
                        <div>{itinerary.title}</div>
                        <div>Likes: {itinerary.likes}  /  {itinerary.time}Hours   {itinerary.price}$$</div>
                        <div>{itinerary.hashtag}</div>
                       

                         <button id={itinerary._id} onClick={this.toggleMenu}>See Actvities</button> {/* ponemos id en vez de itineraryId porque es un tag de html y no pilla el otra valor, hacemos el condicional para que muestre la activitie por itinerary, tenemos que poner id porque lo definimos en la funcion de toggleMenu. */}
                        {this.state.viewActivities === itinerary._id ? <Activities itineraryId={itinerary._id}/> : null} 
                    </div>
                    
                        {/* <Activities itineraryId={itinerary._id}/> */}
                        {/* <button itineraryId={itinerary._id} onClick={this.toggleMenu}>See</button>
                        {this.state.viewActivities == itinerary._id ? <Activities itineraryId={itinerary._id}/> : null} */}
                 </div>
                //  {itinerary._id === "5c473deeab3f1226882a8645" ? <Activities itineraryId={itinerary._id}/> : null}
                    )    
            })}
                 
                <Homeicon/>
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return {
        myItineraries: state.itineraries //itieneraries es el valor que retornamos en nuestro reducer.
    }
};

export default connect(mapStateToProps,{getItineraries})(Itineraries);