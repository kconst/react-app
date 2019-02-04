

const initState = {
    activities: []
}

const activityReducer = ( state = initState, action ) =>{
    
    if( action.type === "ALL_ACTIVITIES"){
        return{
            activities: action.payload
        }
    }
    return state;
}

export default activityReducer;
