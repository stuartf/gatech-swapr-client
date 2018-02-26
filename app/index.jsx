import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes form './routes';

// Require stylesheets as needed

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('#app')
);
