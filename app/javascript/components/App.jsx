import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Interviews from './Interviews';
import NewInterview from './NewInterview';
import Participants from './Participants';
import ShowInterview from './ShowInterview';
import EditInterview from './EditInterview';

import store from  '../redux/store';
import {Provider} from 'react-redux';


const App = (props) => {
    return(
      <Provider store={store}>
        <div className = "Main">
          <Navbar />
          <RouteSwitch />
        </div>
      </Provider>
    );
}

const Navbar = () => (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <div className="navbar-brand">Interview Creation App</div>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <div className="nav-link"> 
                <NavLink exact className="nav-link" activeClassName="active" to="/"> Home </NavLink>
                <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"> 
              <NavLink exact className="nav-link" activeClassName="active" to="/interviews/new"> New Interview </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink exact className="nav-link" activeClassName="active" to="/participants"> Participants </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);


const RouteSwitch = () => (
  <Switch>
    <Route exact path="/" component={Interviews} />
    <Route exact path="/interviews/new" component={NewInterview} />
    <Route exact path="/participants" component={Participants} />
    <Route exact path="/interview/:id/edit" component={EditInterview} />
    <Route exact path="/interview/:id/show" component={ShowInterview} /> 
  </Switch>
);

export default App;