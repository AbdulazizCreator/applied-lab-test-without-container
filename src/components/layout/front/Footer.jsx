import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram.svg";
import email from "../../../assets/images/email.svg";
import arrow from "../../../assets/images/arrow.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__start">
          <h3 className="footer__title">Newsletter</h3>
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <button>
              <img src={arrow} alt="" />
            </button>
          </form>
          <div className="footer__social">
            <a href="https://www.facebook.com/abdulaziz.toshpulatov.58">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.facebook.com/abdulaziz.toshpulatov.58">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="mailto: abdulazizprogrammer@gmail.com">
              <img src={email} alt="Email" />
            </a>
          </div>
        </div>
        <div className="footer__end">
          <div>
            <h3 className="footer__title">AGAIN FASTER</h3>
            <div className="footer__links">
              <Link to="/">About Us</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Gift Cards</Link>
              <Link to="/">Military/LEO Discount</Link>
              <Link to="/">Financing</Link>
              <Link to="/">Retail Store</Link>
            </div>
          </div>
          <div>
            <h3 className="footer__title">Get help</h3>
            <div className="footer__links">
              <Link to="/">Introductions</Link>
              <Link to="/">Shipping</Link>
              <Link to="/">Returns and Warranty</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Shop in Store</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2020 Again Faster. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
