import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaStethoscope } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import  { AiOutlineSafety ,AiOutlineMedicineBox } from "react-icons/ai";

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
            // <div className="">
                <ul className="main-nav">
                    <li className="">
                        <NavLink  
                            to="/home" 
                            className="nav-link" 
                            >
                            <span className="nav-icon ml-3">
                                <FaStethoscope className="icons"/>
                            </span>
                            <span className="nav-text">
                                Consultation
                            </span>
                            
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/"
                        className="nav-link" 
                        >   <span className="nav-icon ml-1">
                                <GiTestTubes className="test ml-2"/>
                            </span>
                            <span className="nav-text">
                                Diagnosis
                            </span>
                        </NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  
                        to="/profile"
                        className="nav-link"
                        >   <span className="nav-icon ml-2">
                                <AiOutlineMedicineBox className="icons medicine"/>
                            </span>
                            <span className="nav-text">
                                Medicine
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        to="/menu" 
                        className="nav-link"  tabIndex="-1" 
                        >   <span className="nav-icon ml-3">
                                <AiOutlineSafety className="icons safety"/>
                            </span>
                            <span className="nav-text">
                                Consultation
                            </span>
                        </NavLink>
                    </li>
                </ul>
            // </div>
        )
    }
}

export default MobileNav;