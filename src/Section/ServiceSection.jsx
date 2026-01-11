import React from 'react'

export default function ServiceSection() {
    return (
        <div>
            {/* Service Section Start  */}
            <section className="causes-section section-padding fix bg-cover" style={{ backgroundImage: 'url(assets/img/home-1/service/bg.jpg)' }}>
                <div className="shape">
                    <img src="assets/img/home-1/service/shape.png" alt="img" />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sub-title wow fadeInUp">Charity Services</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            <span>P</span>roviding Humanist services to all <br /> people is what we do
                        </h2>
                    </div>
                    <div className="swiper service-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="causes-box-item">
                                    <div className="icon">
                                        <img src="assets/img/home-1/icon/03.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="project-details.html">Healthy Foods</a>
                                        </h3>
                                        <p>
                                            Looking for a restaurant that serves delicious, beautifully presented dishes with
                                            impeccable service, look no further.
                                        </p>
                                        <a href="project-details.html" className="theme-btn">Learn More <i className="fa-solid fa-arrow-right-long" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="causes-box-item">
                                    <div className="icon">
                                        <img src="assets/img/home-1/icon/04.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="project-details.html">Education</a>
                                        </h3>
                                        <p>
                                            Looking for a restaurant that serves delicious, beautifully presented dishes with
                                            impeccable service, look no further.
                                        </p>
                                        <a href="project-details.html" className="theme-btn">Learn More <i className="fa-solid fa-arrow-right-long" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="causes-box-item">
                                    <div className="icon">
                                        <img src="assets/img/home-1/icon/05.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h3>
                                            <a href="project-details.html">Medical Help</a>
                                        </h3>
                                        <p>
                                            Looking for a restaurant that serves delicious, beautifully presented dishes with
                                            impeccable service, look no further.
                                        </p>
                                        <a href="project-details.html" className="theme-btn">Learn More <i className="fa-solid fa-arrow-right-long" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-dot">
                        <div className="dot" />
                    </div>
                </div>
            </section>
        </div>

    )
}
