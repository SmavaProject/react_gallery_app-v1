import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => (
    <div className="main-nav">
        <ul>
        <li><NavLink to="/beach">Beach</NavLink></li>
        <li><NavLink to="/mountains">Mountains</NavLink></li>
        <li><NavLink to="/urban">Urban</NavLink></li>
        </ul>
    </div>

);

export default Nav
