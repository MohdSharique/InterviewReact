import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {getParticipants} from '../redux/actions/participantActions';
import { useSelector, useDispatch } from 'react-redux';
const Participants = () => {

    const participants = useSelector(
        state => state.participants
    );
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getParticipants())
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