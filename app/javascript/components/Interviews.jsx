import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const Interviews = () => {

    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/interviews').then((res) => {
            console.log(res.data);
            setInterviews(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div id = "interviews">
            <h1> Interview List </h1>
            <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Start-Time</th>
                <th>End-Time </th>
            </tr>
            </thead>
        
            <tbody>
                {
                    interviews.map(interview => (
                        <tr key={interview.id}>
                            <td> {interview.title} </td>
                            <td> {interview.start_time} </td>
                            <td> {interview.end_time} </td>
                            <td><NavLink to={`/interview/${interview.id}/show`}>Show</NavLink></td>
                            <td><NavLink to={`/interview/${interview.id}/edit`}>Edit</NavLink></td>
                            <td><NavLink exact to="/interview/:id/destroy">Destroy</NavLink></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    );
}

export default Interviews;