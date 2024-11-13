import React from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import Footer from "../Components/Footer";
import InnerHeader from "../Components/InnerHeader";
import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <InnerHeader title='Portfolio'
                             desc='We will help a client to develop the products they have with high quality.'></InnerHeader>
                <section className="blog-area pb-120 pt-60">
                    <div className="container">
                        <div className="section-header__wrp mb-80">
                            <div className="section-header-two">
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">see our
                                    latest portfolio
                                </h2>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Explore our
                                latest portfolio
                                for expert insights on navigating the dynamic <br/> world of SEO.</p>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/SEO" className="image d-block">
                                        <img src="assets/images/portfolio/1-seo/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/SEO" className="primary-hover">
                                            SEO Mastery: Enhancing Your Online Visibility
                                        </Link>
                                    </h3>
                                    <p>
                                        Improve your website's search engine rankings and increase organic traffic
                                        through expert SEO strategies tailored to your business.
                                        <Link to="/SEO" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/PPC" className="image d-block">
                                        <img src="assets/images/portfolio/2-ppc/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/PPC" className="primary-hover">
                                            PPC Precision: Driving Targeted Traffic to Your Website
                                        </Link>
                                    </h3>
                                    <p>
                                        Utilize pay-per-click advertising campaigns to attract qualified leads and
                                        maximize your return on investment with precise targeting and optimization.
                                        <Link to="/PPC" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Social-Media-Marketing" className="image d-block">
                                        <img src="assets/images/portfolio/3-social-media/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Social-Media-Marketing" className="primary-hover">
                                            Social Media Solutions: Amplifying Your Brand's Reach
                                        </Link>
                                    </h3>
                                    <p>
                                        Engage your audience, build brand awareness, and drive conversions through
                                        strategic social media marketing across platforms tailored to your audience
                                        demographics.
                                        <Link to="/Social-Media-Marketing" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Content-Writting" className="image d-block">
                                        <img src="assets/images/portfolio/4-content-writing/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Content-Writting" className="primary-hover">
                                            Crafting Compelling Content: Engaging Your Audience Effectively
                                        </Link>
                                    </h3>
                                    <p>
                                        Captivate your audience and establish thought leadership with high-quality,
                                        relevant content tailored to your target audience's needs and interests.
                                        <Link to="/Content-Writting" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Email-Marketing" className="image d-block">
                                        <img src="assets/images/portfolio/5-email-marketing/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Email-Marketing" className="primary-hover">
                                            Email Marketing Excellence: Nurturing Customer Relationships
                                        </Link>
                                    </h3>
                                    <p>
                                        Build lasting relationships with your audience through personalized email
                                        campaigns that deliver valuable content, promotions, and updates directly to
                                        their inbox.
                                        <Link to="/Email-Marketing" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Analytics-Reporting" className="image d-block">
                                        <img src="assets/images/portfolio/6-analytics/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Analytics-Reporting" className="primary-hover">
                                            Analytics Insights: Understanding Your Digital Footprint
                                        </Link>
                                    </h3>
                                    <p>
                                        Gain actionable insights into your digital marketing efforts with comprehensive
                                        analytics and reporting, allowing you to make data-driven decisions for
                                        continuous improvement.
                                        <Link to="/Analytics-Reporting" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Web-Development" className="image d-block">
                                        <img src="assets/images/portfolio/7-website-design/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Web-Development" className="primary-hover">
                                            Web Design Wizardry: Creating Stunning Online Experiences
                                        </Link>
                                    </h3>
                                    <p>
                                        Stand out in the digital landscape with visually captivating and user-friendly
                                        website designs optimized for both aesthetics and functionality across all
                                        devices.
                                        <Link to="/Web-Development" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Graphic-Design" className="image d-block">
                                        <img src="assets/images/portfolio/8-graphic-design/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Graphic-Design" className="primary-hover">
                                            Graphic Design Brilliance: Captivating Visual Communication
                                        </Link>
                                    </h3>
                                    <p>
                                        Elevate your brand's visual identity with compelling graphic design elements
                                        that resonate with your target audience and leave a lasting impression.
                                        <Link to="/Graphic-Design" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Reputation-Management" className="image d-block">
                                        <img src="assets/images/portfolio/9-online-reputation/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Reputation-Management" className="primary-hover">
                                            Online Reputation Guardians: Protecting Your Brand's Integrity
                                        </Link>
                                    </h3>
                                    <p>
                                        Safeguard your brand's reputation and credibility online through proactive
                                        monitoring, strategic management, and swift response to maintain a positive
                                        image.
                                        <Link to="/Reputation-Management" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Advertising" className="image d-block">
                                        <img src="assets/images/portfolio/10-advertising/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Advertising" className="primary-hover">
                                            Strategic Advertising Tactics: Maximizing Your ROI
                                        </Link>
                                    </h3>
                                    <p>
                                        Achieve your advertising goals efficiently and effectively by implementing
                                        strategic ad campaigns that target the right audience, at the right time, and on
                                        the right platforms.
                                        <Link to="/Advertising" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Lead-Generation" className="image d-block">
                                        <img src="assets/images/portfolio/11-lead-generation/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Lead-Generation" className="primary-hover">
                                            Lead Generation Strategies: Fueling Your Sales Pipeline
                                        </Link>
                                    </h3>
                                    <p>
                                        Generate qualified leads and drive conversions with targeted lead generation
                                        strategies that nurture prospects through every stage of the buyer's journey.
                                        <Link to="/Lead-Generation" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__item">
                                    <Link to="/Web-Research" className="image d-block">
                                        <img src="assets/images/portfolio/12-web-research/1.jpg" alt="image"/>
                                    </Link>
                                    <h3 className="mb-10 mt-30">
                                        <Link to="/Web-Research" className="primary-hover">
                                            Web Research Expertise: Unveiling Market Insights
                                        </Link>
                                    </h3>
                                    <p>
                                        Gain valuable market intelligence and competitive insights through comprehensive
                                        web research, enabling informed decision-making and strategic planning for
                                        business growth.
                                        <Link to="/Web-Research" className="fw-500 primary-color">Read More</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="started-area pb-140">
                    <div className="container">
                        <div className="started__item bg-image" data-background="assets/images/bg/started-bg.png">
                            <div className="section-header-two text-center mb-40">
                                <h2 className="text-white wow fadeInUp" data-wow-delay="00ms"
                                    data-wow-duration="1000ms">Unlock Your
                                    Digital Potential with <br/> FrogBID SEO Solutions!</h2>
                                <p className="para-light-color wow fadeInUp" data-wow-delay="200ms"
                                   data-wow-duration="1000ms">
                                    Elevate your online presence with FrogBID trusted SEO
                                    solutions.
                                </p>
                            </div>
                            <div className="btn__group text-center wow fadeInDown" data-wow-delay="200ms"
                                 data-wow-duration="1000ms">
                                <a href="#" className="btn-two">Get Started<i
                                    className="fa-regular fa-arrow-right ml-10"></i></a>
                                <a href="about" className="btn-three ms-4">Learn More<i
                                    className="fa-regular fa-arrow-right ml-10"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio