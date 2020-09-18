import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component{

    componentDidUpdate(prevProps) {
        //if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log('Route change!');
       // }
    }

    componentDidMount(){
        console.log('mount change!');
    }

    render() {
        //console.log('this.props.location.pathname' + this.props.location.pathname);
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
