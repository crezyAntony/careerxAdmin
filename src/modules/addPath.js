import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');



class AddPath extends React.Component {
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
            <div className="row">
                <div className="col s12 m8 offset-m3">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s3"><a className="active" href="#test-swipe-1"><b>Add Path</b></a></li>
                        <li className="tab col s3"><a href="#test-swipe-2"><b>Add Course</b></a></li>
                        <li className="tab col s3"><a href="#test-swipe-3"><b>Add session</b></a></li>
                    </ul>
                </div>
                <div id="test-swipe-1" className="col s12 offset-m3">
                    <div className="row">
                        <form className="col s6 z-depth-4 card-panel ">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">title</i>
                                    <input id="path_title" type="text" className="validate" />
                                    <label htmlFor="path_title">Path Title</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="pathDescription" className="materialize-textarea validate"></textarea>
                                    <label htmlFor="pathDescription">Description</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="file-field input-field col s6">
                                    <div className="btn red lighten-2">
                                        <i className="material-icons">file_upload</i>
                                        <input type="file" accept=".png, .jpg, .jpeg" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-m8">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit" name="action">Add Path
                                <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="test-swipe-2" className="col s12 offset-m3">
                    <div className="row">
                        <form className="col s6 z-depth-4 card-panel ">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">title</i>
                                    <input id="course_title" type="text" className="validate" />
                                    <label htmlFor="course_title">CourseTitle</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose Path</option>
                                        <option value="Big Data">Big Data</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Neural Networks">Neural Networks</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="course_description" className="materialize-textarea validate"></textarea>
                                    <label htmlFor="course_description">Description</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">timelapse</i>
                                    <input id="course_duration" type="text" className="validate" />
                                    <label htmlFor="course_duration">Duration in number of sessions</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">attach_money</i>
                                    <input id="course_fee" type="text" className="validate" />
                                    <label htmlFor="course_fee">Fees for the Course</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">perm_identity</i>
                                    <input id="course_author" type="text" className="validate" />
                                    <label htmlFor="course_author">Course Author</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose Level</option>
                                        <option value="Big Data">Begginner</option>
                                        <option value="Machine Learning">Intermediate</option>
                                        <option value="Neural Networks">Expert</option>
                                    </select>
                                </div>
                                <div className="file-field input-field col s6">
                                    <div className="btn red lighten-2">
                                        <span><i className="material-icons">file_upload</i></span>
                                        <input type="file" accept=".png, .jpg, .jpeg" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-m8">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit" name="action">Add Path
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="test-swipe-3" className="col s12 offset-m3">
                    <div className="row">
                        <form className="col s6 z-depth-4 card-panel ">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose Path</option>
                                        <option value="Big Data">Big Data</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Neural Networks">Neural Networks</option>
                                    </select>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange}>
                                        <option value="">Choose Course</option>
                                        <option value="course1">Course 1</option>
                                        <option value="course2">Course 2</option>
                                        <option value="course3">Course 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">perm_identity</i>
                                    <input id="mentor_id" type="text" className="validate" />
                                    <label htmlFor="mentor_id">Mentor Id</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">work</i>
                                    <input id="task_id" type="text" className="validate" />
                                    <label htmlFor="task_id">Task Id</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="start_date" type="date" className="validate datepicker" />
                                    <label htmlFor="start_date">Start Date</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="end_date" type="date" className="validate datepicker" />
                                    <label htmlFor="end_date">End Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">room</i>
                                    <input id="room_id" type="text" className="validate datepicker" />
                                    <label htmlFor="room_id">Room Id</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">info</i>
                                    <input id="session_status" type="text" className="validate datepicker" />
                                    <label htmlFor="session_status">Session Status</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-m8">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit" name="action">Add Path
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}
export default AddPath;