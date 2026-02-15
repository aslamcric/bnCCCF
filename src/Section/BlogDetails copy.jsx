import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BlogDetails() {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const currentLang = i18n.language?.split("-")[0]?.toLowerCase() || "en";

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/category_post")
            .then((res) => res.json())
            .then((data) => {
                const categories = data.categories || [];
                let foundPost = null;
                categories.forEach((cat) => {
                    const p = cat.posts.find((item) => String(item.id) === String(id));
                    if (p) foundPost = p;
                });
                setPost(foundPost);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, [id]);

    const getImageUrl = (path) => {
        if (!path) return "/assets/img/default-news.jpg";
        if (path.startsWith("http")) return path;
        return `http://localhost:8000/storage/${path}`;
    };

    if (loading) return <div className="text-center p-5">Loading...</div>;
    if (!post) return <div className="text-center p-5">Post Not Found</div>;

    const comments = post.comments || [];

    return (
        <section className="blog-details-section section-padding py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">

                        <div className="blog-details-content">
                            <img
                                src={getImageUrl(post.cover_photo_path)}
                                alt={post.title}
                                className="img-fluid w-100 mb-4"
                                style={{ borderRadius: '15px', maxHeight: '500px', objectFit: 'cover' }}
                            />
                            <div className="meta mb-3 text-muted">
                                <span className="me-3"><i className="fa-solid fa-calendar-days text-warning me-2"></i>
                                    {new Date(post.created_at).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                                <span><i className="fa-solid fa-location-dot text-warning me-2"></i>{post?.author_name || 'admin'}</span>
                            </div>
                            <h2 className="fw-bold mb-4">{post?.title}</h2>
                            <div
                                className="description mb-5"
                                style={{ lineHeight: '1.8', fontSize: '18px', color: '#444' }}
                                dangerouslySetInnerHTML={{ __html: post?.body }}
                            />
                        </div>

                        <div className="tag-social-wrapper d-flex flex-wrap justify-content-between align-items-center py-4 border-top border-bottom mb-5">
                            <div className="tags-content d-flex align-items-center mb-3 mb-md-0">
                                <span className="fw-bold me-3">Tags:</span>
                                <div className="tag-links d-flex gap-2">
                                    {post.tags && post.tags.length > 0 ? (
                                        post.tags.map((tag) => (
                                            <Link key={tag.id} to="#" className="btn btn-light btn-sm px-3 py-1 border text-muted">
                                                {tag.name}
                                            </Link>
                                        ))
                                    ) : (
                                        <span className="text-muted italic">No Tags</span>
                                    )}
                                </div>
                            </div>

                            <div className="social-links d-flex gap-3">
                                <a href="#" className="text-dark bg-light rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '35px', height: '35px' }}><i className="fa-brands fa-twitter"></i></a>
                                <a href="#" className="text-dark bg-light rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '35px', height: '35px' }}><i className="fa-brands fa-youtube"></i></a>
                                <a href="#" className="text-dark bg-light rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '35px', height: '35px' }}><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#" className="text-dark bg-light rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '35px', height: '35px' }}><i className="fa-brands fa-facebook-f"></i></a>
                            </div>
                        </div>

                        <div className="comments-area mb-5">
                            <h3 className="mb-4 fw-bold">
                                {comments.length > 0
                                    ? `${String(comments.length).padStart(2, '0')} Comments`
                                    : 'No Comments Found'}
                            </h3>

                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div className="comment-item d-flex mb-4 p-3" key={comment.id || index}>

                                        <div className="client-image me-3">
                                            <div style={{
                                                border: '1px dashed #064439',
                                                borderRadius: '50%',
                                                padding: '5px',
                                                display: 'inline-block'
                                            }}>
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                        comment.user?.name || "User"
                                                    )}&background=random&color=fff`}
                                                    alt={comment.user?.name || "User"}
                                                    className="rounded-circle"
                                                    style={{
                                                        width: '70px',
                                                        height: '70px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="comment-body w-100">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <h5 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>
                                                    {comment.user?.name || "Guest User"}
                                                </h5>
                                            </div>

                                            <p className="mb-2 text-secondary" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                                                {comment.comment}
                                            </p>

                                            <div className="comment-actions d-flex gap-3 align-items-center small fw-bold">
                                                <span style={{ cursor: 'pointer', color: '#064439' }}>
                                                    <i className="fa-regular fa-heart me-1"></i> Like
                                                </span>
                                                <span style={{ cursor: 'pointer', color: '#064439' }}>
                                                    <i className="fa-solid fa-reply me-1"></i> Reply
                                                </span>
                                                <span className="text-muted fw-normal ms-auto">
                                                    <i className="fa-regular fa-clock me-1"></i>
                                                    {new Date(comment.created_at).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 border text-center text-muted mb-4" style={{ borderRadius: '15px', backgroundColor: '#f9f9f9' }}>
                                    {currentLang === 'bn' ? 'কোন মন্তব্য পাওয়া যায়নি' : 'No Comments Found'}
                                </div>
                            )}
                        </div>

                        <div className="comment-form-wrap p-4 p-md-5" style={{ backgroundColor: '#f6f7f6', borderRadius: '20px' }}>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control border-0 p-3" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control border-0 p-3" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control border-0 p-3" placeholder="Your Address" />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0 p-3" rows="5" placeholder="Type your message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="theme-btn btn px-4 py-3 border-0 text-white" style={{ borderRadius: '10px', backgroundColor: '#064439' }}>
                                            Save Information <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}