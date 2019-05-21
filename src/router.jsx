import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Basic from './layouts/Basic/index';
import User from './layouts/User/index';
const router = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact strict from="/" to="/user/login" />
        <Route path="/user/login" component={User} />
        <Route path="/" component={Basic} />
      </Switch>
    </Router>
  );
};
export default router;
