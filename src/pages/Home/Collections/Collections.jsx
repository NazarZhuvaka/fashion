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
        <svg
          className="slider-cube"
          width="285"
          height="285"
          viewBox="0 0 285 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="285" height="285" fill="#BAD7F2" />
        </svg>
        <svg
        className="slider-dots"
          width="137"
          height="111"
          viewBox="0 0 137 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.78199 2L2 5.77647M5.78199 27.8059L2 31.5824M5.78199 53.6118L2 57.3882M5.78199 79.4176L2 83.1941M5.78199 105.224L2 109M31.6256 2L27.8436 5.77647M31.6256 27.8059L27.8436 31.5824M31.6256 53.6118L27.8436 57.3882M31.6256 79.4176L27.8436 83.1941M31.6256 105.224L27.8436 109M57.4692 2L53.6872 5.77647M57.4692 27.8059L53.6872 31.5824M57.4692 53.6118L53.6872 57.3882M57.4692 79.4176L53.6872 83.1941M57.4692 105.224L53.6872 109M83.3128 2L79.5308 5.77647M83.3128 27.8059L79.5308 31.5824M83.3128 53.6118L79.5308 57.3882M83.3128 79.4176L79.5308 83.1941M83.3128 105.224L79.5308 109M109.156 2L105.374 5.77647M109.156 27.8059L105.374 31.5824M109.156 53.6118L105.374 57.3882M109.156 79.4176L105.374 83.1941M109.156 105.224L105.374 109M135 2L131.218 5.77647M135 27.8059L131.218 31.5824M135 53.6118L131.218 57.3882M135 79.4176L131.218 83.1941M135 105.224L131.218 109"
            stroke="#003559"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  );
};
