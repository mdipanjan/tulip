import React, { Component } from "react";
import "./TopNav.css";
import {
  MdSubject,
  MdClose,
  MdLocationOn,
  MdAssignment,
  MdShoppingCart,
  MdLock,
  MdSettings,
  MdHelp,
  MdInfo
} from "react-icons/md";
import { FiFilePlus } from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { FaStore, FaUserCircle, FaCartPlus, FaAngleDown } from "react-icons/fa";
import { GoShield } from "react-icons/go";
import { GiDrop } from "react-icons/gi";

class TopNav extends Component {
  
  expandMenu = e => {
    if (!e.target.classList.contains("open")) {
      let elem = document.querySelector(".sidebar");
      document.querySelector('body').classList.add('overlay');
      elem.classList.add("expand");
    }
    console.log(e.target.classList.contains("open"));
  };
  closemenu = e => {
    let elem = document.querySelector(".sidebar");
    elem.classList.remove("expand");
    document.querySelector('body').classList.remove('overlay');
  };
  render() {
    
    return (
      <div className="top-navigation">
        <span onClick={this.expandMenu} className="menu-toggle ml-3 mt-3">
          <MdSubject className="toggle-icon mt-4" />
        </span>
        <NavLink to="/search-location"> 
          <div className="location-box">
            <span>
              <MdLocationOn className="location-icon"/>
              <FaAngleDown className="location-angle mt-2"/>
            </span>
            <span className="location-text">Kolkata</span>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div className="cart-icon-box">
            <FaCartPlus className="cart-icon"/>
          </div>
        </NavLink>
        <div className="sidebar">
          <div className="profile-wrap">
            <div className="close-icon-box">
              <span onClick={this.closemenu} className="close-icon mt-4 ml-2">
                <MdClose className="close-icon-inner" />
              </span>
            </div>
            <div className="guest-box mt-4">
            <span className="float-left ">
              <FaUserCircle className="guest-icon mr-3"/>
            </span>
            <p className="guest-label">Hello guest!</p>
          </div>
          </div>

          <ul className="menu-options">
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/doctors">
                <span className="">
                  <FiFilePlus className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text  ml-2">Doctors cosultation</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/lab-tests">
                <span className="">
                  <FiFilePlus className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text  ml-2">Book tests</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/home">
                <span className="">
                  <FiFilePlus className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text  ml-2">Buy medicines</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/insurance-categories">
                <span>
                  <GoShield className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Buy Insurance policies</span>
              </NavLink>
            </li>
            <hr  className="mr-4"/>

            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/home">
                <span className="">
                  <FiFilePlus className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text  ml-2">My appointments</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/lab-tests">
                <span>
                  <MdAssignment className="link-icon  mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Lab tests</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/cart">
                <span>
                  <MdShoppingCart className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">My orders</span>
              </NavLink>
            </li>

            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/health-records">
                <span>
                  <MdLock className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Health record vault</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/blood-finder">
                <span>
                  <GiDrop className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Blood finder</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-4 pl-2">
              <NavLink className="link" to="/book-medicines">
                <span>
                  <FaStore className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2 mb-4">Book medicines</span>
              </NavLink>
            </li>
            <hr  className="mr-4"/>
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdHelp className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Help</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdSettings className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">Settings</span>
              </NavLink>
            </li>
            <li  onClick={this.closemenu} className="my-3 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdInfo className="link-icon mb-1 mr-3" />
                </span>
                <span className="link-text ml-2">About us</span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    );
  }
}
export default TopNav;
