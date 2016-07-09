import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

export class Header extends Component {
    constructor(props) {
        super(props);
    };
    render(){
        return(
            <div className="col-sm-3 vertical-nav">
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li className={this.props.activeLink == "todos"?"active":""}><Link to="/todos">TodoApp</Link></li>
                        <li className={this.props.activeLink == "foodDiary"?"active":""}><Link to="/food">Food Diary</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

