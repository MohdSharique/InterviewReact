import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const NewInterview = () => {

    const [title, setTitle] = useState();
    const [start_time, setStarttime] = useState();
    const [end_time, setEndtime] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let data= {
          interview: {
            title: title,
            start_time: start_time,
            end_time: end_time
          }
        }
    
        axios.post(`http://localhost:3000/interviews`, {data})
          .then(res => {
            console.log(res);
          })
      };
    
    return (
        <div>
            <h1> New Interview </h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    Title :
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label><br></br>
                <label>
                    Start Time :
                    <input type="datetime-local" value={start_time} onChange={(e) => setStarttime(e.target.value)}/>
                </label><br></br>
                <label>
                    End Time :
                    <input type="datetime-local" value={end_time} onChange={(e) => setEndtime(e.target.value)}/>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewInterview;