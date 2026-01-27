import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
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
                  <Link to="/">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              {/* Mobile Sidebar Language Selection */}
              <div className="mobile-lang-selector mb-4">
                <p style={{ fontWeight: "600", marginBottom: "10px" }}>
                  {t("header.select_language") || "Language"}:
                </p>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`theme-btn ${i18n.language === "en" ? "" : "btn-style-two"}`}
                    style={{
                      padding: "5px 15px",
                      fontSize: "12px",
                      marginRight: "10px",
                    }}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("bn")}
                    className={`theme-btn ${i18n.language === "bn" ? "" : "btn-style-two"}`}
                    style={{ padding: "5px 15px", fontSize: "12px" }}
                  >
                    বাংলা
                  </button>
                </div>
              </div>

              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      Main Street, Melbourne
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />

      {/* Main Header */}
      <header id="header-sticky" className="header-1 header-2 header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <NavLink to="/" className="header-logo">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
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
                          <li>
                            <Link to="/project">
                              {t("menu.pagesMenu.ourCause")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/volounteer">
                              {t("menu.pagesMenu.volunteerList")}
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
                {/* Search Icon */}
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass" />
                </a>

                {/* Language Toggle - Updated for Mobile Visibility */}
                <div className="header-lang-nav" style={{ marginLeft: "10px" }}>
                  <button
                    className="theme-btn"
                    style={{
                      padding: "6px 10px",
                      fontSize: "12px",
                      minWidth: "45px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() =>
                      changeLanguage(i18n.language === "en" ? "bn" : "en")
                    }
                  >
                    <i
                      className="fa-solid fa-globe"
                      style={{
                        marginRight: i18n.language === "en" ? "0px" : "5px",
                      }}
                    ></i>
                    <span style={{ marginLeft: "5px" }}>
                      {i18n.language === "en" ? "BN" : "EN"}
                    </span>
                  </button>
                </div>

                {/* Hamburger Menu */}
                <div className="header__hamburger d-xl-none my-auto ml-10">
                  <div
                    className="sidebar__toggle"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
