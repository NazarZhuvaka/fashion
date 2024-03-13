import React, { useState, useEffect } from "react";
import moment from 'moment';

import Woman from "../../../../public/assets/deal-woman.png";

export const Deal = () => {
  return (
    <div className="deal">
      <div className="deal__info">
        <h3 className="deal__info-title">Deal Of The Day</h3>
        <p className="deal__info-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>
        <div className="deal__info-blocks">
          <div className="deal__info-blocks_text">
            <p className="deal__info-blocks_text-title">250+</p>
            <p className="deal__info-blocks_text-desc">Days</p>
          </div>
          <div className="deal__info-blocks_text">
            <p className="deal__info-blocks_text-title">7000+</p>
            <p className="deal__info-blocks_text-desc">Hours</p>
          </div>
          <div className="deal__info-blocks_text">
            <p className="deal__info-blocks_text-title">3900+</p>
            <p className="deal__info-blocks_text-desc">Minute</p>
          </div>
        </div>

        <button className="deal__info-btn">Shop now</button>
      </div>

      <div className="deal__img">
        <img src={Woman} alt="Woman" />
      </div>
    </div>
  );
};
