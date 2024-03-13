import React, { useState, useEffect } from "react";
import moment from 'moment';

import Woman from "../../../../public/assets/deal-woman.png";
import RightD from "../../../../public/assets/right-dots.svg";
import LeftD from "../../../../public/assets/left-dots.svg";

export const Deal = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            <p className="deal__info-blocks_text-title">{currentTime.format('D')}</p>
            <p className="deal__info-blocks_text-desc">Days</p>
          </div>
          <div className="deal__info-blocks_text">
            <p className="deal__info-blocks_text-title">{currentTime.format('HH')}</p>
            <p className="deal__info-blocks_text-desc">Hours</p>
          </div>
          <div className="deal__info-blocks_text">
            <p className="deal__info-blocks_text-title">{currentTime.format('mm')}</p>
            <p className="deal__info-blocks_text-desc">Minute</p>
          </div>
        </div>

        <button className="deal__info-btn">Shop now</button>
      </div>

      <div className="deal__img">
        <img src={Woman} alt="Woman" />
        <img className="deal__img_right-dots" src={RightD} alt="RightD" />
        <img className="deal__img_left-dots" src={LeftD} alt="LeftD" />
      </div>
    </div>
  );
};
