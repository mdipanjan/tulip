import React, { Component } from "react";
import "./BookMedicine.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBriefcaseMedical, FaBoxOpen } from "react-icons/fa";

export default class BookMedicine extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="ourservices">
          <div className="maincontainer">
            <div className="row">
              <div className="col-12">
                <div className="oservicesbox pharmacy-box">
                  <div className="oservicesboxinner">
                    <h4>Subscription based pharmacy</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in
                      whatsapp, you can subscribe one time get benefits
                      recurringly
                    </p>
                    <a className="bookbtn">Upload prescription</a>
                  </div>
                  <div className="medicine-img">
                    <img src="images/medicine.png" alt="Humberto Chavez" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-works-box">
          <div class="sc-box">
            <div class="sc-container sc-timeline">
              <div class="sc-timeline-item" event="launch">
                <i class="sc-timeline-icon fas fa-utensils">
                  <IoLogoWhatsapp />
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">Drop Your Prescription</h3>
                  <span className="side-text">
                    Whatsapp your prescription to + 91 8424445751
                  </span>
                </div>
              </div>
              <div
                class="sc-timeline-item sc-actionsheet-trigger"
                event="meeting"
                goto="meeting"
              >
                <i class="sc-timeline-icon fas fa-comments">
                  <FaBriefcaseMedical />
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">Choose Medicines</h3>
                  <span className="side-text">
                    Select medicines from the app or use whatsapp bot
                  </span>
                </div>
              </div>
              <div class="sc-timeline-item" event="meeting">
                <i class="sc-timeline-icon fas fa-comments">
                  <FaBoxOpen />
                </i>
                <div class="sc-timeline-info">
                  <h3 class="sc-timeline-title">Free Home Delivery</h3>
                  <span className="side-text">Refill and save reminders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
              <label class="category-label">Shop by Category</label>
          </div>
        </div>
        <div className="med-category">
          <div className="row med-cat1-box">
            <div className="col-3 med-cat1 cat-1">
              <img src=""/>
            </div>
            <div className="col-3 med-cat1"></div>
            <div className="col-3 med-cat1"></div>
          </div>
          <div className="row cat1-label-box">
            <div className="med-cat1-label label1">Diabetis</div>
            <div className="med-cat1-label">Asthma</div>
            <div className="med-cat1-label">Colestrol</div>
          </div>
          <hr/>
          <div className="row med-cat2-box">
            <div className="col-3 med-cat1 cat-1"></div>
            <div className="col-3 med-cat1"></div>
            <div className="col-3 med-cat1"></div>
          </div>
          <div className="row cat2-label-box">
            <div className="med-cat2-label label1">Hypertension</div>
            <div className="med-cat2-label">Depression</div>
            <div className="med-cat2-label  mb-5">Uric acid</div>
          </div>
        </div>

      </div>
    );
  }
}
