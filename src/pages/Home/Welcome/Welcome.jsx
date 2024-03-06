import React from "react";

import Swiper from "./WelcomeSwiper";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__info">
        <h2 className="welcome__info-title">Make Your Style Looks Perfect</h2>
        <p className="welcome__info-text">
          Our collection will help your fashion looks better and we will provide
          the best product for you.
        </p>
        <button className="welcome__button">Shop now</button>
      </div>
      <Swiper />
    </div>
  );
};
