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
        {/* <div class="search-box input-group flex-nowrap mb-4 mt-3 px-1">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search"
            aria-label=""
            aria-describedby=""
          />
          <GoSearch className="search-icon" />
        </div> */}
        
        <div className="ourservices ourservices-fir">
          <div className="maincontainer">
            <div className="row">
              <div className="col-12">
                <h3>Our Services</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="oservicesbox">
                  <div className="oservicesboxinner">
                    <h4>Chat With Our Doctors</h4>
                    <p>
                      Now distance is not a constrain to get health consultations, get doctors advise anytime anywhere.
                    </p>
                    <Link to="/doctorslist" className="bookbtn">Explore Now</Link>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div className="oservicesbox pharmacy-box">
                  <div className="oservicesboxinner">
                    <h4>Subscription based pharmacy</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in whatsapp, you can subscribe one time get benefits recurringly
                    </p>
                    <Link to="/book-medicines" className="bookbtn">See How</Link>
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
          <div className="view-all mb-2 pb-2">
            <Link className="view-consult" to="/doctors">
              View All
            </Link>
          </div>
          <div className="consult-slider pt-5">
            <Slider  />
          </div>
        </div>
      
        <hr className="service-seperator "/>
        <div className="ourservices ourservices-sec">
            <div className="maincontainer">
              <div className="row">
              <div className="col-12">
                <div className="oservicesbox">
                  <div className="oservicesboxinner">
                    <h4>Health Insurance Consultation</h4>
                    <p>
                      Now distance is not a constrain to get health consultations, get doctors advise anytime anywhere.
                    </p>
                    <a className="bookbtn">Explore Now</a>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div className="oservicesbox labtest-box">
                  <div className="oservicesboxinner">
                    <h4>Book lab tests through whatsapp</h4>
                    <p>
                      Now buying medicine is as easy as texting someone in whatsapp, you can subscribe one time get benefits recurringly
                    </p>
                    <Link to="/lab-tests" className="bookbtn">See How</Link>
                  </div>
                  <div className="labtest-img">
                    <img className="lab-image" src="images/labtest.png" alt="Humberto Chavez" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="insurance-box mt-4 pt-4">
          <label className="insurance-label">Featured Health Insurances</label>
          <div className="view-all mb-2 pb-2">
            <Link className="view-insurance" to="/insurance-categories">
              View All
            </Link>
          </div>
          <div className="insurance-slider pt-5">
            <InsuranceSlider />
          </div>
        </div>
        
        {/* <div className="test-box mt-4">
          <label className="test-label">Get cheap diagnosis</label>
          <div className="view-all mb-2 pb-2">
            <Link className="view-insurance" to="/insurance-categories">
              View All
            </Link>
          </div>
          <div className="labtests-slider pt-5">
            <TestSlider />
          </div>
        </div> */}
       
        <div className="ourservices ourservices-thi">
            <div className="maincontainer">
              <div className="row">
              <div className="col-12">
                <div className="oservicesbox">
                  <div className="oservicesboxinner">
                    <h4>Health Record vault</h4>
                    <p>
                      Store all your health recors scurely on cloud, access anytime anywhere.
                    </p>
                    <Link to="/health-records" className="bookbtn">Explore Now</Link>
                  </div>
                  <img src="images/humberto-chavez.png" alt="Humberto Chavez" />
                </div>
                <div className="oservicesbox bloodfinder-box">
                  <div className="oservicesboxinner ">
                    <h4>Blood donor and bank finder</h4>
                    <p>
                      In time of emergency you just need to look at one place to get the necessary blood
                    </p>
                    <Link to="/blood-finder"  className="bookbtn">Find blood banks</Link >
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
        {/* <div className="featured-box mt-4 pb-5  pt-4">
          <label className="featured-label">Featured Products</label>
          <Featured />
          <div className="view-all mt-2">
            <Link className="view-featured" to="/">
              View All
            </Link>
          </div>
        </div> */}
      </div>
    );
  }
}
