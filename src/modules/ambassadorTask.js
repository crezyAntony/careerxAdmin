import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');



class AmbassadorTask extends React.Component {
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
                        <form className="addTask-form">
                        <div className="row">
                                <div className="input-field col s12 center">
                                    <p className="center login-form-text">Ambassador Task</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">assignment</i>
                                    <input id="taskTitle" type="text" />
                                    <label>Task Title</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">priority_high</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose your Option</option>
                                        <option value="1">Level1</option>
                                        <option value="2">Level2</option>
                                        <option value="3">Level3</option>
                                    </select>
                                    <label>Priority Level</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">place</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose your Option</option>
                                        <option value="1">Location1</option>
                                        <option value="2">Location2</option>
                                        <option value="3">Location3</option>
                                    </select>
                                    <label>Location</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">room</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose your Option</option>
                                        <option value="1">Room1</option>
                                        <option value="2">Room2</option>
                                        <option value="3">Room3</option>
                                    </select>
                                    <label>Room</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">accessibility</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose your Option</option>
                                        <option value="1">Ambassador1</option>
                                        <option value="2">Ambassador2</option>
                                        <option value="3">Ambassador3</option>
                                    </select>
                                    <label>Ambassador</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">assessment</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose your Option</option>
                                        <option value="1">Session1</option>
                                        <option value="2">Session2</option>
                                        <option value="3">Session3</option>
                                    </select>
                                    <label>Session</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="task_description" className="materialize-textarea validate"></textarea>
                                    <label htmlFor="task_description">Description</label>
                                </div>
                            </div>




                            <div className="row">
                                <div className="input-field col s12 ">
                                    <a href="#" className="btn waves-effect waves-light col s12 hoverable">Assign Task</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
export default AmbassadorTask;