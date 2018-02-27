import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import routes from './routes.jsx';

// Require stylesheets as needed

ReactDOM.render(
    <BrowserRouter routes={routes} />,
    document.querySelector('#app')
);
