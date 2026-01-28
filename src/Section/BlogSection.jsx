import React from "react";
import { useTranslation } from "react-i18next";

export default function BlogSection() {
  const { t } = useTranslation();

  const posts = t("blog.posts", { returnObjects: true });
  const recentPosts = t("blog.recentPosts", { returnObjects: true });
  const tags = t("blog.tags", { returnObjects: true });

  return (
    <section className="news-standard-section section-padding fix">
      <div className="container">
        <div className="news-standard-wrapper">
          <div className="row g-4 flex-column-reverse flex-lg-row">
            {/* Main Blog Posts */}
            <div className="col-lg-8 col-12">
              {Array.isArray(posts) &&
                posts.map((post, index) => (
                  <div className="news-grid-items" key={index}>
                    <div className="news-image">
                      <img src={post.img} alt="blog" />
                    </div>
                    <div className="news-content">
                      <ul className="date-list">
                        <li>
                          <i className="fa-solid fa-calendar-days" />
                          {post.date}
                        </li>
                        <li>
                          <i className="fa-solid fa-comments" />
                          {post.comments}
                        </li>
                      </ul>
                      <h3>
                        <a href="news-details.html">{post.title}</a>
                      </h3>
                      <p>{post.desc}</p>
                      <a href="news-details.html" className="theme-btn">
                        {t("blog.btnText")}{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                ))}

              {/* Pagination */}
              <div className="page-nav-wrap">
                <ul>
                  <li>
                    <a className="page-numbers style-2" href="#">
                      <i className="fa-solid fa-arrow-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a className="page-numbers" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      02
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      03
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers style-2" href="#">
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-12">
              <div className="main-sideber">
                {/* Search */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{t("blog.sidebar.search")}</h4>
                  </div>
                  <div className="search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder={t("blog.sidebar.searchPlaceholder")}
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* Categories */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{t("blog.sidebar.categories")}</h4>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      <li>
                        <a href="news-details.html">Donation</a>
                        <span>01</span>
                      </li>
                      <li>
                        <a href="news-details.html">Charity</a>
                        <span>05</span>
                      </li>
                      <li>
                        <a href="news-details.html">Volunteer</a>
                        <span>02</span>
                      </li>
                      <li>
                        <a href="news-details.html">Health</a>
                        <span>06</span>
                      </li>
                      <li>
                        <a href="news-details.html">Education</a>
                        <span>(04)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{t("blog.sidebar.recentPost")}</h4>
                  </div>
                  <div className="recent-post-area">
                    {Array.isArray(recentPosts) &&
                      recentPosts.map((rp, idx) => (
                        <div className="recent-items" key={idx}>
                          <div className="recent-thumb">
                            <img src={rp.img} alt="thumb" />
                          </div>
                          <div className="recent-content">
                            <h6>
                              <a href="news-details.html">{rp.title}</a>
                            </h6>
                            <ul>
                              <li>{rp.date}</li>
                            </ul>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="single-sidebar-widget mb-0">
                  <div className="wid-title">
                    <h4>{t("blog.sidebar.tagCloud")}</h4>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {Array.isArray(tags) &&
                        tags.map((tag, tIdx) => (
                          <a href="news-details.html" key={tIdx}>
                            {tag}
                          </a>
                        ))}
                    </div>
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
