import React from 'react'

export default function CounterSection() {
    return (
        <div>
            <div className="counter-section fix section-bg-1">
                <div className="right-shape">
                    <img src="assets/img/home-1/feature/shape-2.png" alt="img" />
                </div>
                <div className="container">
                    <div className="counter-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="counter-image">
                                    <img src="assets/img/home-1/feature/01.jpg" alt="img" />
                                    <div className="shape">
                                        <img src="assets/img/home-1/feature/shape-1.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="counter-content">
                                    <div className="section-title mb-0">
                                        <span className="sub-title wow fadeInUp">Numbers</span>
                                        <h2 className="sec-title">
                                            <span>W</span>e Always Help The <br /> Needy Peoply
                                        </h2>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".3s">
                                        Charity helps to reduce suffering but also fosters a sense of unity and shared
                                        responsibility in difference in someone's life.
                                    </p>
                                    <div className="counter-main-item">
                                        <div className="counter-item wow fadeInUp" data-wow-delay=".5s">
                                            <div className="content style-2">
                                                <h2><span className="count">35</span>k</h2>
                                                <p>Team Suppor</p>
                                            </div>
                                            <div className="content">
                                                <h2><span className="count">1</span>k+</h2>
                                                <p>Successful Camaigns</p>
                                            </div>
                                        </div>
                                        <div className="counter-item style-border wow fadeInUp" data-wow-delay=".3s">
                                            <div className="content">
                                                <h2><span className="count">15</span>k+</h2>
                                                <p>Incredible Volunteers</p>
                                            </div>
                                            <div className="content style-2">
                                                <h2><span className="count">400</span>+</h2>
                                                <p>Monthly Donor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
