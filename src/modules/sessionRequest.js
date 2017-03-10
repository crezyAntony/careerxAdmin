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
                        <tr>
                            <td>{request.userId}</td>
                            <td>{request.courseId}</td>
                            <td>{request.requestDate}</td>
                            <td>$0.87</td>
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
                            <table className="borIdered">
                                <thead>
                                    <tr>
                                        <th data-field="id">User Name</th>
                                        <th data-field="name">Course Id</th>
                                        <th data-field="date">Requested Date</th>
                                        <th data-field="price">Accept / Decline</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.requests}
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



