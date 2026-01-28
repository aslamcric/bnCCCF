import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactUsHeroSection() {
  const { t } = useTranslation();

  return (
    <div
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            {/* Title with Animation */}
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {t("contactHero.title")}
            </h1>
          </div>

          {/* Breadcrumb Items */}
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">{t("contactHero.home")}</Link>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right" />
            </li>
            <li>{t("contactHero.currentPage")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
