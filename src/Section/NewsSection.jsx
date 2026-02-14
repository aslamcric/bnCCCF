import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NewsSection() {
  const { i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentLang = i18n.language ? i18n.language.split("-")[0].toLowerCase() : "en";

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/category_post")
      .then((res) => res.json())
      .then((data) => {
        const fetchedData = data.categories || data;
        setCategories(Array.isArray(fetchedData) ? fetchedData : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  const allPosts = categories.flatMap(cat => cat.posts || []);

  const filteredPosts = allPosts.filter(post => {
    const postLang = post.language ? String(post.language).toLowerCase().trim() : "";
    return postLang === currentLang;
  });

  const uniquePosts = Array.from(new Set(filteredPosts.map(p => p.id)))
    .map(id => filteredPosts.find(p => p.id === id));

  if (loading) return <div className="text-center p-5">Loading...</div>;

  return (
    <section className="news-section section-padding pt-0 fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">
            {currentLang === 'bn' ? 'ব্লগ ও সংবাদ' : 'Blog & News'}
          </span>
          <h2>
            {currentLang === 'bn' ? 'আমাদের সাম্প্রতিক খবর' : 'Insights from Latest Blog'}
          </h2>
        </div>

        <div className="row">
          {uniquePosts.length > 0 ? (
            uniquePosts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="news-card-items">
                  <div className="news-image">
                    <img
                      src={`http://localhost:8000/storage/${post.cover_photo_path}`}
                      alt={post.title}
                      style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                    />
                  </div>
                  <div className="news-content">
                    <ul className="news-meta">
                      <li>
                        <i className="fa-regular fa-user" />
                        {currentLang === 'bn' ? ' লেখক: ' : ' By: '} {post.author_name}
                      </li>
                    </ul>
                    <h4>
                      <a href={`/news/${post.slug}`}>{post.title}</a>
                    </h4>
                    <p>{post.sub_title}</p>
                    <a href={`/news/${post.slug}`} className="link-btn">
                      {currentLang === 'bn' ? 'আরও পড়ুন' : 'Read More'}
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-12 py-5 border rounded bg-light">
              <h4>No Posts Found For {currentLang === 'en' ? 'English' : 'Bangla'}.</h4>
              <p className="text-muted">Current Language In App: <strong>{currentLang}</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
