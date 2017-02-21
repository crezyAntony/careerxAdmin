import React from 'react';
import '../App.css';
class AdminLogin extends React.Component {
    render() {
        return (
                <div className="top">
                        <div id="login-page" className="row">
                            <div className="col s12 z-depth-4 card-panel">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12 center">
                                            <p className="center login-form-text">CareerX Admin Login</p>
                                            <img src="images/login-logo.gif" alt="" className="circle responsive-img valign profile-image-login" />

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="username" type="text" />
                                            <label>Username</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">lock</i>
                                            <input id="password" type="password" />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12 login-text">
                                            <input type="checkbox" id="remember-me" />
                                            <label>Remember me</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12 ">
                                            <a href="/adminDashboard" className="btn waves-effect waves-light col s12 hoverable">Login</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
        )
    }
}
export default AdminLogin; 