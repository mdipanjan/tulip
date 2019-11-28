// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: false,
//       infinite: false,
//       speed: 500,
//       arrows:false,
//       swipe:true,

//       slidesToShow: 4,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: false
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div className="">
//         <Slider {...settings}>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 1
//             </div>
//           </div>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 2
//             </div>
 
//           </div>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 3
//             </div>
//           </div>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 4
//             </div>
//           </div>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 5
//             </div>
//           </div>
//           <div className="featured-slider mr-2">
//             <div className="card p-3 mr-2 bg-danger h-100 rounded-0">
//                 6
//             </div>
//           </div>
          
//         </Slider>
//       </div>
//     );
//   }
// }