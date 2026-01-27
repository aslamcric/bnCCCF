import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section header-bg fix">
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row g-4 justify-content-between">
            <div
              className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>{t("footer.quickLinks")}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/about-us">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("menu.about")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("menu.contact")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.gallery")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <i className="fa-solid fa-chevrons-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("menu.blog")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Explore Now */}
            <div
              className="col-xl-3 col-md-6 col-lg-3 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>{t("footer.explore")}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/volunteers">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.volunteers")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.project")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/events">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.event")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/causes">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.causes")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Supports */}
            <div
              className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>{t("footer.supports")}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/donation">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.donation")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/forums">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.forums")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <i className="fa-solid fa-chevrons-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/policy">
                      <i className="fa-solid fa-chevrons-right"></i>{" "}
                      {t("footer.policy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="col-xl-5 col-md-6 col-lg-5 ps-lg-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>{t("footer.newsletter")}</h3>
                </div>
                <div className="footer-newsletter">
                  <p>{t("footer.newsletterDesc")}</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-clt">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder={t("footer.placeholder")}
                      />
                      <button type="submit" className="theme-btn">
                        {t("footer.subscribe")}
                      </button>
                    </div>
                  </form>
                  <div className="social-icon">
                    <a href="#" aria-label="Twitter">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Whatsapp">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="Youtube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p>{t("footer.copyright", { year: currentYear })}</p>

            <ul className="footer-bottom-list">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/careers">{t("footer.careers")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("menu.contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
