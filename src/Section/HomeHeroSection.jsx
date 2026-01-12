import React from "react";

export default function HomeHeroSection() {
  return (
    <div>
      {/* Hero Section Start */}
      <section className="hero-section-1">
        {/* <div className="arrow-button">
          <button className="array-prev">
            <i className="fa-light fa-chevron-left"></i>
          </button>
          <button className="array-next">
            <i className="fa-light fa-chevron-right"></i>
          </button>
        </div> */}

        <div className="swiper hero-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-1">
                <div className="shape">
                  <img src="assets/img/home-1/hero/shape.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url(assets/img/home-1/hero/hero-bg.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Start Donating Poor People
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          We Are Non Profit Charity Organization
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.3s">
                          Charity not only helps to reduce suffering but also
                          fosters a sense of unity and shared responsibility in
                          difference in someone's life.
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          <a href="contact.html" className="theme-btn">
                            Join With Us{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                          <a href="about.html" className="theme-btn border-btn">
                            Read More{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="hero-1">
                <div className="shape">
                  <img src="assets/img/home-1/hero/shape.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage:
                      "url(assets/img/home-1/hero/hero-bg-2.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Start Donating Poor People
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          We Are Non Profit Charity Organization
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.3s">
                          Charity not only helps to reduce suffering but also
                          fosters a sense of unity and shared responsibility in
                          difference in someone's life.
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          <a href="contact.html" className="theme-btn">
                            Join With Us{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                          <a href="about.html" className="theme-btn border-btn">
                            Read More{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="hero-1">
                <div className="shape">
                  <img src="assets/img/home-1/hero/shape.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage:
                      "url(assets/img/home-1/hero/hero-bg-3.jpg)",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Start Donating Poor People
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          We Are Non Profit Charity Organization
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.3s">
                          Charity not only helps to reduce suffering but also
                          fosters a sense of unity and shared responsibility in
                          difference in someone's life.
                        </p>
                        <div
                          className="hero-button"
                          data-animation="fadeInUp"
                          data-delay="1.5s"
                        >
                          <a href="contact.html" className="theme-btn">
                            Join With Us{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                          <a href="about.html" className="theme-btn border-btn">
                            Read More{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
