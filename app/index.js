import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Login from './components/views/Login';
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
