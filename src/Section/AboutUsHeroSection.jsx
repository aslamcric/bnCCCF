import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutUsHeroSection() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="breadcrumb-wrapper fix bg-cover"
        style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              {/* Animated Main Title */}
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {t("aboutHero.title")}
              </h1>
            </div>

            {/* Breadcrumb Navigation List */}
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link to="/">{t("aboutHero.home")}</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right" />
              </li>
              <li>{t("aboutHero.currentPage")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
