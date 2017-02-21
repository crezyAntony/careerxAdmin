import React from 'react';
import '../App.css';
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount() {
        window.jQuery('ul.tabs').tabs();
        window.jQuery('select').material_select();

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="top">
                <div id="addUser-page" className="row">
                    <div className="col s12 z-depth-4 card-panel">
                        <form className="addUser-form">
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <p className="center login-form-text">Add User</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="userfirstname" type="text" />
                                    <label>First name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="usersecondname" type="text" />
                                    <label>Second name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="useremailid" type="email" />
                                    <label>User Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">accessibility</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose User Role</option>
                                        <option value="ambassador">Ambassador</option>
                                        <option value="counsellor">Counsellor</option>
                                        <option value="author">Author</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 ">
                                    <a href="#" className="btn waves-effect waves-light col s12 hoverable">Add User</a>
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