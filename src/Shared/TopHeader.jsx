import React from "react";
import { useTranslation } from "react-i18next";

export default function TopHeader() {
  const { t, i18n } = useTranslation();
  return (
    <div className="header-top-section-2">
      <div className="container-fluid">
        <div className="header-top-wrapper-2">
          <div className="header-left">
            <ul className="list-icon">
              <li>
                <i className="fa-regular fa-location-dot" />
                {t("header.address")}
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href={`mailto:${t("header.email")}`}>{t("header.email")}</a>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" />
                <a href={`tel:${t("header.phone")}`}>{t("header.phone")}</a>
              </li>
            </ul>
          </div>
          <div className="social-icon">
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
