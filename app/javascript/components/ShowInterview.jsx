import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const Main = (props) => {
    console.log(props)

    var id = props.match.params.id;
    // const [detail, setDetail] = useState([]);
    
    const [interview, setInterview] = useState({});
    const [participants, setParticipants] = useState([]);

    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:3000/interviews/${id}`).then((res) => {
            console.log(res.data);
            setInterview(res.data.interview)
            setParticipants(res.data.participants)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const participantSubmit = (e) =>{
        e.preventDefault();
        let data= {
          participant: {
            email: email,
            role: role,
            interview_id: props.match.params.id
          }
        }
    
        axios.post(`http://localhost:3000/interviews`, {data})
          .then(res => {
            console.log(res);
          })
      };

    // console.log(interview.title)
    // console.log(detail.interview['title'])
    // console.log(detail.interview.title)
    return (
        <div> 
            <h1> Show Interview </h1> 
            {!interview ? ("") : (
                <div>
                    <strong> Title: </strong> {interview.title} <br/>
                    <strong> Start Time: </strong> {interview.start_time} <br/>
                    <strong> End Time:</strong> {interview.end_time} <br/>
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
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label><br></br>
                <label>
                    Role :
                    <input type="datetime-local" value={role} onChange={(e) => setRole(e.target.value)}/>
                </label><br></br>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default Main;