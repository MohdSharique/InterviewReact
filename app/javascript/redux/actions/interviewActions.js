import {GET_INTERVIEWS, GET_INTERVIEW, CREATE_INTERVIEW, EDIT_INTERVIEW, UPDATE_INTERVIEW} from './types'

export function getInterviews() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/interviews');
            const data = await res.json();
            
            dispatch({
                type: GET_INTERVIEWS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getInterview(id) {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/interviews/${id}`);
            const data = await res.json();
            console.log(data)

            dispatch({
                type: GET_INTERVIEW,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function createInterview(data) {
    return async (dispatch) => {
        try {
            const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
    
        fetch(`http://localhost:3000/interviews`, req)
            .then(res => {
                console.log(res)
                if(res.ok) {
                alert("Interview Created");
                return <Redirect to="/" /> 
                }
                console.log("success", res)
                
                dispatch({
                    type: CREATE_INTERVIEW,
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
        type: EDIT_INTERVIEW,
        payload: {key, value}
    }
}

export function submitInterview(data, id) {
    return async (dispatch) =>{
        try {
          const req = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          };
      
          fetch(`http://localhost:3000/interviews/${id}`, req)
            .then(res => {
                dispatch({
                    type: UPDATE_INTERVIEW,
                    payload: res.data
                })
            })
        } catch(error) {
          console.log(error);
        }
    }
}