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
            <li className="">
              <span>
                <MdAssignmentTurnedIn className="link-icon" />
              </span>
              <span className="link-text ml-2">My Appointments</span>
            </li>
            <li>
              <span>
                <MdAssignment className="link-icon" />
              </span>
              <span className="link-text ml-2">Lab Tests</span>
            </li>
            <li>
              <span>
                <MdShoppingCart className="link-icon" />
              </span>
              <span className="link-text ml-2">My Orders</span>
            </li>
            <li>
              <span>
                <GoShield className="link-icon" />
              </span>
              <span className="link-text ml-2">Insurance Plus</span>
            </li>
            <li>
              <span>
                <MdLock className="link-icon" />
              </span>
              <span className="link-text ml-2">Health Record Vault</span>
            </li>

            <li>
              <span>
                <GiDrop className="link-icon" />
              </span>
              <span className="link-text ml-2">Blood Finder</span>
            </li>
            <li>
            <span>
                <FaStore className="link-icon" />
              </span>
              <span className="link-text ml-2">Jan AsudhiFinder</span>
            
                
            </li>
            <hr />
            <li>
                <span>
                    <MdHelp/>
                </span>
                <span className="link-text ml-2">Help</span>
            </li>
            <li>
              <span>
                <MdSettings className="link-icon" />
              </span>
              <span className="link-text ml-2">Settings</span>
            </li>
            <li>
                <span> <MdInfo/></span>
                <span className="link-text ml-2">About Us</span>
                
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TopNav;
