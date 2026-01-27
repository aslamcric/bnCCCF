import React from "react";
import { useTranslation } from "react-i18next";

export default function TestimonialSection() {
  const { t } = useTranslation();

  const testimonials = [
    t("testimonial.items.item1", { returnObjects: true }),
    t("testimonial.items.item2", { returnObjects: true }),
    t("testimonial.items.item3", { returnObjects: true }),
  ];

  const brands = [
    "assets/img/home-1/brand/01.png",
    "assets/img/home-1/brand/02.png",
    "assets/img/home-1/brand/03.png",
    "assets/img/home-1/brand/04.png",
  ];

  return (
    <section className="testimonial-section section-padding fix">
      <div className="container">
        <div className="section-title">
          <span className="sub-title wow fadeInUp">
            {t("testimonial.subTitle")}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            <span>{t("testimonial.titleLetter")}</span>
            {t("testimonial.titlePart1")} <br />
            {t("testimonial.titlePart2")}
          </h2>
        </div>

        <div className="testimonial-wrapper">
          <div className="row g-4">
            <div
              className="col-lg-5 wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="testimonial-image">
                <img
                  src="assets/img/home-1/testimonial/01.jpg"
                  alt="testimonial"
                />
                <div className="shape">
                  <img
                    src="assets/img/home-1/testimonial/shape.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="testimonial-content">
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper">
                    {testimonials.map((item, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="content">
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </div>
                          <p>{item.text}</p>
                          <h3>{item.name}</h3>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h6>
                  {t("testimonial.totalRaised")} &gt;{" "}
                  <span>{t("testimonial.amount")}</span>
                </h6>

                <div className="swiper brand-slider">
                  <div className="swiper-wrapper">
                    {brands.map((brand, i) => (
                      <div className="swiper-slide" key={i}>
                        <div className="brand-image text-center">
                          <img src={brand} alt="brand" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
