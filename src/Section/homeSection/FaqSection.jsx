import React from 'react'

export default function FaqSection() {
    return (
        <div>
            <section className="faq-section section-padding fix">
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-items">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What Is Charity, And Why Is It Important ?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Charity not only helps to reduce suffering but also fosters a sense of
                                                        unity and shared responsibility in society.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How Can I Get Involved In Charity Work ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Charity not only helps to reduce suffering but also fosters a sense of
                                                        unity and shared responsibility in society.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                                                    Dedication for charitable Donations ?
                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Charity not only helps to reduce suffering but also fosters a sense of
                                                        unity and shared responsibility in society.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                    My Donations Are Going To a Charity ?
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Charity not only helps to reduce suffering but also fosters a sense of
                                                        unity and shared responsibility in society.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".3s">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                                    Is my donation actually being put to use?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Charity not only helps to reduce suffering but also fosters a sense of
                                                        unity and shared responsibility in society.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title mb-0">
                                        <span className="sub-title wow fadeInUp">Our Faq</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            <span>E</span>Explore our FAQs for quick and helpful guidance
                                        </h2>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        Charity not only helps to reduce suffering but also fosters a sense of unity and shared
                                        responsibility in society. It reminds us of the can make it your significant difference
                                        in someone's life.
                                    </p>
                                    <div className="faq-image wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                        <img src="assets/img/home-1/faq.jpg" alt="img" />
                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                            <i className="fa-solid fa-play" />
                                        </a>
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
