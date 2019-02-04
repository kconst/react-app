import axios from 'axios';

export function getActivities(itineraryId){
    console.log(itineraryId)
    return dispatch => {
        axios.get(`/activity/${itineraryId}`).then(
            res =>{
                console.log(res.data)
                dispatch (activities(res.data))}
        )
    }
}

export function activities(activity){
    return {
        type:"ALL_ACTIVITIES",
        payload: activity
    }
}