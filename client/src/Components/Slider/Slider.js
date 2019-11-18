import React, { Component } from 'react';
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows:false,
        swipe:true,
        lazyLoad:true,
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
              slidesToScroll: 2
            }
          }
        ]
      };
      return (
        <div className="">
          <Slider {...settings}>
            <div className="r_slider-box mr-3">
              <div class="card mr-2">
                <div className="img-wrap">
                  <img src="https://image.shutterstock.com/image-photo/asian-woman-patients-seeking-advice-260nw-1328241761.jpg" class="card-img-top" alt="..."/>
                </div>
                <div class="my-2 ml-2">
                  <p class="card-text">General physician</p>
                </div>
              </div>
            </div>
            <div className="r_slider-box mr-2">
              <div class="card mr-2">
                <div className="img-wrap">
                  <img src="https://image.freepik.com/free-photo/doctor-holding-stethoscope-with-copy-space_23-2148285701.jpg" class="card-img-top" alt="..."/>
                </div>
                <div class="my-2 ml-2">
                  <p class="card-text">Phsiotherapist</p>
                </div>
              </div>
            </div>
            <div className="r_slider-box mr-3">
            <div class="card mr-2">
              <div className="img-wrap">
              <img src="https://www.alexbelldental.com/wp-content/uploads/2017/11/holistic-dentist-dayton-ohio-300x257.jpg" class="card-img-top" alt="..."/>
              </div>
              <div class="my-2 ml-2">
                <p class="card-text">Dentist</p>
              </div>
              </div>
            </div>
            <div className="r_slider-box mr-2">
              <div class="card mr-2">
                <div className="img-wrap">
                  <img src="https://media.istockphoto.com/photos/handsome-doctor-in-the-hospital-at-night-picture-id524714646?k=6&m=524714646&s=612x612&w=0&h=GzjpICls599GTuSqhYce8WQDXAU6NOST_Sdk41N6exk=" class="card-img-top" alt="..."/>
                </div>
                <div class="my-2 ml-2">
                  <p class="card-text">Orthopedic</p>
                </div>
              </div>
            </div>
            
           
           
            
          </Slider>
        </div>
      );
    }
  }