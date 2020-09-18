import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component{

    componentDidMount(){
        console.log('mount change!');
    }

    render() {
        return (
    <div className="main-nav">
        <ul>
        <li><NavLink to="/search/beach">Beach</NavLink></li>
        <li><NavLink to="/search/mountains">Mountains</NavLink></li>
        <li><NavLink to="/search/urban">Urban</NavLink></li>
        </ul>
    </div>

);
        }
    }
export default (props => <Nav {...props}/>);
