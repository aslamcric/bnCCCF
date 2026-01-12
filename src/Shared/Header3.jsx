import React from "react";
import TopHeader3 from "./TopHeader3";
import { Link } from "react-router-dom";

export default function Header3() {
  return (
    <div>
      <TopHeader3 />

      {/* Pre loader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="F" className="letters-loading">
              F
            </span>
            {/* <span data-text-preloader="I" className="letters-loading">
              I
            </span> */}
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>

      {/* Header Section Start */}
      <header id="header-sticky" className="header-1 header-2 header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
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
                        <Link to="/home">Home</Link>
                      </li>

                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>

                      <li className="has-dropdown">
                        <Link to="#">Pages</Link>
                        <ul className="submenu">
                          <li className="has-dropdown">
                            <a href="project-details.html">
                              Cause
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="project.html">Our Cause</a>
                              </li>
                              <li>
                                <a href="project-details.html">Cause Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="volounteer-details.html">
                              volounteer
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="become-volounteer.html">
                                  Become Volounteer
                                </a>
                              </li>
                              <li>
                                <a href="volounteer.html">Volounteer</a>
                              </li>
                              <li>
                                <a href="volounteer-details.html">
                                  Volounteer Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="event-details.html">
                              Event
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="event.html"> Our Event</a>
                              </li>
                              <li>
                                <a href="event-list.html">Event List</a>
                              </li>
                              <li>
                                <a href="event-details.html">Event Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="donation-details.html">
                              Donation
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="donation.html"> Our Donation</a>
                              </li>
                              <li>
                                <a href="donation-now.html">Donation Now</a>
                              </li>
                              <li>
                                <a href="donation-details.html">
                                  Donation Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="pricing.html">Our Pricing</a>
                          </li>
                          <li>
                            <a href="faq.html">Our Faq</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/blog">Blog</Link>
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
                  <i className="fa-regular fa-magnifying-glass" />
                </a>
                <div className="header-button">
                  <a href="donation-details.html" className="theme-btn">
                    Donte Now <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Area Start */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
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
                <i className="fa-regular fa-magnifying-glass" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
