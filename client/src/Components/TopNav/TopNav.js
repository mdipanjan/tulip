import React, { Component } from 'react'
import './TopNav.css';
import { MdSubject, MdClose } from "react-icons/md";
import Sidebar from '../Sidebar/Sidebar'
 class TopNav extends Component {
    expandMenu = (e)=>{
        if(!e.target.classList.contains('open')){
            let elem = document.querySelector('.sidebar');
            elem.classList.add('expand');
        }
        console.log(e.target.classList.contains('open'))
    }
    closemenu = (e)=>{
        let elem = document.querySelector('.sidebar');
        elem.classList.remove('expand');
    }
    render() {
        return (
            <div className="top-navigation">
                <span onClick={this.expandMenu}  className="menu-toggle ml-2">
                    <MdSubject className="toggle-icon"/>
                </span>
                <div className="sidebar">
                    <div className="close-icon-box">
                        <span onClick={this.closemenu} className="close-icon mt-2">
                            <MdClose className="close-icon-inner"/>
                        </span>
                    </div>
                    <ul className="menu-options">
                        <li>
                            My Appointments
                        </li>
                        <li>
                            Lab Tests
                        </li>
                        <li>
                           Insurance Plus
                        </li>
                        <li>
                           Health Record Vault
                        </li>
                        <li>
                           Blood Finder
                        </li>
                        <li>
                          Jan AsudhiFinder
                        </li>
                        <hr/>
                        <li>
                           Help
                        </li>
                        <li>
                           Settings
                        </li>
                        <li>
                          About Us
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default TopNav;