import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import Login from './components/views/login.jsx';
//import StudentDash from './components/views/studentDashboard';
//import AdminDash from './components/views/adminDashboard';



function loggedIn() {
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}

// TODO: render different page (Login, StudentDash, AdminDash) based on login status
export default (
    <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path='login' component={Login} />
        //<Route path='dashboard' component={StudentDash} onEnter={requireAuth} />
        <Route path='*' component={Login} />
    </Route>
);

