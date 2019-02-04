
const initState = {
    itineraries: []
}

const itineraryReducer = ( state = initState, action) =>{
 console.log(action);
    if ( action.type === "ALL_ITINERARIES"){
        return{
            itineraries: action.payload
            
        }
        
    }
    return state;
}

export default itineraryReducer;