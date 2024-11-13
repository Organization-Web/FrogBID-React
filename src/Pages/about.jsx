import React from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import InnerHeader from "../Components/InnerHeader";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function About() {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <InnerHeader title='About Us'
                             desc='We will help a client to develop the products they have with high quality.'></InnerHeader>
                <section className="about-two-area pt-120">
                    <div className="container">
                        <div className="section-header-two mb-40">
                            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">About us</h5>
                            <p className="about-two__text wow fadeInUp" data-wow-delay="200ms"
                               data-wow-duration="1000ms">At
                                FrogBID, we understand the critical role that search engine
                                optimization plays in driving
                                online success for
                                businesses of all sizes.</p>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1000ms">
                                <div className="about-two__item">
                                    <h3 className="mb-10">Our Mission</h3>
                                    <p>Our goal is to boost your online visibility and engagement, drive
                                        organic <br/> traffic,
                                        and
                                        ultimately, maximize your digital
                                        success.</p>
                                    <a href="#0" className="explore-btn mt-20"><span>Learn More</span> <i
                                        className="fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="about-two__item">
                                    <h3 className="mb-10">Our Story</h3>
                                    <p>FrogBID was founded on the principle that every business, regardless of size or
                                        industry,
                                        deserves a tailored approach
                                        to marketing.</p>
                                    <a href="about" className="explore-btn mt-20"><span>Learn More</span> <i
                                        className="fa-regular fa-arrow-right"></i></a>
                                </div>
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
                <section className="service-area pb-120 inner-sub-bg">
                    <div className="container">
                        <div className="custom-row service__wrp">
                            <div className="service__item wow fadeInUp" data-wow-delay="00ms"
                                 data-wow-duration="1000ms">
                                <div className="service__icon mb-25">
                                    <img src="assets/images/icon/service-icon1.png" alt="icon"/>
                                </div>
                                <h3>Data-Driven Decision</h3>
                                <p>Harness the power of data with our analytics-driven approach. We analyze, interpret,
                                    and
                                    apply insights to refine and
                                    optimize your campaigns for maximum impact.</p>
                                <a href="" className="explore-btn mt-15"><span>Explore More</span> <i
                                    className="fa-regular fa-arrow-right"></i></a>
                            </div>
                            <div className="service__item wow fadeInUp" data-wow-delay="200ms"
                                 data-wow-duration="1000ms">
                                <div className="service__icon mb-25">
                                    <img src="assets/images/icon/service-icon2.png" alt="icon"/>
                                </div>
                                <h3>Multi-Channel Expertise</h3>
                                <p>Our team is well-versed in diverse digital channels, from social media and to SEO and
                                    paid
                                    advertising, providing you
                                    with a comprehensive online presence.</p>
                                <a href="" className="explore-btn mt-15"><span>Explore More</span> <i
                                    className="fa-regular fa-arrow-right"></i></a>
                            </div>
                            <div className="service__item wow fadeInUp" data-wow-delay="400ms"
                                 data-wow-duration="1000ms">
                                <div className="service__icon mb-25">
                                    <img src="assets/images/icon/service-icon3.png" alt="icon"/>
                                </div>
                                <h3>Social Media Mastery</h3>
                                <p>Leverage the full potential of social media. We develop and implement social media
                                    strategies
                                    to enhance brand
                                    visibility, and drive meaningful interactions.</p>
                                <a href="" className="explore-btn mt-15"><span>Explore More</span> <i
                                    className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
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

export default About