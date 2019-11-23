import React, { Component } from "react";
import Slider from "../../Components/Slider/Slider";
import TestSlider from "../../Components/TestSlider/TestSlider";
import Featured from "../../Components/FeaturedProducts/FeaturedProducts";
import InsuranceSlider from "../../Components/Insurances/InsurranceSlider";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container py-5">
        <div class="search-box input-group flex-nowrap mb-4 mt-3 px-1">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search"
            aria-label=""
            aria-describedby=""
          />
          <GoSearch className="search-icon" />
        </div>
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
                      Now distance is not a constrain to get health consultations, get doctors advise anytime anywhere.
                    </p>
                    <a class="bookbtn">Explore Now</a>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Subscription based pharmacy</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in whatsapp, you can subscribe one time get benefits recurringly
                    </p>
                    <a class="bookbtn">See How</a>
                  </div>
                  <div className="medicine-img">
                    <img src="images/medicine.png" alt="Humberto Chavez" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="consultation-box mb-3 pt-4">
          <label className="consult-label">Find doctors for consultation</label>
          <Slider />
          <div className="view-all mt-2 pb-2">
            <Link className="view-consult" to="/doctors">
              View All
            </Link>
          </div>
        </div>
        {/* <div className="mb-2 pt-4 medicine-box">
          <label className="medication-label">Subscribe your medication </label>
          <div className="mx-3 ">
            <div className="row">
              <div className="">
                <div class="col-12 col-sm-12 card text-white  mb-3  medication-box">
                  <div class="card-body">
                    <h5 class="card-title">
                      Subscribe and get Recurring medicines
                    </h5>
                    <p class="card-text">
                      <span>Do you forgot to take your mediactions?</span>
                      <span>
                        Do you need to buy your medicines every month?
                      </span>
                      <span className="med-img">
                      </span>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all mt-2">
            <Link className="view-doctors" to="/">
              View All
            </Link>
          </div>
        </div>
         */}
        <hr className="service-seperator "/>
        <div class="ourservices ourservices-sec">
            <div class="maincontainer">
              <div class="row">
              <div class="col-12">
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Health Insurance Consultation</h4>
                    <p>
                      Now distance is not a constrain to get health consultations, get doctors advise anytime anywhere.
                    </p>
                    <a class="bookbtn">Explore Now</a>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Book lab tests through whatsapp</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in whatsapp, you can subscribe one time get benefits recurringly
                    </p>
                    <a class="bookbtn">See How</a>
                  </div>
                  <div className="medicine-img">
                    <img src="images/medicine.png" alt="Humberto Chavez" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="insurance-box mt-4 pt-4">
          <label className="insurance-label">Featured Health Insurances</label>
          <InsuranceSlider />
          <div className="view-all mt-2 ">
            <Link className="view-insurance" to="/">
              View All
            </Link>
          </div>
        </div>
        <div className="test-box mt-4">
          <label className="test-label">Get cheap diagnosis</label>
          <TestSlider />
          <div className="view-all mt-2">
            <Link className="view-tests" to="/">
              View All
            </Link>
          </div>
        </div>
        <div class="ourservices ourservices-sec">
            <div class="maincontainer">
              <div class="row">
              <div class="col-12">
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Health Record vault</h4>
                    <p>
                      Store all your health recors scurely on cloud, access anytime anywhere.
                    </p>
                    <a class="bookbtn">Explore Now</a>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div class="oservicesbox">
                  <div class="oservicesboxinner">
                    <h4>Blood donor and bank finder</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in whatsapp, you can subscribe one time get benefits recurringly
                    </p>
                    <a class="bookbtn">See How</a>
                  </div>
                  <div className="medicine-img">
                    <img src="images/medicine.png" alt="Humberto Chavez" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="mt-3 mb-3"/> */}
        <div className="featured-box mt-4 pb-5  pt-4">
          <label className="featured-label">Featured Products</label>
          <Featured />
          <div className="view-all mt-2">
            <Link className="view-featured" to="/">
              View All
            </Link>
          </div>
        </div>
      </div>
    );
  }
}