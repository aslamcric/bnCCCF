import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isDetailsPage = location.pathname.includes("-details") || location.pathname.includes("/blog/");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    if (window.innerWidth <= 991) {
      window.location.reload();
    }
  };

  return (
    <>
      {/* Header - Top Start */}
      <div className="header-top-section-2">
        <div className="container-fluid">
          <div className="header-top-wrapper-2">
            <div className="header-left">
              <ul className="list-icon">
                <li>
                  <i className="fa-regular fa-location-dot" />
                  {t("header.address")}
                </li>
                <li>
                  <i className="fa-solid fa-envelope" />
                  <a href={`mailto:${t("header.email")}`}>
                    {t("header.email")}
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <a href={`tel:${t("header.phone")}`}>{t("header.phone")}</a>
                </li>
              </ul>
            </div>
            <div className="social-icon">
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <NavLink to="/">
                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                  </NavLink>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                {t("header.description")}
              </p>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact d-xl-block">
                <h4 className="d-xl-block">{t("header.contact_info")}</h4>
                <ul className="d-xl-block">
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noreferrer" href="#">
                        {t("header.address")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`mailto:${t("header.email")}`}>
                        {t("header.email")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        {t("header.working_hours")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`tel:${t("header.phone")}`}>
                        {t("header.phone")}
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />

      {/* Main Header Start */}
      <header id="header-sticky" className="header-1 header-2 header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <NavLink to="/" className="header-logo">
                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                  </NavLink>
                </div>
              </div>

              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {t("menu.home")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about-us"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {t("menu.about")}
                        </NavLink>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">{t("menu.pages")}</Link>
                        <ul className="submenu">
                          <li className="has-dropdown">
                            <Link to="#">
                              {t("menu.pagesMenu.cause")}
                              <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/project">
                                  {t("menu.pagesMenu.ourCause")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/project-details">
                                  {t("menu.pagesMenu.causeDetails")}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link to="#">
                              {t("menu.pagesMenu.volunteer")}
                              <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/become-volounteer">
                                  {t("menu.pagesMenu.becomeVolunteer")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/volounteer">
                                  {t("menu.pagesMenu.volunteerList")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/volounteer-details">
                                  {t("menu.pagesMenu.volunteerDetails")}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link to="#">
                              {t("menu.pagesMenu.event")}
                              <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/event">
                                  {t("menu.pagesMenu.ourEvent")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/event-list">
                                  {t("menu.pagesMenu.eventList")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/event-details">
                                  {t("menu.pagesMenu.eventDetails")}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <Link to="#">
                              {t("menu.pagesMenu.donation")}
                              <i className="fas fa-angle-right" />
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/donation">
                                  {t("menu.pagesMenu.ourDonation")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/donation-now">
                                  {t("menu.pagesMenu.donationNow")}
                                </Link>
                              </li>
                              <li>
                                <Link to="/donation-details">
                                  {t("menu.pagesMenu.donationDetails")}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/pricing">
                              {t("menu.pagesMenu.pricing")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq">{t("menu.pagesMenu.faq")}</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {t("menu.blog")}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact-us"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {t("menu.contact")}
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass" />
                </a>

                {/* <div className="header-button" style={{ marginLeft: "15px" }}>
                  <button
                    className="theme-btn"
                    style={{
                      padding: "10px 16px",
                      fontSize: "14px",
                      minWidth: "60px",
                    }}
                    onClick={() =>
                      changeLanguage(i18n.language === "en" ? "bn" : "en")
                    }
                  >
                    <i className="fa-solid fa-globe mr-1"></i>
                    <span className="d-none d-md-inline">
                      {i18n.language === "en" ? " বাংলা" : " English"}
                    </span>
                    <span className="d-md-none">
                      {i18n.language === "en" ? " BN" : " EN"}
                    </span>
                  </button>
                </div> */}

                {!isDetailsPage && (
                  <div className="header-button" style={{ marginLeft: "15px" }}>
                    <button
                      className="theme-btn"
                      style={{
                        padding: "10px 16px",
                        fontSize: "14px",
                        minWidth: "60px",
                      }}
                      onClick={() =>
                        changeLanguage(i18n.language === "en" ? "bn" : "en")
                      }
                    >
                      <i className="fa-solid fa-globe mr-1"></i>
                      <span className="d-none d-md-inline">
                        {i18n.language === "en" ? " বাংলা" : " English"}
                      </span>
                      <span className="d-md-none">
                        {i18n.language === "en" ? " BN" : " EN"}
                      </span>
                    </button>
                  </div>
                )}

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
              placeholder={t("header.search")}
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
