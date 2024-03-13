import React from "react";

import Woman1 from "../../../../public/assets/brand-woman.png";

export const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__img">
        <svg
          className="brand__img-dots"
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
        <img src={Woman1} alt="women" />
        <button className="brand__img-btn">Explore now</button>
      </div>

      <div className="brand__info">
        <h3 className="brand__info-title">Best fashion brand</h3>
        <p className="brand__info-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum
          dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros
          eleifend ut tincidunt ipsum .
        </p>
        <div className="brand__info-blocks">
          <div className="brand__info-blocks_text">
            <p className="brand__info-blocks_text-title">250+</p>
            <p className="brand__info-blocks_text-desc">Store Branches</p>
          </div>
          <div className="brand__info-blocks_text">
            <p className="brand__info-blocks_text-title">7000+</p>
            <p className="brand__info-blocks_text-desc">Product Sold</p>
          </div>
          <div className="brand__info-blocks_text">
            <p className="brand__info-blocks_text-title">3900+</p>
            <p className="brand__info-blocks_text-desc">5 Star Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};
