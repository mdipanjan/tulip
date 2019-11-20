import React, { Component } from "react";
import "./BookMedicine.css";
export default class BookMedicine extends Component {
  render() {
    return (
      <div className="container py-5">
        <div class="sc-box">
          <div class="sc-container">
            <h1 class="sc-main-title">How It Works</h1>
            <div class="sc-searchbox">
              <input required type="text" class="sc-searchbox-field" />
              <div class="sc-searchbox-placeholder">
                <i class="sc-searchbox-placeholder-icon fas fa-search"></i>
                <p class="sc-searchbox-placeholder-text">Search an event</p>
              </div>
            </div>
          </div>
          <div class="sc-container sc-timeline">
            <div class="sc-timeline-item" event="launch">
              <i class="sc-timeline-icon fas fa-utensils"></i>
              <div class="sc-timeline-info">
                <h3 class="sc-timeline-title">Order Medication</h3>
              </div>
            </div>
            <div
              class="sc-timeline-item sc-actionsheet-trigger"
              event="meeting"
              goto="meeting"
            >
              <i class="sc-timeline-icon fas fa-comments"></i>
              <div class="sc-timeline-info">
                <h3 class="sc-timeline-title">Choose Medicines</h3>
              </div>
            </div>
            <div class="sc-timeline-item" event="meeting">
              <i class="sc-timeline-icon fas fa-comments"></i>
              <div class="sc-timeline-info">
                <h3 class="sc-timeline-title">
                  Free Home Delivery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
