import React from 'react';
import { browserHistory, Link } from 'react-router'


class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            options: [],
            resultauthors: [],
        };
        this.courseSubmit = this.courseSubmit.bind(this);
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
            xhrFields: {
                withCredentials: true
            },            
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
            xhrFields: {
                withCredentials: true
            },            
            success: function (authors) {
                console.log(authors);
                var resultauthors =
                    authors.map((author, index) => (
                        <option key={index} value={author.id}>{author.firstName+" "+author.lastName}</option>
                    ))
                that.setState({ resultauthors: resultauthors });
                window.jQuery('select').material_select();
            }
        })

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
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/addCourse", {
            method: "POST",
            body: searchParams,
            headers: headers,
            credentials: 'include'
        }).then(result => { if (result.ok) { return result.text(); } if (result.status === 409) { return result.text() } })
            .then(status => {
                window.Materialize.toast(status, 3000);
                document.getElementById('course')[0].value = "";
                document.getElementById('course')[1].value = "";
                document.getElementById('course')[3].value = "";
                document.getElementById('course')[4].value = "";
                document.getElementById('course')[5].value = "";
                document.getElementById('course')[6].value = "";
                document.getElementById('course')[8].value = "";
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
                                <div className="col s12 center">
                                    <p className="center login-form-text cyan white-text  card-panel "><b>Add Course</b></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">title</i>
                                    <input id="course_title" type="text" className="validate" required/>
                                    <label htmlFor="course_title">CourseTitle</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select>
                                        <option value="" disabled selected>Choose Path</option>
                                        {this.state.options}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="course_description" className="materialize-textarea validate"required></textarea>
                                    <label htmlFor="course_description">Description</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">timelapse</i>
                                    <input id="course_duration" type="number" className="validate" required/>
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
                                        <option value="" disabled selected>Choose Author</option>
                                        {this.state.resultauthors}
                                    </select>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">chrome_reader_mode</i>
                                    <select value={this.state.value} onChange={this.handleChange} required>
                                        <option value="" disabled selected>Choose Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m12 center">
                                    <button className="btn waves-effect waves-light cyan" type="submit" name="action">Add Course
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
export default AddCourse;