import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// ফাইলের ভেতরেই ডেটা অ্যারেটি রাখা হলো
const heroSlides = [
  {
    id: 1,
    bg: "assets/img/home-1/hero/hero-bg.jpg",
    subTitleKey: "hero.slide1.subTitle",
    titleKey: "hero.slide1.title",
    descKey: "hero.slide1.desc",
  },
  {
    id: 2,
    bg: "assets/img/home-1/hero/hero-bg-2.jpg",
    subTitleKey: "hero.slide2.subTitle",
    titleKey: "hero.slide2.title",
    descKey: "hero.slide2.desc",
  },
  {
    id: 3,
    bg: "assets/img/home-1/hero/hero-bg-3.jpg",
    subTitleKey: "hero.slide3.subTitle",
    titleKey: "hero.slide3.title",
    descKey: "hero.slide3.desc",
  },
];

export default function HomeHeroSection() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section Start */}
      <section className="hero-section-1">
        <div className="swiper hero-slider">
          <div className="swiper-wrapper">
            {/* ম্যাপ ফাংশন দিয়ে ৩টি স্লাইড তৈরি হচ্ছে */}
            {heroSlides.map((slide) => (
              <div className="swiper-slide" key={slide.id}>
                <div className="hero-1">
                  <div className="shape">
                    <img src="assets/img/home-1/hero/shape.png" alt="shape" />
                  </div>
                  <div
                    className="hero-bg bg-cover"
                    style={{
                      backgroundImage: `url(${slide.bg})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row g-4 justify-content-center">
                      <div className="col-lg-10">
                        <div className="hero-content">
                          <h6 data-animation="fadeInUp" data-delay="1.3s">
                            {t(slide.subTitleKey)}
                          </h6>
                          <h1 data-animation="fadeInUp" data-delay="1.5s">
                            {t(slide.titleKey)}
                          </h1>
                          <p data-animation="fadeInUp" data-delay="1.3s">
                            {t(slide.descKey)}
                          </p>
                          <div
                            className="hero-button"
                            data-animation="fadeInUp"
                            data-delay="1.5s"
                          >
                            {/* <a> এর বদলে <Link> ব্যবহার করা ভালো */}
                            <Link to="/contact" className="theme-btn">
                              {t("hero.common.joinBtn")}{" "}
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            <Link to="/about" className="theme-btn border-btn">
                              {t("hero.common.readMoreBtn")}{" "}
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
