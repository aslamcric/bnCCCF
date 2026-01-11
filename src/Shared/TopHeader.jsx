import React from 'react'

export default function TopHeader() {
    return (
        <div>
            {/* Header - Top Start */}
            <div className="header-top-section">
                <div className="container-fluid">
                    <div className="header-top-wrapper">
                        <div className="icon-items">
                            <div className="icon">
                                <i className="fa-regular fa-location-dot"></i>
                            </div>
                            <div className="content">
                                <span>Locate Address</span>
                                <h5>Network City, USA</h5>
                            </div>
                        </div>

                        <div className="icon-items">
                            <div className="icon">
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div className="content">
                                <span>Call Us any time</span>
                                <h5>
                                    <a href="tel:+16336547896">+163 3654 7896</a>
                                </h5>
                            </div>
                        </div>

                        <div className="icon-items">
                            <div className="icon">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div className="content">
                                <span>Email</span>
                                <h4>
                                    <a href="mailto:info@donat.com">info@donat.com</a>
                                </h4>
                            </div>
                        </div>

                        <div className="social-icon">
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
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
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <p className="text d-none d-xl-block">
                                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>

                            <div className="mobile-menu fix mb-3"></div>

                            <div className="offcanvas__contact d-xl-block">
                                <h4 className="d-xl-block">Contact Info</h4>
                                <ul className="d-xl-block">
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" rel="noreferrer" href="#">
                                                Main Street, Melbourne, Australia
                                            </a>
                                        </div>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </div>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" rel="noreferrer" href="#">
                                                Mod-friday, 09am -05pm
                                            </a>
                                        </div>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>

                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas__overlay"></div>
        </div>
    )
}
