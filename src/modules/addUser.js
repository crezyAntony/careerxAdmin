import React from 'react';
import '../App.css';
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.userSubmit = this.userSubmit.bind(this);
    }
    componentDidMount() {
   //     var that = this;
        window.jQuery('ul.tabs').tabs();
        window.jQuery('select').material_select();
    }
    userSubmit(e) {
        e.preventDefault();
    //    var that = this;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = {
            'fname': document.getElementById('user')[0].value,
            'lname': document.getElementById('user')[1].value,
            'email': document.getElementById('user')[2].value,
            'role': document.getElementById('user')[3].value
        }
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/addUser", {
            method: "POST",
            body: searchParams,
            headers: headers
        }).then(result => { if (result.ok) { return result.text(); } if (result.status === 409) { return result.text() } })
            .then(status => {
                window.Materialize.toast(status, 3000);
                document.getElementById('user')[0].value = "";
                document.getElementById('user')[1].value = "";
                document.getElementById('user')[2].value = "";
                document.getElementById('user')[3].value = "";
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });

    }
    render() {
        return (
            <div className="top">
                <div id="addUser-page" className="row">
                    <div className="col s12 z-depth-4 card-panel">
                        <form className="addUser-form" id="user" action="" onSubmit={this.userSubmit}>
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <p className="center login-form-text">Add User</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="userfirstname" type="text" required/>
                                    <label>First name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="userlastname" type="text" required/>
                                    <label>Last name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="useremailid" type="email" required/>
                                    <label>User Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">accessibility</i>
                                    <select name="role"required>
                                        <option value="">Choose User Role</option>
                                        <option value="ambassador">Ambassador</option>
                                        <option value="counsellor">Counsellor</option>
                                        <option value="author">Author</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 ">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit" name="action">Add User</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddUser; 