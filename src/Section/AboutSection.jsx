import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">
                    {t("about.subTitle")}
                  </span>

                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {/* key ব্যবহার করা হয়েছে যাতে ভাষা বদলালে রেন্ডারিং ঠিক থাকে */}
                    <span key={i18n.language}>{t("about.titleLetter")}</span>
                    {t("about.titlePart1")}
                    {i18n.language !== "en" && <br />}
                    {t("about.titlePart2")}
                  </h2>
                </div>

                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  {t("about.description")}
                </p>

                {/* Fundraising */}
                <div
                  className="about-icon-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon">
                    <img src="/assets/img/home-1/icon/01.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>{t("about.fundraisingTitle")}</h4>
                    <p>{t("about.fundraisingDesc")}</p>
                  </div>
                </div>

                {/* Donation Marketing */}
                <div
                  className="about-icon-item mb-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon">
                    <img src="/assets/img/home-1/icon/02.svg" alt="icon" />
                  </div>
                  <div className="content">
                    <h4>{t("about.donationTitle")}</h4>
                    <p>{t("about.donationDesc")}</p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="about-bottom wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/about" className="theme-btn">
                    {t("about.button")}{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>

                  <div className="info-item">
                    <div className="client-image">
                      <img
                        src="/assets/img/home-1/about/client.png"
                        alt="client"
                      />
                    </div>
                    <div className="info-content">
                      <h5>{t("about.name")}</h5>
                      <span>{t("about.designation")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-image">
                  <img
                    src="/assets/img/home-1/about/about-3.jpg"
                    alt="img"
                    className="wow img-custom-anim-right"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.3s"
                  />
                  <div className="shape">
                    <img src="/assets/img/home-1/about/shape.png" alt="shape" />
                  </div>
                  <div className="about-image-2">
                    <img
                      src="/assets/img/home-1/about/about-1.jpg"
                      alt="img"
                      className="wow img-custom-anim-left"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.3s"
                    />
                  </div>
                  <div className="about-image-3">
                    <img
                      src="/assets/img/home-1/about/about-2.png"
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
  );
}
