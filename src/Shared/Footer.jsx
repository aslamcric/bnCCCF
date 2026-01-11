import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-section header-bg fix">
            <div className="container">
                <div className="footer-widget-wrapper">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="about.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            About US
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 col-lg-3 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Explore Now</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="volounteer-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Volunteers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="project-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Project
                                        </a>
                                    </li>
                                    <li>
                                        <a href="event-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Event
                                        </a>
                                    </li>
                                    <li>
                                        <a href="project-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Causes
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Supports</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="donation-details.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Domination
                                        </a>
                                    </li>
                                    <li>
                                        <a href="news.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Forums
                                        </a>
                                    </li>
                                    <li>
                                        <a href="faq.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right"></i>
                                            Support Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-6 col-lg-5 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="wid-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-newsletter">
                                    <p>
                                        Charity not only helps to reduce suffering but also fosters a sense of unity and shared responsibility in society.
                                    </p>
                                    <form action="#">
                                        <div className="form-clt">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                placeholder="Enter Your Email"
                                            />
                                            <button type="submit" className="theme-btn">
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </form>
                                    <div className="social-icon">
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p>Copyright &amp; Design By <span>@Kindi</span></p>
                        <ul className="footer-bottom-list">
                            <li>
                                <a href="faq.html">Faq</a>
                            </li>
                            <li>
                                <a href="contact.html">Careers</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}
