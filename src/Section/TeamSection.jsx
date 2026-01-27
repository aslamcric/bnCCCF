import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();

  const members = [
    { id: 1, image: "assets/img/home-1/team/01.jpg", key: "member1" },
    { id: 2, image: "assets/img/home-1/team/02.jpg", key: "member2" },
    { id: 3, image: "assets/img/home-1/team/03.jpg", key: "member3" },
    { id: 4, image: "assets/img/home-1/team/04.jpg", key: "member4" },
  ];

  return (
    <div>
      <section className="team-section section-padding fix pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">{t("team.subTitle")}</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              <span>{t("team.titleLetter")}</span>
              {t("team.titlePart1")} <br /> {t("team.titlePart2")}
            </h2>
          </div>

          <div className="row">
            {members.map((member, index) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                key={member.id}
              >
                <div className="team-card-items">
                  <div className="team-image">
                    <img src={member.image} alt="team" />
                  </div>
                  <div className="team-content">
                    <h5>
                      <a href="volounteer-details.html">
                        {t(`team.members.${member.key}.name`)}
                      </a>
                    </h5>
                    <p>{t(`team.members.${member.key}.designation`)}</p>
                    <div className="social-icon">
                      <a href="#"><i className="fa-brands fa-twitter" /></a>
                      <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                      <a href="#"><i className="fa-brands fa-instagram" /></a>
                      <a href="#"><i className="fas fa-paper-plane" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
