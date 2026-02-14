import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 3;

  const currentLang = i18n.language?.split("-")[0]?.toLowerCase() || "en";

  // Translation texts
  const sidebarSearch = t("blog.sidebar.search");
  const searchPlaceholder = t("blog.sidebar.searchPlaceholder");
  const sidebarCategories = t("blog.sidebar.categories");
  const sidebarRecentPost = t("blog.sidebar.recentPost");
  const sidebarTagCloud = t("blog.sidebar.tagCloud");
  const btnText = t("blog.btnText");

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

  // Flatten all posts
  const allPosts = categories.flatMap((cat) => cat.posts || []);

  // Filter by language
  const filteredPosts = allPosts.filter((post) => {
    const postLang = post.language
      ? String(post.language).toLowerCase().trim()
      : "";
    return postLang === currentLang;
  });

  // Remove duplicates
  const uniquePosts = Array.from(new Set(filteredPosts.map((p) => p.id))).map(
    (id) => filteredPosts.find((p) => p.id === id),
  );

  // Search filter
  const searchedPosts = uniquePosts.filter((post) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = post.title?.toLowerCase().includes(searchLower);
    const descMatch = post.sub_title?.toLowerCase().includes(searchLower);
    const contentMatch = post.body?.toLowerCase().includes(searchLower);
    return titleMatch || descMatch || contentMatch;
  });

  // Sort posts by created_at in descending order (newest first)
  const sortedPosts = [...searchedPosts].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );

  // Get recent posts (last 3) from sorted posts
  const recentPosts = sortedPosts.slice(0, 3);

  // Get all tags from sorted posts (if available in API)
  const allTags = React.useMemo(() => {
    const tagCount = new Map();

    sortedPosts.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => {
          if (tag.name) {
            tagCount.set(tag.name, (tagCount.get(tag.name) || 0) + 1);
          }
        });
      }
    });

    // কাউন্ট অনুযায়ী সাজিয়ে প্রথম ৮টি নেওয়া
    return Array.from(tagCount.entries())
      .sort((a, b) => b[1] - a[1]) // বেশি কাউন্ট যাদের
      .slice(0, 8) // প্রথম ৮টি
      .map(([tagName]) => tagName);
  }, [sortedPosts]);

  // Get categories with counts
  const categoriesWithCount = categories.map((cat) => {
    const count =
      cat.posts?.filter((p) => {
        const postLang = p.language
          ? String(p.language).toLowerCase().trim()
          : "";
        return postLang === currentLang;
      }).length || 0;

    // ভাষা অনুযায়ী কাউন্ট দেখাও
    const displayCount =
      count === 0
        ? currentLang === "bn"
          ? "০০"
          : "00"
        : String(count).padStart(2, "0");

    return {
      name: cat.name,
      count: displayCount,
    };
  });

  // Pagination logic for sorted posts
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const getImageUrl = (path) => {
    if (!path) return "/assets/img/default-news.jpg";
    if (path.startsWith("http")) return path;
    return `http://localhost:8000/storage/${path}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === "bn" ? "bn-BD" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCommentText = (count) => {
    return `${count}${currentLang === "bn" ? "টি মন্তব্য" : " Comments"}`;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <section className="news-standard-section section-padding fix">
      <div className="container">
        <div className="news-standard-wrapper">
          <div className="row g-4 flex-column-reverse flex-lg-row">
            {/* Main Blog Posts */}
            <div className="col-lg-8 col-12">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div className="news-grid-items" key={post.id}>
                    <div className="news-image">
                      <img
                        src={getImageUrl(post.cover_photo_path)}
                        alt={post.photo_alt_text || post.title}
                      />
                    </div>
                    <div className="news-content">
                      <ul className="date-list">
                        <li>
                          <i className="fa-solid fa-calendar-days" />
                          {formatDate(post.created_at)}
                        </li>
                        <li>
                          <i className="fa-solid fa-comments" />
                          {getCommentText(post.comments_count || 0)}
                        </li>
                      </ul>
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>
                        {post.sub_title ||
                          post.excerpt ||
                          post.body?.replace(/<[^>]*>/g, "").substring(0, 150)}
                      </p>
                      <Link to={`/blog/${post.slug}`} className="theme-btn">
                        {btnText} <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-5">
                  <h4>
                    {currentLang === "bn"
                      ? "কোন ফলাফল পাওয়া যায়নি"
                      : "No results found"}
                  </h4>
                  <p>
                    {currentLang === "bn"
                      ? "অনুগ্রহ করে ভিন্ন কিওয়ার্ড দিয়ে অনুসন্ধান করুন"
                      : "Please try searching with different keywords"}
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && sortedPosts.length > 0 && (
                <div className="page-nav-wrap">
                  <ul>
                    <li>
                      <a
                        className={`page-numbers style-2 ${currentPage === 1 ? "disabled" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            handlePageChange(currentPage - 1);
                        }}
                      >
                        <i className="fa-solid fa-arrow-left" />
                      </a>
                    </li>

                    {getPageNumbers().map((number) => (
                      <li
                        key={number}
                        className={currentPage === number ? "active" : ""}
                      >
                        <a
                          className="page-numbers"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(number);
                          }}
                        >
                          {number.toString().padStart(2, "0")}
                        </a>
                      </li>
                    ))}

                    <li>
                      <a
                        className={`page-numbers style-2 ${currentPage === totalPages ? "disabled" : ""}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-12">
              <div className="main-sideber">
                {/* Search */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{sidebarSearch}</h4>
                  </div>
                  <div className="search-widget">
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={handleSearchInput}
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* Categories - সব ক্যাটেগরি দেখাবে */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{sidebarCategories}</h4>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {categoriesWithCount.map((cat, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSearchTerm(cat.name);
                              setCurrentPage(1);
                            }}
                          >
                            {cat.name}
                          </a>
                          <span>{cat.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>{sidebarRecentPost}</h4>
                  </div>
                  <div className="recent-post-area">
                    {recentPosts.map((post) => (
                      <div className="recent-items" key={post.id}>
                        <div className="recent-thumb">
                          <img
                            src={getImageUrl(post.cover_photo_path)}
                            alt={post.photo_alt_text || post.title}
                            style={{
                              width: "150px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="recent-content">
                          <h6>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h6>
                          <ul>
                            <li>{formatDate(post.created_at)}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                {allTags.length > 0 && (
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h4>{sidebarTagCloud}</h4>
                    </div>
                    <div className="news-widget-categories">
                      <div className="tagcloud">
                        {allTags.map((tag, idx) => (
                          <a
                            href="#"
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              setSearchTerm(tag);
                              setCurrentPage(1);
                            }}
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
