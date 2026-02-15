import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link, useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [allTags, setAllTags] = useState([]);
    const [categoriesWithCount, setCategoriesWithCount] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const currentLang = i18n.language?.split("-")[0]?.toLowerCase() || "en";

    // Translation texts
    const sidebarSearch = t("blog.sidebar.search");
    const searchPlaceholder = t("blog.sidebar.searchPlaceholder");
    const sidebarCategories = t("blog.sidebar.categories");
    const sidebarRecentPost = t("blog.sidebar.recentPost");
    const sidebarTagCloud = t("blog.sidebar.tagCloud");

    // ===== ফাংশন ডিফাইন করুন =====
    const formatCommentCount = (count) => {
        return count.toString().padStart(2, "0");
    };

    const getTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1,
        };

        for (const [unit, seconds] of Object.entries(intervals)) {
            const interval = Math.floor(diffInSeconds / seconds);
            if (interval >= 1) {
                if (currentLang === "bn") {
                    if (unit === "minute") return `${interval} মিনিট আগে`;
                    if (unit === "hour") return `${interval} ঘণ্টা আগে`;
                    if (unit === "day") return `${interval} দিন আগে`;
                    if (unit === "week") return `${interval} সপ্তাহ আগে`;
                    if (unit === "month") return `${interval} মাস আগে`;
                    if (unit === "year") return `${interval} বছর আগে`;
                } else {
                    if (unit === "minute") return `${interval} Min Ago`;
                    if (unit === "hour") return `${interval} Hour Ago`;
                    if (unit === "day") return `${interval} Day Ago`;
                    if (unit === "week") return `${interval} Week Ago`;
                    if (unit === "month") return `${interval} Month Ago`;
                    if (unit === "year") return `${interval} Year Ago`;
                }
            }
        }
        return currentLang === "bn" ? "এইমাত্র" : "Just Now";
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/category_post")
            .then((res) => res.json())
            .then((data) => {
                const fetchedData = data.categories || data;
                const categoriesData = Array.isArray(fetchedData) ? fetchedData : [];
                setCategories(categoriesData);

                const allPosts = [];
                categoriesData.forEach((cat) => {
                    if (cat.posts && Array.isArray(cat.posts)) {
                        cat.posts.forEach((p) => {
                            allPosts.push({
                                ...p,
                                category_name: cat.name,
                                category_id: cat.id,
                            });
                        });
                    }
                });

                const currentPost = allPosts.find((p) => p.id === parseInt(id));
                setPost(currentPost);

                const recent = [...allPosts]
                    .filter((p) => p.language === currentLang)
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .slice(0, 3);
                setRecentPosts(recent);

                const tags = new Set();
                allPosts.forEach((p) => {
                    if (p.tags && Array.isArray(p.tags)) {
                        p.tags.forEach((tag) => {
                            if (tag.name) tags.add(tag.name);
                        });
                    }
                });
                setAllTags(Array.from(tags).slice(0, 8));

                const catWithCount = categoriesData.map((cat) => {
                    const count = cat.posts?.filter((p) => p.language === currentLang).length || 0;
                    const displayCount = count === 0
                        ? currentLang === "bn" ? "০০" : "00"
                        : String(count).padStart(2, "0");
                    return { name: cat.name, count: displayCount };
                });
                setCategoriesWithCount(catWithCount);

                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, [id, currentLang]);

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

    const handleSearch = (e) => { e.preventDefault(); };
    const handleSearchInput = (e) => { setSearchTerm(e.target.value); };
    const handleCategorySearch = (categoryName) => {
        navigate(`/blog?category=${categoryName}`);
    };

    const handleTagSearch = (tagName) => {
        navigate(`/blog?tag=${tagName}`);
    };

    if (loading) return <div className="text-center p-5">Loading...</div>;

    if (!post) {
        return (
            <div className="container py-5 text-center">
                <h2>{currentLang === "bn" ? "পোস্ট পাওয়া যায়নি" : "Post not found"}</h2>
                <Link to="/blog" className="theme-btn mt-3">
                    {currentLang === "bn" ? "ব্লগে ফিরে যান" : "Back to Blog"}
                </Link>
            </div>
        );
    }

    return (
        <div>
            <section className="news-details-section section-padding fix">
                <div className="container">
                    <div className="news-details-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-8 col-12">
                                <div className="news-details-post">
                                    <div className="news-details-image">
                                        <img
                                            src={getImageUrl(post.cover_photo_path)}
                                            alt={post.photo_alt_text || post.title}
                                        />
                                    </div>
                                    <div className="news-details-content">
                                        <ul className="date-list">
                                            <li><i className="fa-solid fa-calendar-days" /> {formatDate(post.created_at)}</li>
                                            <li><i className="fa-regular fa-user" /> {post.author_name || "Admin"}</li>
                                        </ul>
                                        <h2>{post.title}</h2> <hr />
                                        <h4>{post.sub_title}</h4> <br />
                                        <div dangerouslySetInnerHTML={{ __html: post.body }} />

                                        {post.tags && post.tags.length > 0 && (
                                            <div className="row tag-share-wrap mt-4 mb-5">
                                                <div className="col-lg-8 col-12">
                                                    <div className="tagcloud">
                                                        <span className="me-2">Tags:</span>
                                                        {post.tags.map((tag) => (
                                                            <a
                                                                key={tag.id}
                                                                href="#"
                                                                className="me-2" // ট্যাগগুলোর মাঝে গ্যাপের জন্য
                                                                style={{ borderRadius: '5px', padding: '5px 15px', border: '1px solid #eee', display: 'inline-block' }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleTagSearch(tag.name);
                                                                }}
                                                            >
                                                                {tag.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                                    <div className="social-share d-flex justify-content-lg-end gap-3"> {/* gap-3 আইকনগুলোর মাঝে স্পেস দিবে */}
                                                        <a
                                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="share-icon-style"
                                                        >
                                                            <i className="fab fa-facebook-f" />
                                                        </a>
                                                        <a
                                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="share-icon-style"
                                                        >
                                                            <i className="fab fa-twitter" />
                                                        </a>
                                                        <a
                                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="share-icon-style"
                                                        >
                                                            <i className="fab fa-linkedin-in" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Comments Section */}
                                        {post.comments && post.comments.length > 0 && (
                                            <div className="comment-area">
                                                <h3>{formatCommentCount(post.comments.length)} Comments</h3>
                                                {post.comments.map((comment) => (
                                                    <div className="comment-item" key={comment.id}>
                                                        <div className="client-image">
                                                            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.user?.name || "User")}&background=random`} alt="user" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <h4>{comment.user?.name || "Anonymous"}</h4>
                                                            <p>{comment.comment}</p>
                                                            <ul className="comment-list">
                                                                <li><i className="fa-regular fa-heart"></i> Like</li>
                                                                <li><i className="fa-light fa-reply"></i> Reply</li>
                                                                <li><i className="fa-regular fa-clock"></i> {getTimeAgo(comment.created_at)}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Comment Form */}
                                        <div className="contact-from-box">
                                            <form action="#" id="contact-form" method="POST">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <input type="text" name="name" placeholder="Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-clt">
                                                            <input type="text" name="email" placeholder="Enter Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-clt">
                                                            <textarea name="message" placeholder="Type your message" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <button type="submit" className="theme-btn">Save Information <i className="fa-solid fa-arrow-right-long" /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            {/* Sidebar অংশটি নিচে দেওয়া হলো যা আপনার আগের ডিজাইন অনুযায়ী */}

                            <div className="col-lg-4 col-12">
                                <div className="main-sideber">

                                    {/* Search Widget */}
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
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Categories Widget with Icons */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h4>{sidebarCategories}</h4>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul>
                                                {categoriesWithCount.map((cat, idx) => (
                                                    <li key={idx}>
                                                        <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySearch(cat.name); }}>
                                                            {cat.name}
                                                        </a>
                                                        <span>{cat.count}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Recent Post Widget with Icons */}
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
                                                            alt="thumb"
                                                            style={{ width: "90px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                        />
                                                    </div>
                                                    <div className="recent-content">
                                                        <ul className="post-date">
                                                            <li><i className="fa-solid fa-calendar-days"></i> {formatDate(post.created_at)}</li>
                                                        </ul>
                                                        <h6>
                                                            <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tag Cloud Widget */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h4>{sidebarTagCloud}</h4>
                                        </div>
                                        <div className="tagcloud">
                                            {allTags.map((tag, index) => (
                                                <a key={index} href="#" onClick={(e) => { e.preventDefault(); handleTagSearch(tag); }}>
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
            </section>
        </div>
    );
};

export default BlogDetails;