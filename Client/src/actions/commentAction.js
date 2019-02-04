import axios from 'axios';

export function getComments(itineraryId){
    return dispatch => {
        axios.get(`/comment/${itineraryId}`).then(
            res =>{
                dispatch(gcomments(res.data))}
        )
    }
}

export function gcomments(comment){
    return{
        type: "GET_COMMENTS",
        payload: comment
    }
}


export function postComments(comment){
    return dispatch => {
        axios.post(`/comment`, comment).then(
            res =>{
                dispatch(comments(res.data))}
        ) //aqui tenemos el /comments que sera la url y comment que sera nuestro props.
    }
}

export function comments(comment){
    return{
        type: "ALL_COMMENTS",
        payload: comment
    }
}