import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function DonationSection() {
  const { t } = useTranslation();

  const donations = [
    {
      id: 1,
      image: "assets/img/home-1/donation/01.jpg",
      itemKey: "donation.items.item1",
      style: "",
      delay: ".2s",
    },
    {
      id: 2,
      image: "assets/img/home-1/donation/02.jpg",
      itemKey: "donation.items.item2",
      style: "style-2",
      delay: ".4s",
    },
    {
      id: 3,
      image: "assets/img/home-1/donation/03.jpg",
      itemKey: "donation.items.item3",
      style: "style-3",
      delay: ".6s",
    },
    {
      id: 4,
      image: "assets/img/home-1/donation/04.jpg",
      itemKey: "donation.items.item4",
      style: "style-4",
      delay: ".8s",
    },
  ];

  return (
    <section className="donation-section section-padding fix">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">
              {t("donation.subTitle")}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              <span>{t("donation.titleLetter")}</span>
              {t("donation.titlePart1")} <br />
              {t("donation.titlePart2")}
            </h2>
          </div>

          <Link to="/donation" className="theme-btn">
            {t("donation.learnMore")}{" "}
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>

        {/* Donation Cards */}
        <div className="donation-wrapper">
          <div className="row">
            {donations.map((item) => (
              <div
                key={item.id}
                className="col-lg-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="donation-card-item">
                  <div className="donation-image">
                    <img src={item.image} alt="donation" />
                    <div className="right-shape">
                      <img
                        src="assets/img/home-1/donation/shape.png"
                        alt="shape"
                      />
                    </div>
                  </div>

                  <div className="donation-content">
                    <h4>
                      <Link to="/donation-details">
                        {t(`${item.itemKey}.title`)}
                      </Link>
                    </h4>

                    <p>{t(`${item.itemKey}.desc`)}</p>

                    <div className={`pro-items ${item.style}`}>
                      <div className="progress">
                        <div className="progress-value style-two" />
                      </div>
                    </div>

                    <ul className="donate-list">
                      <li>
                        <span>{t("donation.goal")} :</span> $250,000
                      </li>
                      <li>
                        <span>{t("donation.raised")} :</span> $500,000
                      </li>
                    </ul>

                    <Link
                      to="/donation-details"
                      className={`theme-btn ${item.style}`}
                    >
                      {t("donation.donateNow")}{" "}
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
