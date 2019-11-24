import React, { Component } from 'react'
import './LabTests.css';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
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
                <div className="item">
                    <div className="checklistbox">
                        <span className="rating">4.5</span>
                        <div className="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                        <h4>Winter Special Check- Ups</h4>
                        <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                        <div className="crossprice">Rs. 1599</div>
                        <div className="priceouterbox">
                        <span className="priceleft">Rs. 599</span>
                        <a  className="addright">Add</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-slider mr-2">
                <div className="item">
                    <div className="checklistbox">
                        <span class="rating">4.5</span>
                        <div className="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                        <h4>Winter Special Check- Ups</h4>
                        <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                        <div className="crossprice">Rs. 1599</div>
                        <div className="priceouterbox">
                        <span className="priceleft">Rs. 599</span>
                        <a  className="addright">Add</a>
                        </div>
                    </div>
                </div>
   
            </div>
            <div className="featured-slider mr-2">
                <div class="item">
                    <div class="checklistbox">
                        <span className="rating">4.5</span>
                        <div class="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                        <h4>Winter Special Check- Ups</h4>
                        <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                        <div className="crossprice">Rs. 1599</div>
                        <div className="priceouterbox">
                        <span className="priceleft">Rs. 599</span>
                        <a  className="addright">Add</a>
                        </div>
                    </div>
                </div>
            </div>
            
          </Slider>
        </div>
      );
    }
}
class Second extends Component {
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
              <div className="item">
                  <div className="checklistbox">
                      <span className="rating">4.5</span>
                      <div className="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                      <h4>Winter Special Check- Ups</h4>
                      <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                      <div className="crossprice">Rs. 1599</div>
                      <div className="priceouterbox">
                      <span className="priceleft">Rs. 599</span>
                      <a  className="addright">Add</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="featured-slider mr-2">
              <div className="item">
                  <div className="checklistbox">
                      <span class="rating">4.5</span>
                      <div className="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                      <h4>Winter Special Check- Ups</h4>
                      <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                      <div className="crossprice">Rs. 1599</div>
                      <div className="priceouterbox">
                      <span className="priceleft">Rs. 599</span>
                      <a  className="addright">Add</a>
                      </div>
                  </div>
              </div>
 
          </div>
          <div className="featured-slider mr-2">
              <div class="item">
                  <div class="checklistbox">
                      <span className="rating">4.5</span>
                      <div class="checkuplogo"><img src="images/diagnosis.png" alt="Check Up Logo" /></div>
                      <h4>Winter Special Check- Ups</h4>
                      <div className="testlistbox">(30 Tests)<span className="discount">60% off</span></div>
                      <div className="crossprice">Rs. 1599</div>
                      <div className="priceouterbox">
                      <span className="priceleft">Rs. 599</span>
                      <a  className="addright">Add</a>
                      </div>
                  </div>
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
                    <div className="maincontainer">
                        <div className="row">
                            <div className="col-12">
                                <div className="prescriptionbox">
                                    <h3>Book Lab Tests with Prescription</h3>
                                    <div className="lablistbox">
                                        <ul>
                                            <li>Upload your Prescription</li>
                                            <li>Select tests from the available Services</li>
                                            <li>Schedule an appointment</li>
                                            <li>Our experts will reach your home  Collect the samples</li>
                                            <li>Get report through mail or Whatsapp</li>
                                        </ul>
                                        <Link to="/home" className="prebtn" >Upload Prescription<input type="file" name=""/></Link>
                                    </div>
                                    <div className="labimgright">
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
                            <h3>Full Body Check Up <Link to="/home" className="viewall">view all</Link></h3>
                        </div>
                    </div>
                        <Responsive/>
                    </div>
                    <div className="mt-4">
                      <Second/>
                    </div>
                </div>
            </div>
            
        )
    }
}
