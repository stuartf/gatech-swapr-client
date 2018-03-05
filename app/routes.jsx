import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import Login from './components/views/login.jsx';
//import StudentDash from './components/views/studentDashboard';
//import AdminDash from './components/views/adminDashboard';

function loggedIn() {
    // Check if JWT token is valid
    return false;
}

// function requireAuth(nextState, replace) {
//     if (!loggedIn()) {
//         replace({
//             pathname: '/login',
//             state: { nextState.location.pathname }
//         })
//     }
function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

// TODO: render different page (Login, StudentDash, AdminDash) based on login status
export default (
    <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path='login' component={Login} />
        <Route path='*' component={Login} />
    </Route>
);

