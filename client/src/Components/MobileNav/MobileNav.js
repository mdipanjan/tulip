import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
  } from "react-router-dom";
import './MobileNav.css';


 class MobileNav extends Component {
    render() {
        return (
            <div className="main-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink  
                        to="/home" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }} 
                        className="nav-link" 
                        >
                            <FaHome className="icons"/>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/protected"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }} 
                        className="nav-link" 
                        >
                            <FaSearch className="icons"/>
                        </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  
                        to="/profile"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }} 
                        className="nav-link"
                        >
                            <FaUser className="icons"/>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/menu" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }} 
                        className="nav-link"  tabIndex="-1" 
                        >
                            <MdMenu/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MobileNav;