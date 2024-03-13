// import React from 'react'

// // import First from "../../../../public/assets/first.png";

// import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

// import 'swiper/css/bundle';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';

// export const Sellers = () => {
//   return (
//     <>
//       <div className="sellers-swiper-container">
//       <Swiper

//         modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
//         // loop="true"
//         direction="horizontal"
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination

//         grid = {
//           {rows:2}
//         }
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//         className="sellers-swiper"

//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>

//       </Swiper>

//       </div>
//     </>
//   )
// }
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import First from "../../../../public/assets/first.png";

import { Swiper, SwiperSlide } from "swiper/react";

export const Sellers = () => {
  return (
    <div className="sellers">
      <h2 className="sellers__title">Our best sellers</h2>
      <Swiper
      modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
      loop={true}
      pagination
      direction="horizontal"
      spaceBetween={10}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="sellers-swiper"
    >
      <SwiperSlide>
        <div className="slide__img-contaier">
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide__img-contaier">
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide__img-contaier">
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
          <img src={First} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};
