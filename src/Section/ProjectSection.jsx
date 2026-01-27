import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProjectSection() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: "assets/img/home-1/project/01.jpg",
      titleKey: "project.items.item1.title",
    },
    {
      id: 2,
      image: "assets/img/home-1/project/02.jpg",
      titleKey: "project.items.item2.title",
    },
    {
      id: 3,
      image: "assets/img/home-1/project/03.jpg",
      titleKey: "project.items.item3.title",
    },
  ];

  const renderSlides = (style = "") =>
    projects.map((project) => (
      <div className="swiper-slide brand-slide-element" key={project.id}>
        <div className="project-card-item">
          <div className="project-image">
            <img src={project.image} alt="project" />
            <div className="shape-image">
              <img src="assets/img/home-1/project/shape.png" alt="shape" />
            </div>

            <div className={`project-content ${style}`}>
              <div className="content">
                <h3>
                  <Link to="/project-details">{t(project.titleKey)}</Link>
                </h3>
                <h5>{t("project.category")}</h5>
              </div>

              <Link to="/project-details" className="arrow-icon">
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="project-section fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">
            {t("project.subTitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            <span>{t("project.titleLetter")}</span>
            {t("project.titlePart1")}
            {/* {t("project.titlePart2")} */}
          </h2>
        </div>
      </div>

      {/* First Slider */}
      <div className="swiper project-slider">
        <div className="swiper-wrapper slide-transtion">{renderSlides()}</div>
      </div>

      {/* Second Slider (RTL) */}
      <div dir="rtl" className="swiper project-slider-2">
        <div className="swiper-wrapper slide-transtion">
          {renderSlides("style-2")}
        </div>
      </div>
    </section>
  );
}
