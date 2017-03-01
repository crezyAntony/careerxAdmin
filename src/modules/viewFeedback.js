import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import  $ from 'materialize-css/bin/jquery-2.1.1.min.js';
//import  'materialize-css/bin/materialize.css';
//window.jQuery=require('jquery');
//require('materialize-css/bin/materialize.js');



class ViewFeedback extends React.Component {
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
                        <ul className="collapsible" data-collapsible="accordion">
                            <li className="active">
                                <div className="collapsible-header"><i className="material-icons">announcement</i>Garry </div>
                                <div className="collapsible-body">
                                    <form>
                                        
                                    </form>
                                </div>
                            </li>
                            <li className="active">
                                <div className="collapsible-header"><i className="material-icons">announcement</i>Aswin </div>
                                <div className="collapsible-body">
                                    <form>
                                        
                                    </form>
                                </div>
                            </li>
                            <li className="active">
                                <div className="collapsible-header"><i className="material-icons">announcement</i>Sleeba </div>
                                <div className="collapsible-body">
                                    <form>
                                        
                                    </form>
                                </div>
                            </li>
                            <li className="active">
                                <div className="collapsible-header"><i className="material-icons">announcement</i>Crezy</div>
                                <div className="collapsible-body">
                                    <form>
                                        
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default ViewFeedback;