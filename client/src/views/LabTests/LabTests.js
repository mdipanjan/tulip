import React, { Component } from 'react'
import './LabTests.css';
import Slider from "react-slick";
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'


class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:false,
        swipe:true,
  
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="">
          <Slider {...settings}>
            <div className="featured-slider mr-2">
                <div class="item">
                    <div class="checklistbox">
                        <span class="rating">4.5</span>
                        <div class="checkuplogo"><img src="images/checkup-logo.png" alt="Check Up Logo" /></div>
                        <h4>Winter Special Check- Ups</h4>
                        <div class="testlistbox">(30 Tests)<span class="discount">60% off</span></div>
                        <div class="crossprice">Rs. 1599</div>
                        <div class="priceouterbox">
                        <span class="priceleft">Rs. 599</span>
                        <a href="javascript:void(0);" class="addright">Add</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-slider mr-2">
              <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
                  2
              </div>
   
            </div>
            <div className="featured-slider mr-2">
              <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
                  3
              </div>
            </div>
            <div className="featured-slider mr-2">
              <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
                  4
              </div>
            </div>
            <div className="featured-slider mr-2">
              <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
                  5
              </div>
            </div>
            <div className="featured-slider mr-2">
              <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
                  6
              </div>
            </div>
            
          </Slider>
        </div>
      );
    }
}
export default class LabTests extends Component {
    render() {
        return (
            <div className="container py-5">
               <div className="prescriptioncontainer">
                    <div class="maincontainer">
                        <div class="row">
                            <div class="col-12">
                                <div class="prescriptionbox">
                                    <h3>Book Lab Tests with Prescription</h3>
                                    <div class="lablistbox">
                                        <ul>
                                            <li>Upload your Prescription</li>
                                            <li>Select tests from the available Services</li>
                                            <li>Schedule an appointment</li>
                                            <li>Our experts will reach your home  Collect the samples</li>
                                            <li>Get report through mail or Whatsapp</li>
                                        </ul>
                                        <a class="prebtn" >Upload Prescription<input type="file" name=""/></a>
                                    </div>
                                    <div class="labimgright">
                                        <img src="images/labtest.png" alt="Alex Kondratiev" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkupcontainer">
                    <div className="maincontainer">
                        <div className="row">
                        <div className="col-12">
                            <h3>Full Body Check Up <a className="viewall">view all</a></h3>
                        </div>
                    </div>
                            <Responsive/>
                    </div>
                </div>
            </div>
            
        )
    }
}
