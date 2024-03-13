import React from "react";

export const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__img">
        <img src="" alt="women" />
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
