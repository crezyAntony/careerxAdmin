import React from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import { browserHistory } from "react-router";



class AddSession extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options_path: [],
            options_course: [],
            options_room: [],
            options_mentors: [],
            start_date: '',
            end_date: '',
            location: '',
            rooms: '',
            path: '',
            course: '',
            mentor_id: '',
        };
        this.sessionSubmit = this.sessionSubmit.bind(this);
        this.fetchCourses = this.fetchCourses.bind(this);
        this.fetchRooms = this.fetchRooms.bind(this);
        this.fetchMentors = this.fetchMentors.bind(this);
    }
    fetchCourses(value) {
        var that = this;
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/' + value + '/fetchCourse',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },            
            success: function (courses) {
                console.log(courses);
                var options =
                    courses.map((course, index) => (
                        <option key={index} value={course.courseTitle}>{course.courseTitle}</option>
                    ));
                that.setState({ options_course: options });
                window.jQuery('select#course').material_select();
                window.jQuery('.select-wrapper').on('change', 'select#course', function () {
                  //  var id = window.jQuery(this).attr('id');
                    var value = window.jQuery(this).val();
                    that.setState({ course: value });
                    console.log(that.state);
                });
            }
        })
    }
    fetchRooms(value) {
        var that = this;
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/' + value + '/fetchRooms',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },            
            success: function (rooms) {
                console.log(rooms);
                var resultrooms =
                    rooms.map((room, index) => (
                        <option key={index} value={room.roomName}>{room.roomName}</option>
                    ))
                that.setState({ options_room: resultrooms });
                window.jQuery('select#room').material_select();
                window.jQuery('.select-wrapper').on('change', 'select#room', function () {
                    //var id = window.jQuery(this).attr('id');
                    var value = window.jQuery(this).val();
                    //set course in state
                    that.setState({ room: value });
                    console.log(that.state);
                });
            }
        })
    }
    fetchMentors(value) { //mentors from a particular location
        var that = this;
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/' + value + '/fetchMentors',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },            
            success: function (mentors) {
                console.log(mentors);
                var resultmentors =
                    mentors.map((mentor, index) => (
                        <option key={index} value={mentors._id}>{mentor.mentorFirstName + " " +mentor.mentorFirstName}</option>
                    ))
                that.setState({ options_mentors: resultmentors });
                window.jQuery('select#room').material_select();
                window.jQuery('.select-wrapper').on('change', 'select#mentor_select', function () {
                 //   var id = window.jQuery(this).attr('id');
                    var value = window.jQuery(this).val();
                    //set course in state
                    that.setState({ mentor: value });
                    console.log(that.state);
                });
            }
        })
    }
    componentDidMount() {
        var that = this;
        window.jQuery('ul.tabs').tabs();
        window.jQuery('select#location').material_select();
        window.jQuery('select#session_status').material_select();
        window.jQuery('#start_date').pickadate({
            format: 'mm/dd/yyyy',
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100,
            min: true,
            onSet: function (context) {
                var state = {};
                state['start_date'] = this.get();
                that.setState(state);
                console.log(that.state);
                /*
                if('select' in e ) {
                    this.close(true);
                }*/
            }
        });
        window.jQuery('#end_date').pickadate({
            format: 'mm/dd/yyyy',
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100,
            min: true,
            onSet: function (context) {
                var state = {};
                state['end_date'] = this.get();
                console.log(state);
                that.setState(state);
                console.log(that.state);
                /*
                if('select' in e ) {
                    this.close(true);
                }*/
            }
        });
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/fetchPath',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },            
            success: function (paths) {
                console.log(paths);
                var options =
                    paths.map((path, index) => (
                        <option key={index} value={path.pathTitle}>{path.pathTitle}</option>
                    ))
                that.setState({ options_path: options });
                window.jQuery('select#path').material_select();
                window.jQuery('.select-wrapper').on('change', 'select#path', function () {
             //       var id = window.jQuery(this).attr('id');
                    var value = window.jQuery(this).val();
                    //if (id == 'path') {
                    //set path in state
                    that.setState({ 'path': value });
                    //fetch courses
                    that.fetchCourses(value);
                    //}
                    //if (id == 'course') {
                    //set course in state
                    that.setState({ course: value });
                    // }
                    console.log(that.state);
                });

            }
        })


        window.jQuery('.select-wrapper').on('change', 'select#location', function () {
          //  var id = window.jQuery(this).attr('id');
            var value = window.jQuery(this).val();
            //set course in state
            that.setState({ location: value });
            that.fetchRooms(value);
            that.fetchMentors(value);
            console.log(that.state);
        });

    }
    sessionSubmit(e) {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = {
            'course': document.getElementById('session')[2].value,
            'startdate': document.getElementById('session')[3].value,
            'enddate': document.getElementById('session')[9].value,
            'roomid': document.getElementById('session')[16].value,
            'sessionstatus': document.getElementById('session')[19].value,
            'mentorid': document.getElementById('session')[20].value
        }
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/addSession", {
            method: "POST",
            body: searchParams,
            headers: headers
        }).then(result => { if (result.ok) { return result.text(); } if (result.status === 409) { return result.text() } })
            .then(status => {
                window.Materialize.toast(status, 3000);
                document.getElementById('session')[0].value = "";
                document.getElementById('session')[2].value = "";
                document.getElementById('session')[4].value = "";
                document.getElementById('session')[10].value = "";
                document.getElementById('session')[16].value = "";
                document.getElementById('session')[19].value = "";
                document.getElementById('session')[20].value = "";
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });

    }
    render() {
        return (
            <div className="row">
                <div className="col s12 offset-m3">
                    <div className="row">
                        <form className="col s6 z-depth-4 card-panel " id="session" action="" onSubmit={this.sessionSubmit}>
                            <div className="row">
                                <div className="col s12 center">
                                    <p className="center login-form-text">Add Session</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select id="path">
                                        <option value="">Choose Path</option>
                                        {this.state.options_path}
                                    </select>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select id="course">
                                        <option value="">Choose Course</option>
                                        {this.state.options_course}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="start_date" type="date" className="validate datepicker" value={this.state.start_date} />
                                    <label htmlFor="start_date">Start Date</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="end_date" type="date" className="validate datepicker" value={this.state.end_date} />
                                    <label htmlFor="end_date">End Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">info</i>
                                    <select id="session_status">
                                        <option value="">Choose</option>
                                        <option value="available">Available</option>
                                    </select>
                                    <label htmlFor="session_status">Session Status</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">place</i>
                                    <select id="location">
                                        <option value="">Choose Location</option>
                                        <option value="KOCHI">Kochi</option>
                                        <option value="THIRUVANANTHAPURAM">Thiruvanthapuram</option>
                                        <option value="BANGALORE">Bangalore</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">perm_identity</i>
                                    <select id="mentor_select">
                                        <option value="">Choose Mentor</option>
                                        {this.state.options_mentors}
                                    </select>
                                    <label htmlFor="mentor_id">Mentor Id</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">place</i>
                                    <select id="room">
                                        <option value="">Choose Room</option>
                                        {this.state.options_room}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s3 offset-m8">
                                    <button className="btn waves-effect waves-light red lighten-1" type="submit" name="action">Add Session
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
export default AddSession;