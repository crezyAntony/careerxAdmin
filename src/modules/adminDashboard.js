import '../App.css';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { browserHistory, Link } from 'react-router'


class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fetch("https://0.0.0.0:8000/logout", {
      method: "GET",
      credentials: 'include'
    }).then(result => { if (result.ok && result.status === 200) { browserHistory.push('/');  } })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error);
      });
  }
  render() {
    return (
      <div >
        <ul id='slide-out' className='side-nav fixed '>
          <li>
            <div className="userView">
              <div className="background">
                <img src="images/image-hd-23.jpg" alt="profile_pic" />
              </div>
              <a href="#!user"><img className="circle" alt="user_pic" src="images/login-logo.jpg" /></a>
              <a href="#!name"><span className="white-text bold name">Nithesh Krishnan</span></a>
              <a href="#!email"><span className="white-text bold email">n@umn.one</span></a>
            </div>
          </li>
          <li className="hoverable"><Link to="/addPath"><i className="material-icons">library_books</i>Add Path</Link></li>
          <li className="hoverable"><Link to="/addCourse"><i className="material-icons">library_books</i>Add Course</Link></li>
          <li className="hoverable"><Link to="/adminDashboard"><i className="material-icons">new_releases</i>Session Request</Link></li>
          <li className="hoverable"><Link to="/mentorRequest"><i className="material-icons">new_releases</i>Mentor Request</Link></li>
          <li className="hoverable"><Link to="/addUser"><i className="material-icons">account_box</i>Add User</Link></li>
          <li className="hoverable"><Link to="/viewPath"><i className="material-icons">library_books</i>List Course</Link></li>


          <li>
            <div className="divider"></div>
          </li>
          <li className="hoverable"><a className="waves-effect" onClick={this.logout}><i className="material-icons prefix">power_settings_new</i>Logout</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default AdminDashboard;