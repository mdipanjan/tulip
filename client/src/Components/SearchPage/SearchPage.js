import React from 'react';
import './SearchPage.css';
import { withRouter, useHistory } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

function SearchPage(props) {

    let history = useHistory();
    let navigateBack = ()=>{
        console.log(history)
        history.go(-1);
    }
    return (
        <div className="conatiner search-location">
            <div className="top-bar">
                <span onClick={navigateBack} className="back">
                    <FaArrowLeft className="loaction-bar-arrow"/>
                </span>
                <input className="location-bar-text" placeholder="Search location"/>
            </div>
        </div>
    )
}

export default SearchPage
