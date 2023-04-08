import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [shrink, setShrink] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    });
  }, []);
  return (
    <header>
      <div className="top-header">
        <Link to="/">20% OFF Sitewide until 9/12</Link>
      </div>
      <nav className={shrink ? "nav-shrink" : ""}>
        <div className="nav container">
          <button
            onClick={toggle}
            className={`hamburger ${show ? "hamburger-close" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav__logo">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <ul className={`nav__list ${show ? "show" : ""}`}>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Lorem
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                consectetur
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                tempor
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                magna
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                reprehenderit
              </Link>
            </li>
          </ul>
          <div className="nav__icons">
            <Link to="/">
              <img src="/search.svg" alt="Search" />
            </Link>
            <Link to="/">
              <img src="/account.svg" alt="Account" />
            </Link>
            <Link to="/">
              <img src="/cart.svg" alt="Cart" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
