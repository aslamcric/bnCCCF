import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { t } = useTranslation();

  // JSON থেকে স্লাইডারের ডাটা নেওয়া হচ্ছে
  const slides = t("homeHero.slides", { returnObjects: true });

  // ইমেজের নামগুলো স্লাইড অনুযায়ী ডাইনামিক করার জন্য একটি অ্যারে
  const backgroundImages = [
    "assets/img/home-1/hero/hero-bg.jpg",
    "assets/img/home-1/hero/hero-bg-2.jpg",
    "assets/img/home-1/hero/hero-bg-3.jpg",
  ];

  return (
    <div>
      {/* Hero Section Start */}
      <section className="hero-section-1">
        {/* Swiper Container */}
        <div className="swiper hero-slider">
          <div className="swiper-wrapper">
            {Array.isArray(slides) &&
              slides.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="hero-1">
                    {/* Floating Shape */}
                    <div className="shape">
                      <img src="assets/img/home-1/hero/shape.png" alt="img" />
                    </div>

                    {/* Background Image */}
                    <div
                      className="hero-bg bg-cover"
                      style={{
                        backgroundImage: `url(${backgroundImages[index]})`,
                      }}
                    ></div>

                    <div className="container">
                      <div className="row g-4 justify-content-center">
                        <div className="col-lg-10">
                          <div className="hero-content">
                            <h6 data-animation="fadeInUp" data-delay="1.3s">
                              {slide.subTitle}
                            </h6>
                            <h1 data-animation="fadeInUp" data-delay="1.5s">
                              {slide.title}
                            </h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">
                              {slide.description}
                            </p>

                            {/* Hero Buttons */}
                            <div
                              className="hero-button"
                              data-animation="fadeInUp"
                              data-delay="1.5s"
                            >
                              <Link to="/contact" className="theme-btn">
                                {slide.btnJoin}{" "}
                                <i className="fa-solid fa-arrow-right-long"></i>
                              </Link>
                              <Link
                                to="/about"
                                className="theme-btn border-btn"
                              >
                                {slide.btnRead}{" "}
                                <i className="fa-solid fa-arrow-right-long"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
