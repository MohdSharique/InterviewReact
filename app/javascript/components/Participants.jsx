import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const Participants = () => {

    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/participants').then((res) => {
            console.log(res.data);
            setParticipants(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div id = "participants">
            <h1> Participants List </h1>
            <table>
            <thead>
            <tr>
                <th>Email</th>
                <th>Role</th>
            </tr>
            </thead>
        
            <tbody>
            {
                    participants.map(participant => (
                        <tr key={participant.id}>
                            <td> {participant.email} </td>
                            <td> {participant.role} </td>
                            <td><NavLink exact to="/participant/:id/edit">Edit</NavLink></td>
                            <td><NavLink exact to="/participant/:id/destroy">Destroy</NavLink></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    );
}

export default Participants;