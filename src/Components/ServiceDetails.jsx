import React from "react";

function ServiceDetails() {
    return (
        <div>
            <div className="service-details__left-item">
                <div className="item mb-40">
                    <ul>
                        <li>
                            <img src="assets/images/portfolio/icon/7.png" alt="icon"/>
                            <a href="web-design">
                                Website Design and Development
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/8.png" alt="icon"/>
                            <a href="graphic-design">
                                Graphic Design
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/1.png" alt="icon"/>
                            <a href="seo">
                                Search Engine Optimization (SEO)
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/2.png" alt="icon"/>
                            <a href="ppc">
                                Pay-Per-Click Advertising (PPC)
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/3.png" alt="icon"/>
                            <a href="social-media">
                                Social Media Marketing
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/4.png" alt="icon"/>
                            <a href="content-writing">
                                Content Writing
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/5.png" alt="icon"/>
                            <a href="email-marketing">
                                Email Marketing
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/6.png" alt="icon"/>
                            <a href="analytics">
                                Analytics and Reporting
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/9.png" alt="icon"/>
                            <a href="online-reputation">
                                Online Reputation Management
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/10.png" alt="icon"/>
                            <a href="advertising">
                                Advertising
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/11.png" alt="icon"/>
                            <a href="lead-generation">
                                Lead Generation
                            </a>
                        </li>
                        <li>
                            <img src="assets/images/portfolio/icon/12.png" alt="icon"/>
                            <a href="web-research">
                                Web Research
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="bg-image service-book-now text-center pb-4 pt-40 ps-4 pe-4"
                     style={{ backgroundImage: 'url("assets/images/service/service-details-image2.jpg")' }}>
                    <h4 className="text-white">Do You Need Any <br/> Consulting Service?</h4>
                    <a href="home" className="btn-one w-100 text-center mt-60">Go Back Homepage<i
                        className="fa-regular fa-arrow-right ml-10"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails