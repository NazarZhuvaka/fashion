import React from "react";

import Swiper from "./WelcomeSwiper";

export const Welcome = () => {
  return (
    <div className="welcome">
      <svg
        className="welcome-dots"
        width="86"
        height="88"
        viewBox="0 0 86 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.9593 2L0.00195312 4.96471M2.9593 22.2588L0.00195312 25.2235M2.9593 42.5176L0.00195312 45.4824M2.9593 62.7765L0.00195312 65.7412M2.9593 83.0353L0.00195312 86M23.1678 2L20.2105 4.96471M23.1678 22.2588L20.2105 25.2235M23.1678 42.5176L20.2105 45.4824M23.1678 62.7765L20.2105 65.7412M23.1678 83.0353L20.2105 86M43.3764 2L40.419 4.96471M43.3764 22.2588L40.419 25.2235M43.3764 42.5176L40.419 45.4824M43.3764 62.7765L40.419 65.7412M43.3764 83.0353L40.419 86M63.5849 2L60.6275 4.96471M63.5849 22.2588L60.6275 25.2235M63.5849 42.5176L60.6275 45.4824M63.5849 62.7765L60.6275 65.7412M63.5849 83.0353L60.6275 86M83.7934 2L80.8361 4.96471M83.7934 22.2588L80.8361 25.2235M83.7934 42.5176L80.8361 45.4824M83.7934 62.7765L80.8361 65.7412M83.7934 83.0353L80.8361 86"
          stroke="#003559"
          stroke-width="5"
        />
      </svg>
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
