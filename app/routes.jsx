import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Login from './components/views/login';
import StudentDash from './components/views/studentDashboard';
import AdminDash from './components/views/adminDashboard';

// TODO: render different page (Login, StudentDash, AdminDash) based on login status
export default (
    <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path='*' component={Login} />
    </Route>
);
