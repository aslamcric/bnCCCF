import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterSection() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    // triggerOnce: true,
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="counter-section fix section-bg-1" ref={ref}>
      <div className="right-shape">
        <img src="assets/img/home-1/feature/shape-2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="counter-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="counter-image">
                <img src="assets/img/home-1/feature/01.jpg" alt="counter" />
                <div className="shape">
                  <img
                    src="assets/img/home-1/feature/shape-1.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="counter-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">
                    {t("counter.subTitle")}
                  </span>
                  <h2 className="sec-title wow fadeInUp" data-wow-delay=".3s">
                    <span>{t("counter.titleLetter")}</span>
                    {t("counter.titlePart1")}
                  </h2>
                </div>

                <p className="text wow fadeInUp" data-wow-delay=".5s">
                  {t("counter.description")}
                </p>

                <div className="counter-main-item">
                  <div
                    className="counter-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    {/* Item 1: Team Support */}
                    <div className="content style-2">
                      <h2>
                        <span className="count">
                          {inView ? <CountUp end={35} duration={3} /> : "0"}
                        </span>
                        k
                      </h2>
                      <p>{t("counter.stats.teamSupport")}</p>
                    </div>

                    {/* Item 2: Successful Campaigns */}
                    <div className="content">
                      <h2>
                        <span className="count">
                          {inView ? <CountUp end={100} duration={3} /> : "0"}
                        </span>
                        +
                      </h2>
                      <p>{t("counter.stats.successfulCampaigns")}</p>
                    </div>
                  </div>

                  <div
                    className="counter-item style-border wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    {/* Item 3: Volunteers */}
                    <div className="content">
                      <h2>
                        <span className="count">
                          {inView ? <CountUp end={15} duration={3} /> : "0"}
                        </span>
                        k+
                      </h2>
                      <p>{t("counter.stats.incredibleVolunteers")}</p>
                    </div>

                    {/* Item 4: Monthly Donors */}
                    <div className="content style-2">
                      <h2>
                        <span className="count">
                          {inView ? <CountUp end={400} duration={3} /> : "0"}
                        </span>
                        +
                      </h2>
                      <p>{t("counter.stats.monthlyDonors")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
