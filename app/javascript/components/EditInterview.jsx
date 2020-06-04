import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getInterview} from '../redux/actions/interviewActions'
const Main = (props) => {

    const id = props.match.params.id;    
    const {title, start_time, end_time, participants} = useSelector(state => state.interview);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInterview(id))
    }, [])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data= {
          interview: {
            title: title,
            start_time: start_time,
            end_time: end_time
          }
        }
        
        dispatch(submitInterview(data, id));
        // axios.patch(`http://localhost:3000/interviews/${props.match.params.id}`, {data})
        //   .then(res => {
        //     console.log(res);
        //   })
    };

    const changeHandler = (key, value) => {
        dispatch(edit(key, value))
    }

    return (
        <div> 
            <h1> Edit Interview </h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    Title :
                    <input type="text" value={title} onChange={(e) => changeHandler('title', e.target.value)}/>
                </label><br></br>
                <label>
                    Start Time :
                    <input type="datetime-local" value={start_time} onChange={(e) => changeHandler('start_time', e.target.value)}/>
                </label><br></br>
                <label>
                    End Time :
                    <input type="datetime-local" value={end_time} onChange={(e) => changeHandler('end_time', e.target.value)}/>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form> 

        </div>
    );
}

export default Main;