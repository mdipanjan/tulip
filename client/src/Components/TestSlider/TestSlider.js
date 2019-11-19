import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      swipe: true,

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
                  <img src="http://news.emory.edu/stories/2019/07/earlier_diabetes_diagnosis/thumbs/GettyImages-514347547.jpg"/>
                </div>
                <p className="mt-2 test-text">Thyrod test</p>
              </div>
            </div>
            <div className="insurance-slider mr-2">
              <div className="card p-3 mr-2 h-100 rounded-0">
                <div>
                  <img src="https://www.healtheuropa.eu/wp-content/uploads/2019/10/iStock-977304138-696x392.jpg"/>
                </div>
                <p className="mt-2 test-text">Hepataitis B test</p>
              </div>
            </div>
            <div className="insurance-slider mr-2">
              <div className="card p-3 mr-2 h-100 rounded-0">
                  <div>
                    <img src="https://article.images.consumerreports.org/f_auto/prod/content/dam/cro/news_articles/health/CRO_Health_Pricked_Finger_BGM_02-15"/>
                  </div>
                  <p className="mt-2 test-text">Dieabetes test</p>
              </div>
            </div>
        </Slider>
      </div>
    );
  }
}
