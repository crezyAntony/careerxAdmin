import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import AdminLogin from './modules/adminLogin';
import AdminDashboard from './modules/adminDashboard';
import ViewEnquiry from './modules/viewEnquiry';
import AddPath from './modules/addPath';
import AddUser from './modules/addUser';
import AmbassadorTask from './modules/ambassadorTask';
import SessionRequest from './modules/sessionRequest';
import MentorRequest from './modules/mentorRequest';
import BrowseUsers from './modules/browseUsers';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/adminLogin" component={AdminLogin} />
    <Route path="/adminDashboard" component={AdminDashboard}>
      <Route path="/viewEnquiry" component={ViewEnquiry} />
      <Route path="/addPath" component={AddPath} />
      <Route path="/addUser" component={AddUser} />
      <Route path="/ambassadorTask" component={AmbassadorTask} />
      <Route path="/sessionRequest" component={SessionRequest} />
      <Route path="/mentorRequest" component={MentorRequest} />
      <Route path="/browseUsers" component={BrowseUsers} />
    </Route>
  </Router>,
  document.getElementById('root')
);
