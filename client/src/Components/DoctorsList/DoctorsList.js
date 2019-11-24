import React, { Component } from "react";
import "./DoctorList.css";
import Slider from "../Slider/Slider";
export default class DoctorsList extends Component {
  render() {
    return (
      <div className="container py-5">
        <div class="ourservices">
          <div class="maincontainer">
            <div class="row">
              <div class="col-12">
                <h3>Our Services</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Chat With Our Doctors</h4>
                    <p>
                      Chat with doctors Chat with doctors Chat with doctors Chat
                      with doctors Chat with doctors Chat with doctors
                    </p>
                    <a class="bookbtn">Book</a>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Schedule an Appointment</h4>
                    <p>
                      Chat with doctors Chat with doctors Chat with doctors Chat
                      with doctors Chat with doctors Chat with doctors
                    </p>
                    <a class="bookbtn">Book</a>
                  </div>
                  <img class="sec-doc" src="http://pngimg.com/uploads/doctor/doctor_PNG16022.png" alt="Humberto Chavez" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="consultation-box mb-3 pt-4">
          <label className="consult-label">Find doctors for consultation</label>
          <Slider />
        </div>
        <div class="packagecontainer">
            <div class="maincontainer">
                <div class="row">
                <div class="col-12">
                    <h3>Premium Consultation Packages <a class="viewall">view all</a></h3>
                </div>
                </div>
                <div class="row ml-n1 mr-n1">
                <div class="col-xl-6 col-6 pl-1 pr-1">
                    <div class="packagebox">
                    <div class="price"><span>Rs. </span>299</div>
                    <div class="crossprice">
                        <span class="cprice">Rs. 600</span>
                        <span class="discount">51% off</span>
                    </div>
                    <ul>
                        <li>180 Min Total Consultation Time with any doctor, any time of the day</li>
                        <li>Connect with specialists under 5 mins</li>
                        <li>12 Months Validity</li>
                    </ul>
                    <a  class="learnmore">Learn More</a>
                    </div>
                </div>
                <div class="col-xl-6 col-6 pl-1 pr-1">
                    <div class="packagebox">
                    <div class="price"><span>Rs. </span>499</div>
                    <div class="crossprice">
                        <span class="cprice">Rs. 1000</span>
                        <span class="discount">51% off</span>
                    </div>
                    <ul>
                        <li>420 Min Total Consultation Time with any doctor, any time of the day</li>
                        <li>Connect with specialists under 5 mins</li>
                        <li>12 Months Validity</li>
                    </ul>
                    <a  class="learnmore">Learn More</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
