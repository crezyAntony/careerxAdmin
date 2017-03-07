import React from 'react';
import { browserHistory } from 'react-router';

class EditCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            options: [],
            resultauthors: [],
        };
        this.courseSubmit = this.courseSubmit.bind(this);
        this.prepopulate = this.prepopulate.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    componentDidMount() {
        var that = this;
        window.jQuery('ul.tabs').tabs();
        window.jQuery('select').material_select();
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
                that.setState({ options: options });
                window.jQuery('select').material_select();
            }
        })
        window.jQuery.ajax({
            url: 'https://0.0.0.0:8000/fetchAuthor',
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function (authors) {
                console.log(authors);
                var resultauthors =
                    authors.map((author, index) => (
                        <option key={index} value={author._id}>{author.firstName + " " + author.lastName}</option>
                    ))
                that.setState({ resultauthors: resultauthors });
                window.jQuery('select').material_select();
            }
        })
        var id = this.props.params.id;
        console.log(id);
        that.prepopulate();
    }
    prepopulate() {
        fetch("https://0.0.0.0:8000/courseDetails/" + this.props.params.id, {
            method: "GET",
            credentials: 'include'
        }).then(result => { if (result.ok) { return result.json(); } if (result.status === 500) { throw new Error(result.text()); } })
            .then(course => {
                document.getElementById('course')[0].value = course.courseTitle;
                document.getElementById('course')[1].value = course.path;
                document.getElementById('course')[3].value = course.courseDescription;
                document.getElementById('course')[4].value = course.duration;
                document.getElementById('course')[5].value = course.courseFee;
                document.getElementById('course')[6].value = course.author;
                document.getElementById('course')[8].value = course.courseLevel;
                //window.jQuery('form').valid();
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });

    }
    goBack(e) {
        e.preventDefault();
        browserHistory.goBack();
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    courseSubmit(e) {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = {

            'courseTitle': document.getElementById('course')[0].value,
            'path': document.getElementById('course')[1].value,
            'description': document.getElementById('course')[3].value,
            'duration': document.getElementById('course')[4].value,
            'fees': document.getElementById('course')[5].value,
            'author': document.getElementById('course')[6].value,
            'level': document.getElementById('course')[8].value
        }

        const bodyParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/courseUpdate/" + this.props.params.id, {
            method: "POST",
            body: bodyParams,
            headers: headers,
            credentials: 'include'
        }).then(result => { if (result.ok) { return result.json(); } if (result.status === 500) { throw new Error(result.text()) } })
            .then(course => {
                window.Materialize.toast('Course details updated', 3000);
                browserHistory.goBack();
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error);
            });

    }
    render() {
        return (
            <div className="row">
                <div className="col s12  offset-m3">
                    <div className="row">
                        <form className="col s6 z-depth-4 card-panel " id="course" action="" onSubmit={this.courseSubmit}>
                            <div className="row">
                                <div className=" col s12 center">
                                    <p className="center login-form-text">Edit Course</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">title</i>
                                    <input id="course_title" type="text" className="validate" />
                                    <label htmlFor="course_title">CourseTitle</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select>
                                        <option value="">Choose Path</option>
                                        {this.state.options}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="course_description" className="materialize-textarea validate" ></textarea>
                                    <label htmlFor="course_description">Description</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">timelapse</i>
                                    <input id="course_duration" type="number" className="validate" />
                                    <label htmlFor="course_duration">Duration in number of sessions</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">attach_money</i>
                                    <input id="course_fee" type="text" className="validate" />
                                    <label htmlFor="course_fee">Fees for the Course</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange} >
                                        <option value="">Choose Author</option>
                                        {this.state.resultauthors}
                                    </select>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange} >
                                        <option value="">Choose Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4 offset-s3">
                                    <button className="btn waves-effect waves-light red lighten-1" type="button" name="action" onClick={this.goBack}>Cancel
                                    <i className="material-icons right">cancel</i>
                                    </button>
                                </div>
                                <div className="col s5">
                                    <button className="btn waves-effect waves-light green lighten-1" type="submit" name="action">Update Course
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>

                            </div>
                        </form>
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <h4>Modal Header</h4>
                                <p>A bunch of text</p>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default EditCourse;