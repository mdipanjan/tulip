import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
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
          <div className="insurance-slider mr-2">
            <div className="card p-3 mr-2  h-100 rounded-0">
              <div>
                <img src="https://cms-img.coverfox.com/aditya-birla-health-insurance.jpg"/>
              </div>
              <p>Aditya Birla Activ Assure Diamond Plan</p>
              <button type="button" class="btn btn-outline-success">CHECK</button>
            </div>
          </div>
          <div className="insurance-slider mr-2">
            <div className="card p-3 mr-2 h-100 rounded-0">
              <div>
                <img src="https://d3h6xrw705p37u.cloudfront.net/news/listing_image_300x220/religare-health-insurance-targets-breakeven-in-2018-1460985536.jpg"/>
              </div>
              <p>Religare Care Health Insurance Plan</p>
              <button type="button" class="btn btn-outline-success">CHECK</button>
            </div>
          </div>
          <div className="insurance-slider mr-2">
            <div className="card p-3 mr-2 h-100 rounded-0">
                <div>
                  <img src="http://www.bimabazaar.com/wp-content/uploads/2017/11/HDFC-ERGO.jpg"/>
                </div>
                <p>Royal Sundaram Lifeline Supreme Plan</p>
                <button type="button" class="btn btn-outline-success">CHECK</button>
            </div>
          </div>
          <div className="insurance-slider mr-2">
            <div className="card p-3 mr-2 h-100 rounded-0">
                <div>
                  <img src="http://206.189.142.56/wp-content/uploads/2018/05/max_may30.jpg"/>
                </div>
                <p>Max Bupa Health Companion Individual Plan</p>
                
                <button type="button" class="btn btn-outline-success">CHECK</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}