
const initState ={
    comments: []
}

const commentReducer = (state = initState, action) =>{
    if (action.type === "ALL_COMMMENTS"){
        return{
            comments: action.payload
        }
    }
    else if (action.type === "GET_COMMENTS"){
        return{ 
            comments: action.payload
        }
      }  
    
    return state;
}

export default commentReducer;