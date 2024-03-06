import React from "react";

import Frilled from "../../../../public/assets/Frilled.png";
import Round from "../../../../public/assets/Round.png";
import White from "../../../../public/assets/White.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Collections = () => {
  return (
    <div className="collections">
      <h2 className="collections__title">Our featured collections</h2>
      <div className="collections-swiper__container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop="true"
          direction="horizontal"
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="collections-swiper"
        >
          <SwiperSlide>
            <div className="slide-info">
              <img src={Frilled} alt="" />
              <p className="slide-info__text">Frilled Sleeves Midi Dress</p>
              <p className="slide-info__price">$200</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <img src={Round} alt="" />
              <p className="slide-info__text">Round Neck Solid Top</p>
              <p className="slide-info__price">$150</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <img src={White} alt="" />
              <p className="slide-info__text">White Rayon Short Blouson Crop Top</p>
              <p className="slide-info__price">$250</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <img src={Round} alt="" />
              <p className="slide-info__text">Round Neck Solid Top</p>
              <p className="slide-info__price">$150</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <img src={Frilled} alt="" />
              <p className="slide-info__text">Frilled Sleeves Midi Dress</p>
              <p className="slide-info__price">$200</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <img src={White} alt="" />  
              <p className="slide-info__text">White Rayon Short Blouson Crop Top</p>
              <p className="slide-info__price">$250</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
