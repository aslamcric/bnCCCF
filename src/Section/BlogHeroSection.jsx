import React from "react";

export default function BlogHeroSection() {
  return (
    <div
      className="breadcrumb-wrapper fix bg-cover"
      style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              Blog List
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right" />
            </li>
            <li>Blog List</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
