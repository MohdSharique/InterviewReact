import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {getInterview} from '../redux/actions/interviewActions'
import {addParticipant, edit} from '../redux/actions/participantActions'

const Main = (props) => {
    
    const id = props.match.params.id;    
    const {title, start_time, end_time, participants} = useSelector(state => state.interview);

    const {email, role} = useSelector(state => state.participant);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInterview(id))
    }, [])

    // console.log(interviewData);
    

    const participantSubmit = (e) =>{
        e.preventDefault();
        let data= {
          participant: {
            email: email,
            role: role,
            interview_id: props.match.params.id
          }
        }
        dispatch(addParticipant(data));
    };

    const changeHandler = (key, value) => {
        dispatch(edit(key, value))
    }

    return (
        <div> 
            <h1> Show Interview </h1> 
            {!title ? ("") : (
                <div>
                    <strong> Title: </strong> {title} <br/>
                    <strong> Start Time: </strong> {start_time} <br/>
                    <strong> End Time:</strong> {end_time} <br/>
                </div>
            )}
            <br/>
            {!participants ? ("") : (
            <div id = "participants">    
                <h3> Participants</h3>
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
                                </tr>
                            ))
                        }
                    </tbody>
                </table>    
            </div>     
            )}
            <br/><h3> Add Participant</h3>
            <form onSubmit = {participantSubmit}>
                <label>
                    Email :
                    <input type="text" value={email} onChange={(e) => changeHandler('email', e.target.value)}/>
                </label><br></br>
                <label>
                    Role :
                    <input type="datetime-local" value={role} onChange={(e) => changeHandler('role', e.target.value)}/>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default Main;