import axios from "axios";

export function  getItineraries(cityId){  //este parametro tambine lo sera en nuestro componente en el componetdidmount
    return dispatch =>{
        axios.get(`/itinerary/${cityId}`).then(
            res =>{console.log(res); dispatch (itineraries(res.data))}
            
        )
    }
}

export function itineraries(itinerary){
    console.log(itinerary);
    return { 
        type:"ALL_ITINERARIES",
        payload: itinerary
    }
    
}