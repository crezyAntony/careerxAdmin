import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');
import { Link } from 'react-router'


class ViewPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            options_path: [],
            courses: [],
            path: '',
            flag: true
        };
        this.deleteCourse = this.deleteCourse.bind(this);
        this.fetchCourses = this.fetchCourses.bind(this);
        this.updateUI = this.updateUI.bind(this);
    }
    updateUI() {
        var that = this;
        window.jQuery('.collapsible').collapsible();
        //window.jQuery('select').material_select();
        window.jQuery('.chips').material_chip();
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/fetchPath',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (paths) {
                console.log(paths);
                var options =
                    paths.map((path, index) => (
                        <option key={index} value={path.pathTitle}>{path.pathTitle}</option>
                    ))
                that.setState({ options_path: options });
                window.jQuery('select#path').material_select();
                window.jQuery('.select-wrapper').on('change', 'select#path', function () {
                    // var id = window.jQuery(this).attr('id');
                    var value = window.jQuery(this).val();
                    that.setState({ 'path': value });
                    that.fetchCourses(value);
                    that.setState({ course: value });
                    console.log(that.state);
                });

            }
        })
    }
    componentDidMount() {
        this.updateUI();
    }

    deleteCourse(id) {
        var that = this;
        if (window.confirm("Are you sure to delete this course?")) {
            window.jQuery.ajax({
                url: 'https://0.0.0.0:8000/deleteCourse/' + id,
                type: 'GET',
                dataType: 'json',
                //crossDomain: true,
                success: function (result, status) {
                    window.Materialize.toast(status, 3000);
                    that.fetchCourses(window.jQuery('select#path').val());
                },
                error: function (xhr, status, error) {
                    if (status === 500) {
                        window.Materialize.toast('Deletion failed', 3000);
                    }
                }
            })
        }


    }
    fetchCourses(value) {
        var that = this;
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/' + value + '/fetchCourse',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (courses) {
                console.log(courses);
                var course_list =
                    courses.map((course, index) => (
                        <li key={index}>
                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>{course.courseTitle}</div>
                            <div className="row collapsible-body">
                                <div className="row">
                                    <div className="col s2">
                                        <b>Description :</b>
                                    </div>
                                    <div className="col s10">
                                        <span>{course.courseDescription}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s2">
                                        <b>Duration :</b>
                                    </div>
                                    <div className="col s4">
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="col s2">
                                        <b>Course Fee :</b>
                                    </div>
                                    <div className="col s4">
                                        <span>{course.courseFee}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s2">
                                        <b>Author :</b>
                                    </div>
                                    <div className="col s4">
                                        <span>{course.author}</span>
                                    </div>
                                    <div className="col s2">
                                        <b>Level :</b>
                                    </div>
                                    <div className="col s4">
                                        <span>{course.courseLevel}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <button className="btn waves-effect waves-light red" onClick={() => that.deleteCourse(course.id)}><b>Delete This Course</b></button>
                                    </div>
                                    <div className="col s6">
                                        <Link to={`/editCourse/${course.id}`} className="btn waves-effect waves-light green"><b>Edit This Course</b></Link>
                                    </div>
                                </div>

                            </div>
                        </li>
                    ));
                that.setState({ courses: course_list });
                /*
            that.setState({ options_course: options });
            window.jQuery('select#course').material_select();
            window.jQuery('.select-wrapper').on('change', 'select#course', function () {
                var id = window.jQuery(this).attr('id');
                var value = window.jQuery(this).val();
                that.setState({ course: value });
                console.log(that.state);
            });
            */
            }
        })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="row">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="row">
                        <div className="col s12 m8 offset-m3 card-panel">
                            <div className="row">
                                <div className="input-field col s12 center">
                                    <p className="center login-form-text">Choose path to list corresponding courses</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select id="path">
                                        <option value="">Choose Path</option>
                                        {this.state.options_path}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 offset-m3">

                            <ul className="collapsible popout" data-collapsible="accordion">
                                {this.state.courses}
                            </ul>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default ViewPath;