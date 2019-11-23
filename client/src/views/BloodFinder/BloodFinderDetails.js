import React, { Component } from 'react'
import './BloodFinder.css';
import { MdPhone } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";


export default class BloodFinder extends Component {
    render() {
        return (
            <div className="search-location">
                <div className="top-bar">
                    <span  className="back">
                        <FaArrowLeft className="loaction-bar-arrow"/>
                    </span>
                    <input className="location-bar-text" placeholder="Search location"/>
                </div>
                <div className="map">

                </div>
                <div className="blood-info-window">
                    <div className="finder-nav">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Nearby Donors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Nearby Blood Banks</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content blood-infos pt-5 ">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="donor mb-1">
                                <div className="donor-avtr">
                                    <div className="donor-img">
                                        <img className="img-donor" src="https://www.dancerdates.net/m/photos/get_image/file/a366d08bd871ad9c3a55094eff6ea252.jpg"/>
                                    </div>
                                    <span className="blood-group">
                                        <p className="blood-group-type">A-</p>
                                    </span>
                                </div>
                                <div className="donor-details">
                                    <p className="donor-title pt-1">Ms.Sunita Gupta</p>
                                    <p className="donor-address">75 Parkstreet</p>
                                    <span className="donor-distance">3 miles</span>
                                </div>
                                <div className="donor-contact">
                                    <MdPhone className="contact-icon"/>
                                </div>
                            </div>
                            <hr className="donor-seperator"/>
                            <div className="donor mb-1">
                                <div className="donor-avtr">
                                    <div className="donor-img">
                                        <img className="img-donor" src="https://www.dancerdates.net/m/photos/get_image/file/a366d08bd871ad9c3a55094eff6ea252.jpg"/>
                                    </div>
                                    <span className="blood-group">
                                        <p className="blood-group-type">A+</p>
                                    </span>
                                </div>
                                <div className="donor-details">
                                    <p className="donor-title pt-1">Mr.Rahit Bansal</p>
                                    <p className="donor-address">167/ a garfa main road</p>
                                    <span className="donor-distance">3 miles</span>
                                </div>
                                <div className="donor-contact">
                                    <MdPhone className="contact-icon"/>
                                </div>
                            </div>
                            <hr className="donor-seperator"/>
                            <div className="donor mb-1">
                                <div className="donor-avtr">
                                    <div className="donor-img">
                                        <img className="img-donor" src="https://www.dancerdates.net/m/photos/get_image/file/a366d08bd871ad9c3a55094eff6ea252.jpg"/>
                                    </div>
                                    <span className="blood-group">
                                        <p className="blood-group-type">o+</p>
                                    </span>
                                </div>
                                <div className="donor-details">
                                    <p className="donor-title pt-1">Mr.Dipanjan Mondal</p>
                                    <p className="donor-address">1 Topsia main road</p>
                                    <span className="donor-distance">10 miles</span>
                                </div>
                                <div className="donor-contact">
                                    <MdPhone className="contact-icon"/>
                                </div>
                            </div>
                            <hr className="donor-seperator"/>
                            <div className="donor mb-1">
                                <div className="donor-avtr">
                                    <div className="donor-img">
                                        <img className="img-donor" src="https://www.dancerdates.net/m/photos/get_image/file/a366d08bd871ad9c3a55094eff6ea252.jpg"/>
                                    </div>
                                    <span className="blood-group">
                                        <p className="blood-group-type">o+</p>
                                    </span>
                                </div>
                                <div className="donor-details">
                                    <p className="donor-title pt-1">Mr.Dipanjan Mondal</p>
                                    <p className="donor-address">1 Topsia main road</p>
                                    <span className="donor-distance">10 miles</span>
                                </div>
                                <div className="donor-contact">
                                    <MdPhone className="contact-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <p>banks</p>
                        </div>
                    </div>
                </div>                                
            </div>
        )
    }
}


