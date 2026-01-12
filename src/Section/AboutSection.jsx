import React from 'react'

export default function AboutSection() {
    return (
        <div>
            {/* About Section Start */}
            <section className="about-section section-padding fix">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-0">
                                        <span className="sub-title wow fadeInUp">About Us</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            <span>O</span>ur goal is to save more lives with your help.
                                        </h2>
                                    </div>

                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        “Overall, I cannot recommend The Gourmet Bistro highly enough. If you're looking for a
                                        restaurant that serves delicious, beautifully presented dishes with impeccable service,
                                        look no further. I will definitely be returning .
                                    </p>

                                    <div className="about-icon-item wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src="assets/img/home-1/icon/01.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4>Fundraising</h4>
                                            <p>
                                                Looking for a restaurant that serves delicious, beautifully presented dishes
                                                with impeccable service, look no further.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="about-icon-item mb-0 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <img src="assets/img/home-1/icon/02.svg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h4>Donation Marketing</h4>
                                            <p>
                                                Looking for a restaurant that serves delicious, beautifully presented dishes
                                                with impeccable service, look no further.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="about-bottom wow fadeInUp" data-wow-delay=".3s">
                                        <a href="about.html" className="theme-btn">
                                            More About Us <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>

                                        <div className="info-item">
                                            <div className="client-image">
                                                <img src="assets/img/home-1/about/client.png" alt="img" />
                                            </div>
                                            <div className="info-content">
                                                <h5>James Anderson</h5>
                                                <span>Software Engineer</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-item">
                                    <div className="about-image">
                                        <img
                                            src="assets/img/home-1/about/about-3.jpg"
                                            alt="img"
                                            className="wow img-custom-anim-right"
                                            data-wow-duration="1.3s"
                                            data-wow-delay="0.3s"
                                        />
                                        <div className="shape">
                                            <img src="assets/img/home-1/about/shape.png" alt="img" />
                                        </div>
                                        <div className="about-image-2">
                                            <img
                                                src="assets/img/home-1/about/about-1.jpg"
                                                alt="img"
                                                className="wow img-custom-anim-left"
                                                data-wow-duration="1.3s"
                                                data-wow-delay="0.3s"
                                            />
                                        </div>
                                        <div className="about-image-3">
                                            <img
                                                src="assets/img/home-1/about/about-2.png"
                                                alt="img"
                                                className="wow img-custom-anim-left"
                                                data-wow-duration="1.3s"
                                                data-wow-delay="0.3s"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
