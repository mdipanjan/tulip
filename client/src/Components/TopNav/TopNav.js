import React, { Component } from "react";
import "./TopNav.css";
import {
  MdSubject,
  MdClose,
  MdAssignmentTurnedIn,
  MdAssignment,
  MdShoppingCart,
  MdLock,
  MdSettings,
  MdHelp,
  MdInfo
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { GoShield } from "react-icons/go";
import { GiDrop } from "react-icons/gi";

class TopNav extends Component {
  expandMenu = e => {
    if (!e.target.classList.contains("open")) {
      let elem = document.querySelector(".sidebar");
      elem.classList.add("expand");
    }
    console.log(e.target.classList.contains("open"));
  };
  closemenu = e => {
    let elem = document.querySelector(".sidebar");
    elem.classList.remove("expand");
  };
  render() {
    return (
      <div className="top-navigation">
        <span onClick={this.expandMenu} className="menu-toggle ml-2">
          <MdSubject className="toggle-icon" />
        </span>
        <div className="sidebar">
          <div className="close-icon-box">
            <span onClick={this.closemenu} className="close-icon mt-2">
              <MdClose className="close-icon-inner" />
            </span>
          </div>

          <ul className="menu-options">
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdAssignmentTurnedIn className="link-icon" />
                </span>
                <span className="link-text ml-2">My appointments</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/ome">
                <span>
                  <MdAssignment className="link-icon" />
                </span>
                <span className="link-text ml-2">Lab tests</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdShoppingCart className="link-icon" />
                </span>
                <span className="link-text ml-2">My orders</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <GoShield className="link-icon" />
                </span>
                <span className="link-text ml-2">Insurance plus</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdLock className="link-icon" />
                </span>
                <span className="link-text ml-2">Health record vault</span>
              </NavLink>
            </li>

            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <GiDrop className="link-icon" />
                </span>
                <span className="link-text ml-2">Blood finder</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <FaStore className="link-icon" />
                </span>
                <span className="link-text ml-2">Jan asudhi finder</span>
              </NavLink>
            </li>
            <hr />
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdHelp />
                </span>
                <span className="link-text ml-2">Help</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdSettings className="link-icon" />
                </span>
                <span className="link-text ml-2">Settings</span>
              </NavLink>
            </li>
            <li className="my-2 pl-2">
              <NavLink className="link" to="/home">
                <span>
                  <MdInfo />
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
