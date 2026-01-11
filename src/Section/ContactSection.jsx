import React from 'react'

export default function ContactSection() {
    return (
        <div>
            <section className="contact-section section-padding pb-0">
                <div className="container-fluid">
                    <div className="contact-wrapper">
                        <div className="row g-4 align-items-end">
                            <div className="col-lg-6">
                                <div className="contact-image wow img-custom-anim-left" data-wow-duration="1.3s" data-wow-delay="0.3s">
                                    <img src="assets/img/home-1/contact.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <div className="logo-image">
                                        <a href="index.html"><img src="assets/img/logo/white-logo.svg" alt="img" /></a>
                                    </div>
                                    <div className="section-title mb-0">
                                        <h2 className="sec-title text-white">
                                            <span>A</span>lways open to more people <br /> who what to support easts other
                                        </h2>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".3s">
                                        Charity not only helps to reduce suffering but also fosters a sense of unity and shared
                                        responsibility in society It reminds us of the can make it.
                                    </p>
                                    <div className="contact-item wow fadeInUp" data-wow-delay=".5s">
                                        <a href="contact.html" className="theme-btn">Explore More <i className="fa-solid fa-arrow-right-long" /></a>
                                        <h6>
                                            <span>Call :</span>
                                            <a href="tel: +123 876 234">+123 876 234</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
