import React from "react";
import Women from "../../../../public/assets/slider-woman.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

 const WelcomeSwiper = () => {
  return (
    <>
      <div className="swiper-container">
      <Swiper
        
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop="true"
        direction="vertical"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next",
          
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="welcome-swiper"
        
      >
        <SwiperSlide>
          <img src={Women} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Women} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Women} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Women} alt="" />
        </SwiperSlide>
        
        
      </Swiper>
      <button className="button-next"  
      
      >
          <svg
            width="24"
            height="33"
            viewBox="0 0 24 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V30.5M12 30.5L22 20.5M12 30.5L2 20.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default WelcomeSwiper;
