import {GET_PARTICIPANTS, ADD_PARTICIPANT} from './types';

export function getParticipants() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/participants');
            const data = await res.json();
            
            dispatch({
                type: GET_PARTICIPANTS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function addParticipant(data) {
    return async (dispatch) => {
        try {
            const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
    
        fetch(`http://localhost:3000/participants`, req)
            .then(res => {
                dispatch({
                    type: ADD_PARTICIPANT,
                    payload: res.data
                });
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function edit(key, value) {
    return {
        type: EDIT_PARTICIPANT,
        payload: {key, value}
    }
}