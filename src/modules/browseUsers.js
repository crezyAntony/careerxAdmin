import React from 'react';
import '../App.css';
class BrowseUsers extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2">
                                <img src="images/logo.jpg" alt="" className="circle responsive-img" />
                            </div>
                            <div className="col s10">
                                <span className="black-text">
                                    Aswin Venugopal
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BrowseUsers;



