import {GET_INTERVIEWS} from './types'
// import React from 'react';

export function getInterviews() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/interviews');
            const data = await res.json();
            console.log(data);
            
            dispatch({
                type: GET_INTERVIEWS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}