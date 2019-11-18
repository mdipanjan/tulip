import React, { Component } from "react";
import Slider from "../../Components/Slider/Slider";
import TestSlider from "../../Components/TestSlider/TestSlider";
import Featured from "../../Components/FeaturedProducts/FeaturedProducts";
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
            class="form-control"
            placeholder="Search"
            aria-label=""
            aria-describedby=""
          />
          <GoSearch className="search-icon" />
        </div>
        <div className="consultation-box mb-3">
          <label className="consult-label">Find doctors for consultation</label>
          <Slider />
          <div className="view-all mt-2 pb-2">
            <Link className="view-consult" to="/">
              View All
            </Link>
          </div>
        </div>
        <div className="mb-2 ">
          <label className="medication-label">Subscribe your medication </label>
          <div className="mx-3 ">
            <div className="row">
              <div className="col-12 col-sm-6 medication-box">
                
                    <div className="">
                        <p className="medicine-subs-text">
                        Are you suffering from chronic illness?
                        <span>Do you forgot to take your mediactions?</span>
                        <span>Do you need to buy your medicines every month?</span>
                        </p>
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
        <div className="test-box mt-4">
          <label className="test-label">Get cheap diagnosis</label>
          <TestSlider />
          <div className="view-all mt-2">
            <Link className="view-tests" to="/">
              View All
            </Link>
          </div>
        </div>
        <div className="featured-box mt-4">
          <label className="featured-label">Featured Products</label>
          <Featured />
          <div className="view-all mt-2 pb-5">
            <Link className="view-featured" to="/">
              View All
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
