import React from "react";
import "./Insurance.css";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";

export default function InsuranceList() {
  return (
    <div classname="container py-5">
      <div class="wrap py-5">
        <div className="header-wrapper">
          <div class="header mt-5">
            <div class="logo">
              <h1>Get best health Insurance plans in affordable prices</h1>
            </div>
          </div>
          <h2 className="mt-2 mb-5 sub-header">
            70% Indians don't have any health insurances, are you one of them?
          </h2>
        </div>
        <ul class="filter mt-4">
          <li>Most rated</li>
          <li>Top this month</li>
          <li>low price</li>
        </ul>
        <div class="rating plan-box">
          <div class="cocktail">
            <div className="health-img">
              <img src="https://d3h6xrw705p37u.cloudfront.net/news/listing_image_300x220/religare-health-insurance-targets-breakeven-in-2018-1460985536.jpg" />
            </div>
            <div class="description ml-4">
              <div className="title-box">
                <h6>Religare Care Health Plan</h6>
              </div>
              <div class="stars">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <span>4.0</span>
              </div>
              <span>&#x20b9; 473/month</span>
            </div>
            <div class="like-price">
              {/* <FaHeart className="like"/> */}
              {/* <i class="fas fa-heart "></i> */}
            </div>
          </div>
          <div class="cocktail">
            <div className="health-img">
              <img src="https://www.medianews4u.com/wp-content/uploads/2017/05/aditya-birla-health-insurance-logo-2-2.jpg" />
            </div>
            <div class="description ml-4">
              <h6>Aditya Birla Activ Assure Diamond</h6>
              <div class="stars">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStarHalf className="star-rating" />
                <span>4.5</span>
              </div>
              <span>&#x20b9; 493/month</span>
            </div>
            <div class="like-price">
              <i class="fas fa-heart like"></i>
            </div>
          </div>
          <div class="cocktail">
            <div className="health-img">
              <img src="https://cms-img.coverfox.com/apollo%20munich%20health%20insurance.jpg" />
            </div>
            <div class="description ml-4">
              <h6>Apollo Munich Optima Restore</h6>
              <div class="stars">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <span>4.0</span>
              </div>
              <span>&#x20b9; 333/month</span>
            </div>
            <div class="like-price">
              <i class="fas fa-heart like"></i>
            </div>
          </div>
          <div class="cocktail">
            <div className="health-img">
              <img src="https://github.com/OlgaKoplik/CodePen/blob/master/cocktails/5.jpg?raw=true" />
            </div>
            <div class="description ml-4">
              <h6>Royal Sundaram Lifeline Supreme </h6>
              <div class="stars">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <span>5.0</span>
              </div>
              <span>&#x20b9; 383/month</span>
            </div>
            <div class="like-price">
              <i class="fas fa-heart like"></i>
            </div>
          </div>
          <div class="cocktail">
            <div className="health-img">
              <img src="https://i1.wp.com/www.greaterkashmir.com/wp-content/uploads/2018/12/2018_12largeimg211_dec_2018_005957690.jpg?resize=480%2C320&ssl=1" />
            </div>
            <div class="description ml-4">
              <h6>Bajaj Allianz Health Guard</h6>
              <div class="stars">
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStar className="star-rating" />
                <FaStarHalf className="star-rating" />
                <span className="">4.5</span>
              </div>
              <span className="">&#x20b9; 423/month</span>
            </div>
            <div class="like-price">
              <i class="fas fa-heart like"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <a target="_blank" title="instagram/web__addict" href="https://www.instagram.com/web__addict/"><i class="fab fa-instagram"></i></a> */}
    </div>
  );
}
