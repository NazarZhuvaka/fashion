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
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: ".collections__button-next",
            prevEl: ".collections__button-prev",
          }}
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
              <p className="slide-info__text">
                White Rayon Short Blouson Crop Top
              </p>
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
              <p className="slide-info__text">
                White Rayon Short Blouson Crop Top
              </p>
              <p className="slide-info__price">$250</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="collections__button-prev">
          <svg
            width="28"
            height="21"
            viewBox="0 0 28 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.0566 10.5516L2.13836 10.5516M2.13836 10.5516L10.5307 18.9439M2.13836 10.5516L10.5307 2.15918"
              stroke="white"
              stroke-width="2.51771"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className="collections__button-next">
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.98242 9.84981L25.9007 9.84981M25.9007 9.84981L17.5083 1.45744M25.9007 9.84981L17.5083 18.2422"
              stroke="white"
              stroke-width="2.51771"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
