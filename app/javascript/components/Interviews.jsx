import React from 'react';
import {NavLink} from 'react-router-dom';
const Interviews = () => {
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
                <tr>
                    <td> One </td>
                    <td> Two </td>
                    <td> Three </td>
                    <td><NavLink exact to="/interviews/:id/show">Show</NavLink></td>
                    <td><NavLink exact to="/interviews/:id/edit">Edit</NavLink></td>
                    <td><NavLink exact to="/interviews/:id/destroy">Destroy</NavLink></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}

export default Interviews;