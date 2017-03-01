import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');



class ViewPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount() {
        window.jQuery('.collapsible').collapsible();
        window.jQuery('select').material_select();
        window.jQuery('.chips').material_chip();
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
                    <div className="col s12 m8 offset-m3">
                        <table className="bordered">
                            <thead>
                                <tr>
                                    <th data-field="id">Logo</th>
                                    <th data-field="name">Path Name</th>
                                    <th data-field="price">Path Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><img className="circle" alt="user_pic" src="images/login-logo.jpg"/></td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default ViewPath;