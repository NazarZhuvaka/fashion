import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import "swiper/swiper-bundle.css";

import First from "../../../../public/assets/first.png";

import { Swiper, SwiperSlide } from "swiper/react";

export const Sellers = () => {
  return (
    <div className="sellers">
      <h2 className="sellers__title">Our best sellers</h2>
      <Swiper
        modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        direction="horizontal"
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="sellers-swiper"
      >
        <SwiperSlide>
          <div className="slide__img-contaier">
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$200</p>
            </div>
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
        <div className="swiper-pagination-bullet">All</div>
        <div className="swiper-pagination-bullet">Tops</div>
      </Swiper>
    </div>
  );
};
