import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsHeroSection() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper fix bg-cover"
        style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                About Us
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right" />
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
