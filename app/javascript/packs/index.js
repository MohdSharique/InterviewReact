import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <BrowserRouter>
          <Route path="/" component={App} />
    </BrowserRouter>,  document.getElementById('root') 
    )
  })