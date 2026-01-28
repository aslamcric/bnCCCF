import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactFormSection() {
  const { t } = useTranslation();

  return (
    <div className="contact-us-section-2 section-padding fix">
      <div className="container">
        <div className="contact-us-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-4">
              {/* Phone Info Box */}
              <div className="contact-us-box">
                <div className="icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="contact-us-content">
                  <span>{t("contactForm.info.phone.label")}</span>
                  <h5>
                    <a href={`tel:${t("contactForm.info.phone.num1")}`}>
                      {t("contactForm.info.phone.num")}
                    </a>
                  </h5>
                </div>
              </div>

              {/* Location Info Box */}
              <div className="contact-us-box">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="contact-us-content">
                  <span>{t("contactForm.info.location.label")}</span>
                  <h5>{t("contactForm.info.location.address")}</h5>
                </div>
              </div>

              {/* Email Info Box */}
              <div className="contact-us-box mb-0">
                <div className="icon">
                  <i className="fa-solid fa-square-chevron-down" />
                </div>
                <div className="contact-us-content">
                  <span>{t("contactForm.info.email.label")}</span>
                  <h5>
                    <a href={`mailto:${t("contactForm.info.email.mail1")}`}>
                      {t("contactForm.info.email.mail")}
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            {/* Contact Form Area */}
            <div className="col-lg-8">
              <div className="from-fill-up-box">
                <h4>{t("contactForm.form.title")}</h4>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name2"
                          placeholder={t("contactForm.form.namePlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder={t("contactForm.form.emailPlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          placeholder={t("contactForm.form.phonePlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder={t("contactForm.form.addressPlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder={t("contactForm.form.messagePlaceholder")}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button type="submit" className="theme-btn">
                        {t("contactForm.form.submitBtn")}{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
