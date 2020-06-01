import React from 'react';
import {NavLink} from 'react-router-dom';
const Participants = () => {
    return (
        <div id = "interviews">
            <h1> Interview List </h1>
            <table>
            <thead>
            <tr>
                <th>Email</th>
                <th>Role</th>
            </tr>
            </thead>
        
            <tbody>
                <tr>
                    <td> asd@gmail.com </td>
                    <td> Interviewer </td>
                    <td><NavLink exact to="/participants/:id/show">Show</NavLink></td>
                    <td><NavLink exact to="/participants/:id/edit">Edit</NavLink></td>
                    <td><NavLink exact to="/participants/:id/destroy">Destroy</NavLink></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}

export default Participants;