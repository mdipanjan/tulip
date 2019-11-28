import React, { Component } from 'react'
import './BloodFinder.css';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import Map from '../../Components/Map/Map1'
export default class BloodFinder extends Component {

    navigateBack = ()=>{
        this.props.history.go(-1)
        // console.log(history)
        // history.go(-1);
    }
    render() {
        
        return (
            <div className="search-location">
                <div className="top-bar">
                    <span onClick={this.navigateBack} className="back">
                        <FaArrowLeft className="loaction-bar-arrow"/>
                    </span>
                    <input className="location-bar-text" placeholder="Search location"/>
                </div>
                <div className="map1">
                    <Map/>
                </div>
                <div className="find-wrap">
                    <div className="finder-btns">
                        <Link to="/blood-details">
                            <button className="blood-finder-btn">
                                <span>Nearby Donors</span>
                            </button>
                        </Link>
                        <Link to="/blood-details">
                            <button className="blood-finder-btn">
                                <span>Nearby Blood Bank</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


