import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

import "material-icons/iconfont/material-icons.css";


export const Header = () => {
  const [isHiden, setIsHiden] = useState(false);
  useEffect(() => {
    const handleBodyClass = () => {
      if (isHiden) {
        document.body.classList.add("_hidden");
      } else {
        document.body.classList.remove("_hidden");
      }
    };
    handleBodyClass();
    return () => {
      document.body.classList.remove("_hidden");
    };
  }, [isHiden]);

  const [isPlugOn, setIsPlugOn] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = document.documentElement.clientHeight;
      const minHeight = 700;
      setIsPlugOn(screenHeight >= minHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <>
      <header className={`header ${isPlugOn ? "fixed-header" : ""}`}>
        <div className="header__container">
          <NavLink
            className={(navData) => (navData.isActive ? "is-active" : "none")}
            to="/"
          >
            <div className="header__logo">
              {/* <Logo myProp="header-logo" /> */}
              FASHION
            </div>
          </NavLink>

          <div className="header__links-container">
            <div
              onClick={() => setIsHiden(false)}
              className={`header__backdrop ${isHiden ? "_active" : ""}`}
            ></div>

            <div className={`header__menu ${isHiden ? "_active" : ""}`}>
              <div className="header__logo-menu">
                <Logo myProp="menu-logo" />
              </div>

              <ul className="header__ul">
                {/* <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/"
                    onClick={() => setIsHiden(false)}
                  >
                    Home
                  </NavLink>
                </li> */}
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/men"
                    onClick={() => setIsHiden(false)}
                  >
                    Men
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/women"
                    onClick={() => setIsHiden(false)}
                  >
                    Women
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/kids"
                    onClick={() => setIsHiden(false)}
                  >
                    Kids
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/collection"
                    onClick={() => setIsHiden(false)}
                  >
                    Collection
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/trends"
                    onClick={() => setIsHiden(false)}
                  >
                    Trends
                  </NavLink>
                </li>
              </ul>

              {/* sadasdasd */}
              <span
                className="material-icons icon-close"
                onClick={() => setIsHiden(false)}
              >
                close
              </span>
            </div>
          </div>

          <div className="header__btns">
                <Link to="/collection">
                  <div
                    className="btn header__btn-login"
                    onClick={() => setIsHiden(false)}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="header__search"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.6513 11.4142C20.6513 16.5157 16.5157 20.6513 11.4142 20.6513C6.31264 20.6513 2.17703 16.5157 2.17703 11.4142C2.17703 6.31264 6.31264 2.17703 11.4142 2.17703C16.5157 2.17703 20.6513 6.31264 20.6513 11.4142ZM18.3922 20.4477C16.4628 21.9402 14.0422 22.8284 11.4142 22.8284C5.11031 22.8284 0 17.7181 0 11.4142C0 5.11031 5.11031 0 11.4142 0C17.7181 0 22.8284 5.11031 22.8284 11.4142C22.8284 14.0437 21.9392 16.4656 20.4451 18.3955L27.9994 25.9498L25.9468 28.0023L18.3922 20.4477Z"
                        fill="#003559"
                      />
                    </svg>
                  </div>{" "}
                </Link>
                <span
            className="material-icons icon-menu"
            onClick={() => setIsHiden(true)}
          >
            menu
          </span>
              </div>

          {/* <span
            className="material-icons icon-menu"
            onClick={() => setIsHiden(true)}
          >
            menu
          </span> */}
        </div>
      </header>
      <div
        className={`header__plug ${isPlugOn ? "header__plug-on" : ""}`}
      ></div>
    </>
  );
};
