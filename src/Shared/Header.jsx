import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
// import MouseCursorNB2T from "./MouseCursorNB2T";

export default function Header() {
  return (
    <>
      {/* <MouseCursorNB2T /> */}

      <TopHeader />

      {/* Header Section Start */}
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  {/* <a href="index.html" className="header-logo">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a> */}
                  <Link to="/home" className="header-logo">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
              </div>

              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>

                      <li className="has-dropdown">
                        <Link to="pages">Pages</Link>
                      </li>

                      <li>
                        <Link to="blog">Blog</Link>
                      </li>

                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>

                <div className="header-button">
                  <a href="donation-details.html" className="theme-btn">
                    Donte Now <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search Area Start */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Here..."
            />
            <button
              type="submit"
              aria-label="search submit"
              className="search-btn"
            >
              <span>
                <i className="fa-regular fa-magnifying-glass"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
