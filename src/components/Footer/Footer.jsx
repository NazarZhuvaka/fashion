import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logos">
          {/* logo */}
          <div className="footer__logos-skilline">
            <Logo />
          </div>
          <div className="footer__virtual-class">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </div>
          {/* logo */}
        </div>

        <div className="footer__ul">
          <div className="footer__li">
            <p className="footer__li-title">Company</p>
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/aboutus"
            >
              About us
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/career"
            >
              Career
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/blog"
            >
              Blog
            </NavLink>
          </div>

          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/fAQs"
            >
              FAQs
            </NavLink>
          </div>
        </div>

        <div className="footer__ul">
          <div className="footer__li">
            <p className="footer__li-title">Need Help?</p>
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/shippingservices"
            >
              Shipping Services
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/Payment options"
            >
              Payment options
            </NavLink>
          </div>

          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/Returns & Exchanges"
            >
              Returns & Exchanges
            </NavLink>
          </div>

          <div className="footer__li">
            <NavLink
              className={(navData) => (navData.isActive ? "is-active" : "none")}
              to="/Unsubscribe"
            >
              Unsubscribe
            </NavLink>
          </div>
        </div>

        <div className="footer__ul">
          <div className="footer__li">
            <p className="footer__li-title">Follow us</p>
            <a className="footer__li" href="/">
              Instagram
            </a>
          </div>

          <div className="footer__li">
          <a className="footer__li" href="/">
            Facebook
          </a>
          </div>

          <div className="footer__li">
          <a className="footer__li" href="/">
            Twitter
          </a>
          </div>

          <div className="footer__li">
          <a className="footer__li" href="/">
            Snapchat
          </a>
          </div>

          <div className="footer__li">
          <a className="footer__li" href="/">
            Pinterest
          </a>
          </div>
        </div>
      </div>
      <span className="footer__line"></span>
      <div className="footer__about">
        Copyright @ Kartik Bansal
        <span className="footer__currentYear">{currentYear}</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};
