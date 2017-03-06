import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import AdminLogin from './modules/adminLogin';
import AdminDashboard from './modules/adminDashboard';
import ViewFeedback from './modules/viewFeedback';
import AddPath from './modules/addPath';
import AddUser from './modules/addUser';
import AmbassadorTask from './modules/ambassadorTask';
import SessionRequest from './modules/sessionRequest';
import MentorRequest from './modules/mentorRequest';
import BrowseUsers from './modules/browseUsers';
import ViewPath from './modules/viewPath';
import AddCourse from './modules/addCourse';
import EditCourse from './modules/editCourse';
import AddSession from './modules/addSession';
let loggedInState = false;
function requireAuth(nextState, replace, callback) {
  fetch("https://0.0.0.0:8000/checkAuth", {
    method: "GET",
    //body: loginCreds,
    credentials: 'include',
    //headers: headers
  }).then(result => {
    if (result.ok) {
      loggedInState = true;
    }
    console.log(loggedInState);
    if (!loggedInState) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback();
  }).catch(function (error) {
    console.log('There has been a problem with your fetch operation: ' + error);
    if (!loggedInState) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback(error);
  });
}
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AdminLogin} />
    <Route path="/adminDashboard" component={AdminDashboard} onEnter={requireAuth}>
      <Route path="/viewFeedback" component={ViewFeedback} />
      <Route path="/addPath" component={AddPath} />
      <Route path="/addCourse" component={AddCourse} />
      <Route path="/addSession" component={AddSession} />
      <Route path="/addUser" component={AddUser} />
      <Route path="/ambassadorTask" component={AmbassadorTask} />
      <IndexRoute component={SessionRequest} />
      <Route path="/mentorRequest" component={MentorRequest} />
      <Route path="/browseUsers" component={BrowseUsers} />
      <Route path="/viewPath" component={ViewPath} />
      <Route path="/editCourse/:id" component={EditCourse} />
    </Route>
  </Router>,
  document.getElementById('root')
);
