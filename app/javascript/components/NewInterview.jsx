import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import {createInterview, edit} from '../redux/actions/interviewActions';
const NewInterview = () => {

  const {title, start_time, end_time, participants} = useSelector(
    state => state.interview
  );

    const handleSubmit = (e) =>{
        e.preventDefault();
        let data= {
          interview: {
            title: title,
            start_time: start_time,
            end_time: end_time
          }
        }
        dispatch(createInterview(data))
    };

    const changeHandler = (key, value) => {
        dispatch(edit(key, value))
    }
    
    return (
        <div>
            <h1> New Interview </h1>
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

export default NewInterview;