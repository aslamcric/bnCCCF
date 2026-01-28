import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="contact-section section-padding pb-0">
      <div className="container-fluid">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-end">
            <div className="col-lg-6">
              <div
                className="contact-image wow img-custom-anim-left"
                data-wow-duration="1.3s"
                data-wow-delay="0.3s"
              >
                <img src="assets/img/home-1/contact.jpg" alt="contact-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="logo-image">
                  <a href="index.html">
                    <img src="assets/img/logo/white-logo.svg" alt="logo" />
                  </a>
                </div>
                <div className="section-title mb-0">
                  <h2 className="sec-title text-white">
                    <span>{t("contactSection.titleLetter")}</span>
                    {t("contactSection.titlePart")}
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".3s">
                  {t("contactSection.description")}
                </p>
                <div className="contact-item wow fadeInUp" data-wow-delay=".5s">
                  <a href="contact.html" className="theme-btn">
                    {t("contactSection.btnText")}{" "}
                    <i className="fa-solid fa-arrow-right-long" />
                  </a>
                  <h6>
                    <span>{t("contactSection.callLabel")}</span>{" "}
                    <a href={`tel:${t("contactSection.phoneNumber")}`}>
                      {t("contactSection.phoneNumber")}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
