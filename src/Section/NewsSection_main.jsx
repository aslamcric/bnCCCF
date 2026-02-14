import React from "react";
import { useTranslation } from "react-i18next";

export default function NewsSection() {
  const { t } = useTranslation();

  const newsData = t("newsSection.newsList", { returnObjects: true });

  return (
    <section className="news-section section-padding pt-0 fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">
            {t("newsSection.subTitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            <span>{t("newsSection.titleLetter")}</span>
            {t("newsSection.titlePart")}
          </h2>
        </div>
        <div className="row">
          {Array.isArray(newsData) &&
            newsData.map((news, index) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={news.delay}
                key={index}
              >
                <div className="news-card-items">
                  <div className="news-image">
                    <img src={news.image} alt="news" />
                    {/* Layer Wrapper for hover effect */}
                    <div className="news-layer-wrapper">
                      <div
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                      <div
                        className="news-layer-image"
                        style={{ backgroundImage: `url(${news.image})` }}
                      />
                    </div>
                    <div className="bottom-shape">
                      <img src="assets/img/home-1/news/shape.png" alt="shape" />
                    </div>
                  </div>
                  <div className="news-content">
                    <ul className="news-meta">
                      <li>
                        <i className="fa-regular fa-user" />
                        {t("newsSection.authorLabel")}
                      </li>
                      <li>
                        <i className="fa-regular fa-comment" />
                        {t("newsSection.commentLabel")}
                      </li>
                    </ul>
                    <h4>
                      <a href="news-details.html">{news.title}</a>
                    </h4>
                    <a href="news-details.html" className="link-btn">
                      {t("newsSection.readMore")}{" "}
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
