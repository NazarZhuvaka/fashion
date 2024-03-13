import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import "swiper/swiper-bundle.css";

import First from "../../../../public/assets/first.png";
import Second from "../../../../public/assets/second.png";
import Third from "../../../../public/assets/third.png";
import Forth from "../../../../public/assets/forth.png";
import Fiveth from "../../../../public/assets/fiveth.png";
import Sixth from "../../../../public/assets/sixth.png";

import { Swiper, SwiperSlide } from "swiper/react";

export const Sellers = () => {
  return (
    <div className="sellers">
      <h2 className="sellers__title">Our best sellers</h2>

      <Swiper
        modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        speed={600}
        pagination={{
          grabCursor: "true",
          type: "bullets",
          clickable: true,
          bulletClass: "custom-bullet",
          renderBullet: function (index, className) {
            if (index === 0) {
              return `<span class="${className}">All</span>`;
            } else if (index === 1) {
              return `<span class="${className}">Tops</span>`;
            } else if (index === 2) {
              return `<span class="${className}">Tshirts</span>`;
            } else {
              return `<span class="${className}">${index + 1}</span>`;
            }
          },
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
              <img src={Second} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$150</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Third} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$250</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Forth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$100</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Fiveth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$250</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Sixth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$300</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__img-contaier">
            <div className="slide__img-contaier_img">
              <img src={Fiveth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$250</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Forth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$300</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$450</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Sixth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$100</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Third} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$150</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Second} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$370</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__img-contaier">
            <div className="slide__img-contaier_img">
              <img src={Third} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$300</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Sixth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$500</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={First} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$145</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Fiveth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$790</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Second} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$99</p>
            </div>
            <div className="slide__img-contaier_img">
              <img src={Forth} alt="" />
              <p className="slide__img-contaier_img-title">Lorem Ipsum</p>
              <p className="slide__img-contaier_img-price">$330</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
