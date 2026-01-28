import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BlogHeroSection() {
  const { t } = useTranslation();

  return (
    <div
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            {/* Title from Translation */}
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {t("blogHero.title")}
            </h1>
          </div>

          {/* Breadcrumb Navigation */}
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">{t("blogHero.home")}</Link>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right" />
            </li>
            <li>{t("blogHero.currentPage")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
