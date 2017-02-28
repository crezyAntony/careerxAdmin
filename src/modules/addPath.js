import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');
import { browserHistory } from "react-router";



class AddPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            options: []
        };
        this.pathSubmit = this.pathSubmit.bind(this);
    }
    componentDidMount() {
        var that = this;
        window.jQuery('ul.tabs').tabs();
        window.jQuery('select').material_select();

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    pathSubmit(e) {
        e.preventDefault();
        var that = this;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const params = {
            'title': document.getElementById('path')[0].value,
            'description': document.getElementById('path')[1].value,
            'url': document.getElementById('path')[3].value
        }
        const searchParams = Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        fetch("https://0.0.0.0:8000/addPath", {
            method: "POST",
            body: searchParams,
            headers: headers
        }).then(result => { if (result.ok) { return result.text(); } if (result.status === 409) { return result.text() } })
            .then(status => {
                window.Materialize.toast(status, 3000);
                document.getElementById('path')[0].value = "";
                document.getElementById('path')[1].value = "";
                document.getElementById('path')[3].value = "";
                that.forceUpdate();
                console.log("hello");
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
                        <form className="col s6 z-depth-4 card-panel " id="path" action="" onSubmit={this.pathSubmit}>
                        <div className="row">
                                <div className="input-field col s12 center">
                                    <p className="center login-form-text">Add Path</p>
                                </div>
                            </div>
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

            </div>
        );
    }
}
export default AddPath;