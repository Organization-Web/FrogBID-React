import React from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";


function home() {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <section
                    className="banner-area bg-image paralax__animation"
                    data-background="assets/images/banner/banner-bg.png">
                    <div className="banner__hero">
                        <img className="sway__animation" src="assets/images/banner/hero-image.png" alt="image"/>
                    </div>
                    <div className="banner__hero-info">
                        <img data-depth="0.03" src="assets/images/banner/banner-info.png" alt="image"/>
                    </div>
                    <div className="container">
                        <div className="banner__content">
                            <h1 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                The Digital <img src="assets/images/banner/banner-tittle-star.png" alt="image"/>
                                Agency
                                <br/>
                                For Better<span>Online Presence</span>
                            </h1>
                            <p className="mt-50 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                We specialize in crafting tailored digital marketing strategies to help businesses
                                thrive in
                                the
                                digital age. We offered SEO, PPC, social media marketing, content marketing, email
                                marketing, web
                                design, and more.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-40">
                                <a href="#" className="btn-one wow fadeInDown"
                                   data-wow-delay="200ms" data-wow-duration="1000ms">
                                    Free Consultation
                                    <i className="fa-regular fa-circle-arrow-right ml-10"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="brand-area pt-70">
                    <div className="container">
                        <h5 className="brand__title mb-40">Used by World Leading Companies</h5>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                            }}
                            breakpoints={{
                                // when window width is >= 320px (mobile)
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                // when window width is >= 640px (small tablets)
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                // when window width is >= 1024px (tablets and small desktops)
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 1440px (large desktops)
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <img src="assets/images/brand/brand-image1.png" alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/brand/brand-image2.png" alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/brand/brand-image3.png" alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/brand/brand-image4.png" alt="image"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/images/brand/brand-image5.png" alt="image"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <section className="about-area pt-140 pb-140">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="image about__image">
                                    <img src="assets/images/about/about-image.png" alt="image"/>
                                    <div className="about__shape1">
                                        <img src="assets/images/shape/about-shape1.png" alt="shape"/>
                                    </div>
                                    <div className="about__shape2">
                                        <img src="assets/images/shape/about-shape2.png" alt="shape"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__right-item">
                                    <div className="section-header">
                                        <h5 className="wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                                            About us
                                        </h5>
                                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                            Why <span className="primary-color">FrogBID</span> Should Be Your Top Choice
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                            As a leading digital marketing agency, we are dedicated to crafting bespoke
                                            solutions
                                            that elevate brands and drive tangible results. With a keen focus on
                                            leveraging
                                            cutting-edge technologies and strategic insights, our team of seasoned
                                            professionals is
                                            committed to delivering unparalleled services tailored to your unique needs.
                                            <a href="about" className="secondary-color fw-700 primary-hover">
                                                Read More
                                            </a>
                                        </p>
                                    </div>
                                    <div className="about__counter mt-40">
                                        <div className="coun-item wow fadeInDown" data-wow-delay="00ms"
                                             data-wow-duration="1000ms">
                                            <h3><span className="count">5</span>+</h3>
                                            <p>Years of experience</p>
                                        </div>
                                        <div className="coun-item wow fadeInDown" data-wow-delay="100ms"
                                             data-wow-duration="1000ms">
                                            <h3><span className="count">300</span>+</h3>
                                            <p>Completed Projects</p>
                                        </div>
                                        <div className="coun-item wow fadeInDown" data-wow-delay="200ms"
                                             data-wow-duration="1000ms">
                                            <h3><span className="count">220</span>+</h3>
                                            <p>Trusted Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="offer-area pt-140 pb-140 primary-bg text-white">
                    <div className="container">
                        <div className="section-header__wrp mb-60">
                            <div className="section-header">
                                <h5 className="text-white wow fadeInUp" data-wow-delay="00ms"
                                    data-wow-duration="1000ms">
                                    Our Services
                                </h5>
                                <h2 className="text-white wow fadeInUp" data-wow-delay="200ms"
                                    data-wow-duration="1000ms">
                                    <span className="light-underline">Services</span> we’re offering
                                </h2>
                            </div>
                            <p className="para-light-color wow fadeInUp" data-wow-delay="400ms"
                               data-wow-duration="1000ms">
                                Discover a spectrum of cutting-edge digital marketing services
                                <br/>
                                tailored to elevate your online presence, drive engagement.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="100ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/7.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Website Design and Development</h3>
                                    <ul>
                                        <li>Custom Website Design</li>
                                        <li>Frontend Development</li>
                                        <li>Backend Development</li>
                                        <li>Database Design</li>
                                        <li>Website Optimization and Performance</li>
                                        <li>Website Maintenance and Support</li>
                                        <li>E-commerce Services</li>
                                        <li>Content Services</li>
                                        <li>Digital Marketing Services</li>
                                        <li>UI/UX Services</li>
                                        <li>Consulting and Strategy Services</li>
                                    </ul>

                                    <a href="web-design" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/8.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Graphic Design</h3>
                                    <ul>
                                        <li>Visual Identity</li>
                                        <li>Print Design</li>
                                        <li>Digital Design</li>
                                        <li>Advertising and Marketing Collateral</li>
                                        <li>User Interface (UI) and User Experience (UX) Design</li>
                                        <li>Illustration and Iconography</li>
                                        <li>Motion Graphics and Animation</li>
                                        <li>Clipping Path</li>
                                        <li>Neck Join</li>
                                        <li>Drop Shadow</li>
                                    </ul>
                                    <a href="graphic-design" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="100ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/1.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Search Engine Optimization (SEO)</h3>
                                    <ul>
                                        <li>
                                            Keyword Research
                                        </li>
                                        <li>
                                            On-Page Optimization
                                        </li>
                                        <li>
                                            Content Creation
                                        </li>
                                        <li>
                                            Technical SEO
                                        </li>
                                        <li>
                                            Off-Page Optimization
                                        </li>
                                        <li>
                                            Local SEO
                                        </li>
                                        <li>
                                            SEO Audits and Monitoring
                                        </li>
                                        <li>
                                            Continuous Optimization
                                        </li>
                                    </ul>
                                    <a href="seo" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/2.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Pay-Per-Click Advertising (PPC)</h3>
                                    <ul>
                                        <li>Ad Campaign Setup</li>
                                        <li>Keyword Research</li>
                                        <li>Ad Creation</li>
                                        <li>Bid Management</li>
                                        <li>Targeting Options</li>
                                        <li>Ad Scheduling</li>
                                        <li>Landing Page Optimization</li>
                                        <li>Performance Monitoring and Optimization</li>
                                    </ul>
                                    <a href="ppc" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/3.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Social Media Marketing</h3>
                                    <ul>
                                        <li>Social Media Strategy</li>
                                        <li>Content Creation</li>
                                        <li>Audience Engagement</li>
                                        <li>Community Management</li>
                                        <li>Social Media Advertising</li>
                                        <li>Influencer Marketing</li>
                                        <li>Analytics and Reporting</li>
                                        <li>Cross-Promotion</li>
                                    </ul>
                                    <a href="social-media" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="100ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/4.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Content Writing</h3>
                                    <ul>
                                        <li>Understanding the Audience</li>
                                        <li>Content Planning</li>
                                        <li>SEO Optimization</li>
                                        <li>Writing Style</li>
                                        <li>Value Proposition</li>
                                        <li>Formatting and Structure</li>
                                        <li>Call-to-Action (CTA)</li>
                                        <li>Editing and Proofreading</li>
                                        <li>Content Distribution</li>
                                        <li>Performance Analysis</li>
                                    </ul>
                                    <a href="content-writing" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/5.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Email Marketing</h3>
                                    <ul>
                                        <li>Building an Email List</li>
                                        <li>Segmentation</li>
                                        <li>Email Design</li>
                                        <li>Content Creation</li>
                                        <li>Call-to-Action (CTA)</li>
                                        <li>Automation</li>
                                        <li>A/B Testing</li>
                                        <li>Deliverability and Compliance</li>
                                        <li>Tracking and Analytics</li>
                                        <li>Continuous Optimization</li>
                                    </ul>
                                    <a href="email-marketing" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/6.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Analytics and Reporting</h3>
                                    <ul>
                                        <li>Data Collection</li>
                                        <li>Key Metrics</li>
                                        <li>Data Analysis</li>
                                        <li>Performance Attribution</li>
                                        <li>Goal Tracking</li>
                                        <li>Reporting</li>
                                    </ul>
                                    <a href="analytics" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/9.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Online Reputation Management</h3>
                                    <ul>
                                        <li>Monitoring</li>
                                        <li>Reputation Analysis</li>
                                        <li>Review Management</li>
                                        <li>Content Creation and Promotion</li>
                                        <li>Search Engine Optimization (SEO)</li>
                                        <li>Social Media Management</li>
                                        <li>Crisis Management</li>
                                        <li>Online Brand Protection</li>
                                        <li>Influencer Engagement</li>
                                        <li>Continuous Monitoring and Improvement</li>
                                    </ul>
                                    <a href="online-reputation" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="100ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/10.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Advertising</h3>
                                    <ul>
                                        <li>Advertising Strategy</li>
                                        <li>Creative Development</li>
                                        <li>Media Planning and Buying</li>
                                        <li>Campaign Execution</li>
                                        <li>Targeting and Personalization</li>
                                        <li>Performance Optimization</li>
                                        <li>Compliance and Ethics</li>
                                    </ul>
                                    <a href="advertising" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/11.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Lead Generation</h3>
                                    <ul>
                                        <li>Target Audience Identification</li>
                                        <li>Content Creation</li>
                                        <li>Landing Page Optimization</li>
                                        <li>Lead Magnets</li>
                                        <li>Email Marketing</li>
                                        <li>Social Media Marketing</li>
                                        <li>Search Engine Optimization (SEO)</li>
                                        <li>Pay-Per-Click (PPC) Advertising</li>
                                        <li>Webinars and Events</li>
                                        <li>Lead Scoring and Qualification</li>
                                        <li>CRM Integration</li>
                                    </ul>
                                    <a href="lead-generation" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4">
                                <div className="bizx-service wow fadeInUp" data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <div className="service__icon mb-25">
                                        <img src="assets/images/icon/service/12.png" alt="icon"/>
                                    </div>
                                    <h3 className="text-white">Web Research</h3>
                                    <ul>
                                        <li>Topic Definition</li>
                                        <li>Source Identification</li>
                                        <li>Search Strategies</li>
                                        <li>Information Gathering</li>
                                        <li>Data Analysis</li>
                                        <li>Synthesis and Interpretation</li>
                                        <li>Citation and Attribution</li>
                                        <li>Quality Assurance</li>
                                        <li>Iterative Process</li>
                                    </ul>
                                    <a href="web-research" className="explore-btn mt-15 text-white">
                                        <span>Explore More</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="blog-area pt-140 pb-140">
                    <div className="container">
                        <div className="section-header__wrp mb-80">
                            <div className="section-header-two">
                                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">Our
                                    Portfolio</h5>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                    see our latest works
                                </h2>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                Explore our latest works for expert insights on navigating the <br/> dynamic world of
                                SEO.
                            </p>
                        </div>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={true}
                            navigation={true}
                            pagination={{clickable: true}}
                            modules={[Navigation, Pagination, Autoplay]}
                        >
                            <SwiperSlide>
                                <div className="blog__item">
                                    <a href="seo" className="image d-block">
                                        <img src="assets/images/portfolio/1-seo/1.jpg" alt="SEO Mastery"/>
                                    </a>
                                    <h3 className="mb-10 mt-30">
                                        <a href="seo" className="primary-hover">
                                            SEO Mastery: Enhancing Your Online Visibility
                                        </a>
                                    </h3>
                                    <p>
                                        Improve your website's search engine rankings and increase organic traffic
                                        through
                                        expert SEO strategies tailored to your business.
                                        <a href="seo" className="fw-500 primary-color">Read More</a>
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog__item">
                                    <a href="ppc" className="image d-block">
                                        <img src="assets/images/portfolio/2-ppc/1.jpg" alt="PPC Precision"/>
                                    </a>
                                    <h3 className="mb-10 mt-30">
                                        <a href="ppc" className="primary-hover">
                                            PPC Precision: Driving Targeted Traffic to Your Website
                                        </a>
                                    </h3>
                                    <p>
                                        Utilize pay-per-click advertising campaigns to attract qualified leads and
                                        maximize your
                                        return on investment with precise targeting and optimization.
                                        <a href="ppc" className="fw-500 primary-color">Read More</a>
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className="testimonial-area pb-140">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="testimonial__left-item">
                                    <div className="section-header">
                                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
                                            Clients Testimonial
                                        </h5>
                                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">
                                            Client’s <span>speeches</span> <br/>
                                            about FrogBID
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                            Our clients share their experiences with FrogBID Info Techs, expressing
                                            how our digital marketing expertise has not only met but
                                            exceeded their expectations, fostering success and growth
                                            for their businesses.
                                        </p>
                                    </div>
                                    <a href="#" target="_blank"
                                       className="btn-one mt-30 wow fadeInUp" data-wow-delay="600ms"
                                       data-wow-duration="1000ms">
                                        Book an appointment
                                        <i className="fa-regular fa-circle-arrow-right ml-10"></i>
                                    </a>
                                    <div
                                        className="testimonial-user d-flex gap-2 flex-wrap pt-30 bor-top mt-30 wow fadeInDown"
                                        data-wow-delay="300ms"
                                        data-wow-duration="1000ms">
                                        <img src="assets/images/testimonial/user.png" alt=""/>
                                        <p>Satisfied clients of FrogBID Info Techs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1000ms">
                                <div className="swiper testimonial__slider">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            spaceBetween={20}
                                            slidesPerView={1}
                                            loop={true}
                                            navigation={true}
                                            pagination={{clickable: true}}
                                            modules={[Navigation, Pagination, Autoplay]}
                                        >
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial__right-item">
                                                        <p>
                                                            "FrogBID delivers efficient services, with responsive
                                                            customer
                                                            support. Their team
                                                            is knowledgeable and adaptable, ensuring smooth project
                                                            execution."<br/><br/>
                                                        </p>
                                                        <div className="testimonial-info">
                                                            <div className="d-flex align-items-center gap-4">
                                                                <img
                                                                    src="assets/images/testimonial/testimonial-image1.png"
                                                                    alt="image"/>
                                                                <div className="testimonial-admin">
                                                                    <h4>Kawser Ahmed</h4>
                                                                    <span>Chief Executive Officer</span>
                                                                </div>
                                                            </div>
                                                            <div className="star d-flex gap-2">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial__right-item">
                                                        <p>
                                                            "Working with FrogBID has been a right and good
                                                            investment for our business. And Their targeted
                                                            campaigns and data-driven approach have not only
                                                            increased our ROI but also provide valuable insights for
                                                            future growth."
                                                        </p>
                                                        <div className="testimonial-info">
                                                            <div className="d-flex align-items-center gap-4">
                                                                <img
                                                                    src="assets/images/testimonial/testimonial-image2.png"
                                                                    alt="image"/>
                                                                <div className="testimonial-admin">
                                                                    <h4>Suborna Tarchera</h4>
                                                                    <span>Web Designer</span>
                                                                </div>
                                                            </div>
                                                            <div className="star d-flex gap-2">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial__right-item">
                                                        <p>
                                                            "FrogBID consistently exceeds expectations, delivering
                                                            results
                                                            that
                                                            drive business
                                                            growth. Their proactive approach and dedication set them
                                                            apart
                                                            in
                                                            the industry."<br/><br/>
                                                        </p>
                                                        <div className="testimonial-info">
                                                            <div className="d-flex align-items-center gap-4">
                                                                <img
                                                                    src="assets/images/testimonial/testimonial-image3.png"
                                                                    alt="image"/>
                                                                <div className="testimonial-admin">
                                                                    <h4>Alex Pranto</h4>
                                                                    <span>Software Engineer</span>
                                                                </div>
                                                            </div>
                                                            <div className="star d-flex gap-2">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="testimonial__right-item">
                                                        <p>
                                                            "Choosing FrogBID was a wise decision. Their expertise and
                                                            commitment to excellence
                                                            have significantly improved our digital presence and overall
                                                            success."<br/><br/>
                                                        </p>
                                                        <div className="testimonial-info">
                                                            <div className="d-flex align-items-center gap-4">
                                                                <img
                                                                    src="assets/images/testimonial/testimonial-image4.png"
                                                                    alt="image"/>
                                                                <div className="testimonial-admin">
                                                                    <h4>Mahmod Arif</h4>
                                                                    <span>Product Manager</span>
                                                                </div>
                                                            </div>
                                                            <div className="star d-flex gap-2">
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm></ContactForm>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default home