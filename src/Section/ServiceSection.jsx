import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: "assets/img/home-1/icon/03.svg",
      titleKey: "service.item1.title",
      descKey: "service.item1.desc",
    },
    {
      id: 2,
      icon: "assets/img/home-1/icon/04.svg",
      titleKey: "service.item2.title",
      descKey: "service.item2.desc",
    },
    {
      id: 3,
      icon: "assets/img/home-1/icon/05.svg",
      titleKey: "service.item3.title",
      descKey: "service.item3.desc",
    },
  ];

  return (
    <div>
      {/* Service Section Start */}
      <section
        className="causes-section section-padding fix bg-cover"
        style={{ backgroundImage: "url(assets/img/home-1/service/bg.jpg)" }}
      >
        <div className="shape">
          <img src="assets/img/home-1/service/shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">
              {t("service.subTitle")}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              <span>{t("service.titleLetter")}</span>
              {t("service.titlePart1")} <br /> {t("service.titlePart2")}
            </h2>
          </div>

          <div className="swiper service-slider">
            <div className="swiper-wrapper">
              {services.map((service) => (
                <div className="swiper-slide" key={service.id}>
                  <div className="causes-box-item">
                    <div className="icon">
                      <img src={service.icon} alt="img" />
                    </div>
                    <div className="content">
                      <h3>
                        <Link to="/project-details">{t(service.titleKey)}</Link>
                      </h3>
                      <p>{t(service.descKey)}</p>
                      <Link to="/project-details" className="theme-btn">
                        {t("service.learnMore")}{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-dot">
            <div className="dot" />
          </div>
        </div>
      </section>
    </div>
  );
}
