import '../App.css';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Link } from 'react-router'
class AdminDashboard extends Component {
  render() {
    return (
      <div >
        <ul id='slide-out' className='side-nav fixed'>
          <li>
            <div className="userView">
              <div className="background">
                <img src="images/image-hd-23.jpg" alt="profile_pic" />
              </div>
              <a href="#!user"><img className="circle" alt="user_pic" src="images/login-logo.jpg" /></a>
              <a href="#!name"><span className="blue-text name">Admin</span></a>
              <a href="#!email"><span className="blue-text email">jdandturk@gmail.com</span></a>
            </div>
          </li>
          <li className="hoverable"><Link to="/viewEnquiry"><i className="material-icons">mail_outline</i>View Enquiry</Link></li>
          <li className="hoverable"><Link to="/addPath"><i className="material-icons">library_books</i>Add Path</Link></li>
          <li className="hoverable"><Link to="/sessionRequest"><i className="material-icons">new_releases</i>Session Request</Link></li>
          <li className="hoverable"><Link to="/mentorRequest"><i className="material-icons">new_releases</i>Mentor Request</Link></li>
          <li className="hoverable"><Link to="/ambassadorTask"><i className="material-icons">work</i>Ambassador Task</Link></li>
          <li className="hoverable"><Link to="/browseUsers"><i className="material-icons">search</i>Browse Users</Link></li>
          <li className="hoverable"><Link to="/addUser"><i className="material-icons">account_box</i>Add User</Link></li>

          <li>
            <div className="divider"></div>
          </li>
          <li><a className="subheader">Subheader</a></li>
          <li className="hoverable"><a className="waves-effect" href="#!"><i className="material-icons prefix">power_settings_new</i>Logout</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default AdminDashboard;