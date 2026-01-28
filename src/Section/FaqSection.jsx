import React from "react";
import { useTranslation } from "react-i18next";

export default function FaqSection() {
  const { t } = useTranslation();

  const questions = t("faq.questions", { returnObjects: true });

  return (
    <section className="faq-section section-padding fix">
      <div className="container">
        <div className="faq-wrapper">
          {/* <div className="row g-4 align-items-center"> */}
          {/* <div className="row g-4 align-items-center flex-column-reverse flex-lg-row"> */}
          <div className="row g-4 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="faq-items">
                <div className="accordion" id="accordionExample">
                  {Array.isArray(questions) &&
                    questions.map((item, index) => (
                      <div
                        className={`accordion-item wow fadeInUp ${index === questions.length - 1 ? "mb-0" : ""}`}
                        data-wow-delay={`.${3 + index * 2}s`}
                        key={index}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${item.id}`}
                        >
                          <button
                            className={`accordion-button ${item.expanded ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded={item.expanded ? "true" : "false"}
                            aria-controls={`collapse${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${item.expanded ? "show" : ""}`}
                          aria-labelledby={`heading${item.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">
                    {t("faq.subTitle")}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    <span>{t("faq.titleLetter")}</span>
                    {t("faq.titlePart")}
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  {t("faq.description")}
                </p>
                <div
                  className="faq-image wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/img/home-1/faq.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                    className="video-btn ripple video-popup"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
