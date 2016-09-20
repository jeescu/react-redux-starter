import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';

export default () => (
    <Router history={ browserHistory }>
        <Route path="/" >
            <IndexRoute component={ App }/>
        </Route>
    </Router>
)