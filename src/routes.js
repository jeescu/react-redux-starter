import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Posts from './components/posts';
import Post from './components/post';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path="post" component={Post} />
    </Route>
  </Router>
);
