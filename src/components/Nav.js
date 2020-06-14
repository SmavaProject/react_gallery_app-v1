import React from "react";
import {NavLink} from "react-router-dom";

const Nav = ({handleSearch}) => (
    <div className="main-nav">
        <ul>
        <li><NavLink to="/beach" onClick={ () => handleSearch("beach")}>Beach</NavLink></li>
        <li><NavLink to="/mountains" onClick={ () => handleSearch("mountains")}>Mountains</NavLink></li>
        <li><NavLink to="/urban" onClick={ () => handleSearch("urban")}>Urban</NavLink></li>
        </ul>
    </div>

);

export default Nav
