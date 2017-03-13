import React from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class SessionRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        };
        this.fetchRequest = this.fetchRequest.bind(this);
        this.acceptRequest = this.acceptRequest.bind(this);
        this.declineRequest = this.declineRequest.bind(this);

    }
    acceptRequest(id) {
        var that = this;
        if (window.confirm("Are you sure to approve the request")) {
            console.log("hello");
            window.jQuery.ajax({
                url: 'https://0.0.0.0:8000/acceptRequest/' + id,
                type: 'GET',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result, status) {
                    window.Materialize.toast(result.message, 3000);
                    that.fetchRequest();
                },
                error: function (xhr, status, error) {
                    if (status === 500) {
                        window.Materialize.toast('Accept failed', 3000);
                    }
                }
            })
        }
        }
        declineRequest(id) {
        var that = this;
        if (window.confirm("Are you sure to decline the request")) {
            console.log("hello");
            window.jQuery.ajax({
                url: 'https://0.0.0.0:8000/declineRequest/' + id,
                type: 'GET',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (result, status) {
                    window.Materialize.toast(result.message, 3000);
                    that.fetchRequest();
                },
                error: function (xhr, status, error) {
                    if (status === 500) {
                        window.Materialize.toast('Decline failed', 3000);
                    }
                }
            })
        }
        }
        componentDidMount() {
            this.fetchRequest();
        }

        fetchRequest() {
            var that = this;
            window.jQuery.ajax({
                url: 'https://0.0.0.0:8000/fetchSessionRequest',
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function (requests) {
                    var request_list =
                        requests.map((request, index) => (
                            <tr >
                                <td>{request.careerxmember.emailId}</td>
                                <td><a className="waves-effect waves-light" href={"#" + request.courseId}>{request.requestforcourse.courseTitle}</a></td>
                                <td>{request.requestDate}</td>
                                <td><div className="row">
                                    <div className="col s6 center">
                                        <button className="btn waves-effect waves-light green" name="action" onClick={() => that.acceptRequest(request.id)}>
                                            <i className="material-icons right">done</i>
                                        </button>
                                    </div>
                                    <div className="col s6 center">
                                        <button className="btn waves-effect waves-light red" name="action" onClick={() => that.declineRequest(request.id)}>
                                            <i className="material-icons right prefix">clear</i>
                                        </button>
                                    </div>
                                </div></td>
                            </tr>
                        ));
                    that.setState({ requests: request_list });
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
                            <div className="col s12 m8 offset-m3">
                                <table className="bordered">
                                    <thead className="grey darken-4 white-text">
                                        <tr>
                                            <th data-field="id">User Name</th>
                                            <th data-field="name">Course Id</th>
                                            <th data-field="date">Requested Date</th>
                                            <th data-field="price">Accept / Decline</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.requests.length ? this.state.requests : 'Nothing to show'}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </ReactCSSTransitionGroup>
                </div>

            )
        }
    }
    export default SessionRequest;



