import React from 'react';
import '../App.css';
//import { browserHistory } from 'react-router';
class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 'loggedIn': false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = {
            'email': document.getElementById('login')[0].value,
            'password': document.getElementById('login')[1].value
        }
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/login", {
            method: "POST",
            body: searchParams,
            headers: headers,
            credentials: 'include'
        }).then(result => {
            if (result.ok) { return result.json(); }
            if (result.status === 401)
            { window.Materialize.toast('Username/password incorrect', 3000); }
            throw new Error('Network response was not ok.');
        })
            .then(user => {
                console.log('User logged in', user);
                const {location} = this.props;
                console.log(location.state);
                if (location.state && location.state.nextPathname) {
                    this.props.router.replace(location.state.nextPathname)
                } else {
                    console.log('routing to adminDashboard');
                    this.props.router.replace('/adminDashboard');
                }
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });
    }
    render() {
        return (
            <div className="top">
                <div id="login-page" className="row">
                    <div className="col s12 z-depth-4 card-panel">
                        <form className="login-form" id="login" action="" onSubmit={this.handleSubmit}>
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
                                    <button type="submit" className="btn waves-effect waves-light col s12 hoverable">Login</button>
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