import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterSection() {
  const { t } = useTranslation();

  // triggerOnce: false রাখা হয়েছে যাতে প্রতিবার স্ক্রল করলে কাজ করে
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="counter-section fix section-bg-1" ref={ref}>
      <div className="right-shape">
        <img src="assets/img/home-1/feature/shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="counter-wrapper">
          <div className="row g-4 align-items-center">
            {/* Image Section */}
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
              <div className="counter-image">
                <img src="assets/img/home-1/feature/01.jpg" alt="img" />
                <div className="shape">
                  <img src="assets/img/home-1/feature/shape-1.png" alt="img" />
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
                  {/* Row 1 */}
                  <div
                    className="counter-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div className="content style-2">
                      <h2>
                        <CountUp start={0} end={inView ? 35 : 0} duration={2} />
                        k
                      </h2>
                      <p>{t("counter.stats.teamSupport")}</p>
                    </div>
                    <div className="content">
                      <h2>
                        <CountUp
                          start={0}
                          end={inView ? 100 : 0}
                          duration={2}
                        />
                        +
                      </h2>
                      <p>{t("counter.stats.successfulCampaigns")}</p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div
                    className="counter-item style-border wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <div className="content">
                      <h2>
                        <CountUp start={0} end={inView ? 15 : 0} duration={2} />
                        k+
                      </h2>
                      <p>{t("counter.stats.incredibleVolunteers")}</p>
                    </div>
                    <div className="content style-2">
                      <h2>
                        <CountUp
                          start={0}
                          end={inView ? 400 : 0}
                          duration={2}
                        />
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
