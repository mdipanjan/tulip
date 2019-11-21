import React, { Component } from "react";
import "./BookMedicine.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBriefcaseMedical , FaBoxOpen} from "react-icons/fa";



export default class BookMedicine extends Component {
  render() {
    return (
      <div className="container py-5">
        {/* <h1 class="sc-main-title">How It Works</h1>
        <div class="sc-searchbox">
          <input required type="text" class="sc-searchbox-field" />
          <div class="sc-searchbox-placeholder">
            <i class="sc-searchbox-placeholder-icon fas fa-search"></i>
            <p class="sc-searchbox-placeholder-text">Search Medicines</p>
          </div>
        </div> */}
        {/* <h1 class="">How It Works</h1> */}
        <div className="how-works-box">
          <div class="sc-box">
            <div class="sc-container sc-timeline">
              <div class="sc-timeline-item" event="launch">
                <i class="sc-timeline-icon fas fa-utensils">
                <IoLogoWhatsapp/>
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">
                      Drop Your Prescription
                  </h3>
                  <span className="side-text">Whatsapp your prescription to + 91 8424445751</span>
                </div>
              </div>
              <div
                class="sc-timeline-item sc-actionsheet-trigger"
                event="meeting"
                goto="meeting"
              >
                <i class="sc-timeline-icon fas fa-comments">
                    <FaBriefcaseMedical/>
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">Choose Medicines</h3>
                  <span className="side-text">Select medicines from the app or use whatsapp bot</span>
                </div>
              </div>
              <div class="sc-timeline-item" event="meeting">
                <i class="sc-timeline-icon fas fa-comments">
                  <FaBoxOpen/>
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">
                    Free Home Delivery
                  </h3>
                  <span className="side-text">Refill and save reminders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
