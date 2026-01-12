import React from 'react'

export default function NewsSection() {
    return (
        <div>
            <section className="news-section section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            <span>I</span>nsights from latest blog
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/home-1/news/01.jpg" alt="img" />
                                    <div className="news-layer-wrapper">
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/01.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/01.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/01.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/01.jpg")' }} />
                                    </div>
                                    <div className="bottom-shape">
                                        <img src="assets/img/home-1/news/shape.png" alt="img" />
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul className="news-meta">
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By : Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comment" />
                                            By : Comment
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="news-details.html">
                                            How Education Can Transform a Child’s Future.
                                        </a>
                                    </h4>
                                    <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-arrow-right-long" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/home-1/news/02.jpg" alt="img" />
                                    <div className="news-layer-wrapper">
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/02.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/02.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/02.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/02.jpg")' }} />
                                    </div>
                                    <div className="bottom-shape">
                                        <img src="assets/img/home-1/news/shape.png" alt="img" />
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul className="news-meta">
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By : Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comment" />
                                            By : Comment
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="news-details.html">
                                            How Education Can Transform a Child’s Future.
                                        </a>
                                    </h4>
                                    <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-arrow-right-long" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/home-1/news/03.jpg" alt="img" />
                                    <div className="news-layer-wrapper">
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/03.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/03.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/03.jpg")' }} />
                                        <div className="news-layer-image" style={{ backgroundImage: 'url("assets/img/home-1/news/03.jpg")' }} />
                                    </div>
                                    <div className="bottom-shape">
                                        <img src="assets/img/home-1/news/shape.png" alt="img" />
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul className="news-meta">
                                        <li>
                                            <i className="fa-regular fa-user" />
                                            By : Admin
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-comment" />
                                            By : Comment
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="news-details.html">
                                            How Education Can Transform a Child’s Future.
                                        </a>
                                    </h4>
                                    <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-arrow-right-long" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
