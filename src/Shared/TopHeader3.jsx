import React from "react";

export default function TopHeader3() {
  return (
    <div>
      {/* Header-top-section-2 Start */}
      <div className="header-top-section-2">
        <div className="container-fluid">
          <div className="header-top-wrapper-2">
            <div className="header-left">
              <ul className="list-icon">
                <li>
                  <i className="fa-regular fa-location-dot" />
                  Dhaka, Bangladesh
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <a href="mailto:cccbangladesh2023@gmail.com">
                    cccbangladesh2023@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <a href="tel:+880 1610-377725">+880 1610-377725</a>
                </li>
              </ul>
            </div>
            <div className="social-icon">
              <a target="_blank" href="https://www.facebook.com/CCCBpage">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a> */}
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/cccf23">
                <i className="fa-brands fa-youtube"></i>
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
                  <a href="index.html">
                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p> */}
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact d-xl-block">
                <h4 className="d-xl-block">Contact Info</h4>
                <ul className="d-xl-block">
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Dhaka, Bangladesh
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="mailto:info@example.com">
                        <span className="mailto:cccbangladesh2023@gmail.com">
                          cccbangladesh2023@gmail.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="#">Alaways</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+880 1610-377725">+880 1610-377725</a>
                    </div>
                  </li>
                </ul>

                <div className="social-icon d-flex align-items-center">
                  <a target="_blank" href="https://www.facebook.com/CCCBpage">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/cccf23">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay" />
    </div>
  );
}
