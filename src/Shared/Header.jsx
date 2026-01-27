import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className={`fix-area ${isMenuOpen ? "opened" : ""}`}>
        <div className={`offcanvas__info ${isMenuOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleMenu}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3">
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/" onClick={toggleMenu}>
                        {t("menu.home")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us" onClick={toggleMenu}>
                        {t("menu.about")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" onClick={toggleMenu}>
                        {t("menu.blog")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us" onClick={toggleMenu}>
                        {t("menu.contact")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="offcanvas__contact d-xl-block">
                <h4 className="d-xl-block">Contact Info</h4>
                <ul className="d-xl-block">
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
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
      <div
        className={`offcanvas__overlay ${isMenuOpen ? "overlay-open" : ""}`}
        onClick={toggleMenu}
      />

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
                          onClick={toggleMenu}
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
                            <a href="project-details.html">
                              {t("menu.pagesMenu.cause")}
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="project.html">
                                  {t("menu.pagesMenu.ourCause")}
                                </a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  {t("menu.pagesMenu.causeDetails")}
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="has-dropdown">
                            <a href="volounteer-details.html">
                              {t("menu.pagesMenu.volunteer")}
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="become-volounteer.html">
                                  {t("menu.pagesMenu.becomeVolunteer")}
                                </a>
                              </li>
                              <li>
                                <a href="volounteer.html">
                                  {t("menu.pagesMenu.volunteerList")}
                                </a>
                              </li>
                              <li>
                                <a href="volounteer-details.html">
                                  {t("menu.pagesMenu.volunteerDetails")}
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="has-dropdown">
                            <a href="event-details.html">
                              {t("menu.pagesMenu.event")}
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="event.html">
                                  {t("menu.pagesMenu.ourEvent")}
                                </a>
                              </li>
                              <li>
                                <a href="event-list.html">
                                  {t("menu.pagesMenu.eventList")}
                                </a>
                              </li>
                              <li>
                                <a href="event-details.html">
                                  {t("menu.pagesMenu.eventDetails")}
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="has-dropdown">
                            <a href="donation-details.html">
                              {t("menu.pagesMenu.donation")}
                              <i className="fas fa-angle-right" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="donation.html">
                                  {t("menu.pagesMenu.ourDonation")}
                                </a>
                              </li>
                              <li>
                                <a href="donation-now.html">
                                  {t("menu.pagesMenu.donationNow")}
                                </a>
                              </li>
                              <li>
                                <a href="donation-details.html">
                                  {t("menu.pagesMenu.donationDetails")}
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="pricing.html">
                              {t("menu.pagesMenu.pricing")}
                            </a>
                          </li>

                          <li>
                            <a href="faq.html">{t("menu.pagesMenu.faq")}</a>
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

                {/* <div className="header-button" style={{ marginLeft: '15px' }}>
                                    <div className="dropdown">
                                        <button className="theme-btn dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '10px 20px', fontSize: '14px' }}>
                                            <i className="fa-solid fa-globe mr-2"></i> {i18n.language === 'en' ? 'English' : 'বাংলা'}
                                        </button>
                                        <ul className="dropdown-menu shadow" aria-labelledby="langDropdown">
                                            <li>
                                                <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                                                    English
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={() => changeLanguage('bn')}>
                                                    বাংলা
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}

                <div className="header-button" style={{ marginLeft: "15px" }}>
                  <button
                    className="theme-btn"
                    style={{ padding: "10px 16px", fontSize: "14px" }}
                    onClick={() =>
                      changeLanguage(i18n.language === "en" ? "bn" : "en")
                    }
                  >
                    <i className="fa-solid fa-globe mr-2"></i>
                    {i18n.language === "en" ? " বাংলা" : " English"}
                  </button>
                </div>
                <div
                  className="header__hamburger d-xl-none my-auto"
                  onClick={toggleMenu}
                >
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
