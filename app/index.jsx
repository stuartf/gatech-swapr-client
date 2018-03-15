import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Login from './components/views/login';
import { BrowserRouter } from 'react-router-dom'

// Require stylesheets as needed

/*ReactDOM.render(
    <BrowserRouter routes={routes} />,
    document.querySelector('#app')
);*/

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));
