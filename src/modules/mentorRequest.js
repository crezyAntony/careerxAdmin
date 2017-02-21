import React from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class MentorRequest extends React.Component {
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
                        <ul className="collapsible popout" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header"><span className="new badge red"></span><i className="material-icons">filter_drama</i>First</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><span className="new badge red"></span><i className="material-icons">place</i>Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header"><span className="new badge red"></span><i className="material-icons">whatshot</i>Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}
export default MentorRequest;



