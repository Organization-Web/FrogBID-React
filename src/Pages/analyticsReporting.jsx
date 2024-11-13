import React from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import InnerHeader from "../Components/InnerHeader";
import ServiceDetails from "../Components/ServiceDetails";
import {Swiper, SwiperSlide} from "swiper/react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

function AnalyticsReporting() {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <InnerHeader title='Analytics & Reporting' desc='Analytics & Reporting'></InnerHeader>
                <section className="service-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <ServiceDetails></ServiceDetails>
                            </div>
                            <div className="col-lg-8">
                                <div className="service-details__right-item">
                                    <h2 className="mb-30 text-capitalize">Unlock Insights with Advanced Analytics</h2>
                                    <p className="mb-20">In the ever-evolving landscape of digital marketing, data is
                                        your most valuable
                                        asset. Are you harnessing the power of analytics to drive informed decisions and
                                        optimize
                                        your marketing efforts?</p>
                                    <p className="mb-60">Discover how our advanced analytics and reporting services at
                                        FrogBID
                                        can help you gain actionable insights, measure performance, and maximize ROI
                                        across all your
                                        marketing channels.</p>
                                    <div className="image mb-60">
                                        <img src="assets/images/portfolio/6-analytics/3.jpg" alt="image"/>
                                    </div>
                                    <h3 className="mb-20">Analytics:</h3>
                                    <ul className="list-text">
                                        <li className="mb-20">Data Collection: Gathering data from various sources,
                                            including website
                                            analytics platforms (e.g., Google Analytics), social media insights, email
                                            marketing
                                            software, and advertising platforms (e.g., Google Ads, Facebook Ads).
                                        </li>
                                        <li className="mb-20">Key Metrics: Identifying key performance indicators (KPIs)
                                            relevant to the
                                            specific goals of the marketing campaign, such as website traffic,
                                            engagement metrics
                                            (e.g., likes, shares, comments), conversion rates, and return on investment
                                            (ROI).
                                        </li>
                                        <li className="mb-20">Data Analysis: Analyzing collected data to uncover trends,
                                            patterns, and
                                            insights that can inform strategic decisions and optimization efforts. This
                                            may involve
                                            segmenting data by demographics, geographic location, device type, or other
                                            variables to
                                            gain deeper insights into audience behavior.
                                        </li>
                                        <li className="mb-20">Performance Attribution: Determining the contribution of
                                            each marketing
                                            channel or campaign to overall performance and understanding the customer
                                            journey from
                                            awareness to conversion.
                                        </li>
                                        <li className="mb-20">Goal Tracking: Setting up and tracking progress towards
                                            predefined goals,
                                            such as website conversions (e.g., form submissions, purchases), lead
                                            generation, or
                                            revenue targets.
                                        </li>
                                    </ul>
                                    <h3 className="mb-20">Reporting:</h3>
                                    <ul>
                                        <li className="mb-20">Report Creation: Compiling data and insights into
                                            comprehensive
                                            reports that provide a clear overview of campaign performance, trends,
                                            successes,
                                            and areas for improvement.
                                        </li>
                                        <li className="mb-20">Visualization: Presenting data in visually appealing and
                                            easy-to-understand formats, such as charts, graphs, and dashboards, to
                                            facilitate
                                            comprehension and decision-making.
                                        </li>
                                        <li className="mb-20">Customization: Tailoring reports to the specific needs and
                                            preferences
                                            of stakeholders, whether it's senior management, clients, or internal teams,
                                            by
                                            focusing on relevant metrics and insights.
                                        </li>
                                        <li className="mb-20">Interpretation: Providing context and interpretation for
                                            the data
                                            presented in the reports, highlighting key findings, trends, and actionable
                                            recommendations for optimization.
                                        </li>
                                        <li className="mb-20">Regularity: Delivering reports on a regular basis (e.g.,
                                            weekly,
                                            monthly, quarterly) to track progress over time, evaluate the impact of
                                            changes and
                                            initiatives, and ensure accountability.
                                        </li>
                                    </ul>
                                    <h3 className="mb-20">Transforming Data into Actionable Insights</h3>
                                    <p className="mb-25">Here's how we leverage analytics to empower your business:</p>
                                    <ul className="list-text">
                                        <li className="mb-20">Implementing robust tracking and measurement frameworks to
                                            capture
                                            valuable data from all touchpoints.
                                        </li>
                                        <li className="mb-20">Analyzing key metrics and KPIs to identify trends,
                                            patterns, and
                                            opportunities for optimization.
                                        </li>
                                        <li className="mb-20">Creating customized dashboards and reports that provide
                                            real-time
                                            visibility into campaign performance and ROI.
                                        </li>
                                        <li className="mb-25">Utilizing predictive analytics and machine learning
                                            algorithms to forecast
                                            outcomes and drive proactive decision-making.
                                        </li>
                                    </ul>
                                    <p className="mb-30">With our analytics solutions, you'll gain a deeper
                                        understanding of your
                                        audience, their behavior, and their preferences, enabling you to tailor your
                                        marketing
                                        strategies for maximum impact.</p>
                                    <h3 className="mb-20">Our Approach to Analytics and Reporting</h3>
                                    <p>At FrogBID, we take a strategic approach to analytics and reporting, focusing
                                        on:</p>
                                    <div className="service-details__icon pt-40 pb-40 bor-top bor-bottom mt-60 mb-60">
                                        <div className="row g-4">
                                            <div className="col-md-4">
                                                <div className="item">
                                                    <div className="icon icon-one">
                                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12.25 10C12.25 10.414 11.914 10.75 11.5 10.75H5.5C5.086 10.75 4.75 10.414 4.75 10C4.75 9.586 5.086 9.25 5.5 9.25H11.5C11.914 9.25 12.25 9.586 12.25 10ZM5.5 6.75H8.5C8.914 6.75 9.25 6.414 9.25 6C9.25 5.586 8.914 5.25 8.5 5.25H5.5C5.086 5.25 4.75 5.586 4.75 6C4.75 6.414 5.086 6.75 5.5 6.75ZM11.5 13.25H5.5C5.086 13.25 4.75 13.586 4.75 14C4.75 14.414 5.086 14.75 5.5 14.75H11.5C11.914 14.75 12.25 14.414 12.25 14C12.25 13.586 11.914 13.25 11.5 13.25ZM20.25 9.5V17C20.25 18.517 19.017 19.75 17.5 19.75H4.5C2.082 19.75 0.75 18.418 0.75 16V4C0.75 1.582 2.082 0.25 4.5 0.25H12.5C14.918 0.25 16.25 1.582 16.25 4V7.25H18C19.24 7.25 20.25 8.259 20.25 9.5ZM15.051 18.25C14.859 17.875 14.75 17.45 14.75 17V4C14.75 2.423 14.077 1.75 12.5 1.75H4.5C2.923 1.75 2.25 2.423 2.25 4V16C2.25 17.577 2.923 18.25 4.5 18.25H15.051ZM18.75 9.5C18.75 9.086 18.413 8.75 18 8.75H16.25V17C16.25 17.689 16.811 18.25 17.5 18.25C18.189 18.25 18.75 17.689 18.75 17V9.5Z"
                                                                fill="#0A83EC"/>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-1 mt-20">Collect Doc</h5>
                                                    <p>We collect require documents <br/> and send for check</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="item">
                                                    <div className="icon icon-two">
                                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M19.4261 1.07245C18.7241 0.370445 17.73 0.094446 16.764 0.335446L3.65123 3.61346C1.90323 4.05046 0.737108 5.55444 0.750108 7.35644C0.763108 9.15844 1.94923 10.6454 3.70323 11.0584L8.34923 12.1515L9.44225 16.7964C9.85525 18.5504 11.3422 19.7364 13.1442 19.7494C13.1532 19.7494 13.1632 19.7494 13.1722 19.7494C14.9612 19.7494 16.4511 18.5864 16.8861 16.8484L20.1642 3.73544C20.4042 2.77044 20.1291 1.77545 19.4261 1.07245ZM18.7081 3.37146L15.43 16.4844C15.101 17.7974 14.0402 18.2574 13.1532 18.2494C12.3082 18.2434 11.2122 17.7695 10.9022 16.4535L9.7982 11.7624L14.0292 7.53045C14.3222 7.23745 14.3222 6.76245 14.0292 6.46945C13.7362 6.17645 13.2611 6.17645 12.9681 6.46945L8.73619 10.7014L4.04503 9.59744C2.72803 9.28744 2.25415 8.19046 2.24815 7.34546C2.24215 6.50046 2.70105 5.39645 4.01305 5.06845L17.1261 1.79043C17.2331 1.76343 17.3411 1.75045 17.4471 1.75045C17.7871 1.75045 18.1151 1.88445 18.3641 2.13345C18.6911 2.45945 18.8201 2.92246 18.7081 3.37146Z"
                                                                fill="#433EED"/>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-1 mt-20">Check & Finalize</h5>
                                                    <p>We check the document and <br/> send for final approval</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="item">
                                                    <div className="icon icon-three">
                                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.8789 19.75H7.12109C6.52909 19.75 5.94903 19.5101 5.53003 19.0911L1.40894 14.97C0.989936 14.551 0.75 13.9709 0.75 13.3789V6.62109C0.75 6.02909 0.989936 5.44903 1.40894 5.03003L5.53003 0.908936C5.94903 0.489936 6.52909 0.25 7.12109 0.25H13.8789C14.4709 0.25 15.051 0.489936 15.47 0.908936L19.5911 5.03003C20.0101 5.44903 20.25 6.02909 20.25 6.62109V13.3789C20.25 13.9709 20.0101 14.551 19.5911 14.97L15.47 19.0911C15.051 19.5101 14.4709 19.75 13.8789 19.75ZM7.12109 1.75C6.92409 1.75 6.73006 1.82997 6.59106 1.96997L2.46997 6.09106C2.32997 6.23106 2.25 6.42409 2.25 6.62109V13.3789C2.25 13.5759 2.32997 13.7699 2.46997 13.9089L6.59106 18.03C6.73106 18.17 6.92409 18.25 7.12109 18.25H13.8789C14.0759 18.25 14.2699 18.17 14.4089 18.03L18.53 13.9089C18.67 13.7689 18.75 13.5759 18.75 13.3789V6.62109C18.75 6.42409 18.67 6.23006 18.53 6.09106L14.4089 1.96997C14.2689 1.82997 14.0759 1.75 13.8789 1.75H7.12109ZM10.03 12.53L14.03 8.53003C14.323 8.23703 14.323 7.76199 14.03 7.46899C13.737 7.17599 13.262 7.17599 12.969 7.46899L9.49902 10.939L8.02905 9.46899C7.73605 9.17599 7.26102 9.17599 6.96802 9.46899C6.67502 9.76199 6.67502 10.237 6.96802 10.53L8.96802 12.53C9.11402 12.676 9.30605 12.75 9.49805 12.75C9.69005 12.75 9.88403 12.677 10.03 12.53Z"
                                                                fill="#00C881"/>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-1 mt-20">Approve</h5>
                                                    <p>After approve you’ll ready to use <br/> your software</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-details__testimonial bg-image mb-60"
                                         style={{backgroundImage:'url("assets/images/service/service-details-bg.jpg")'}}>
                                        <p>“I am genuinely thrilled by the current fusion of technologies
                                            reshaping digital
                                            marketing. The integration of data
                                            analytics, AI and automation is revolutionizing our approach.”</p>
                                        <div className="d-flex align-items-center justify-content-between mt-30">
                                            <div className="info d-flex align-items-center gap-3">
                                                <img src="assets/images/service/service-details-user.png" alt="image"/>
                                                <div>
                                                    <h6 className="text-white">Willamson Hussy</h6>
                                                    <span className="para-light-color">CEO of Kingtech</span>
                                                </div>
                                            </div>
                                            <svg width="72" height="62" viewBox="0 0 72 62" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M54.862 60.8645C52.6964 61.4059 50.452 61.4846 48.2287 61.4635C47.5453 61.4495 46.838 61.531 46.177 61.3046C45.1153 60.9207 44.3011 59.8618 44.3152 58.7157C44.3067 56.8342 44.3025 54.954 44.318 53.0725C44.3278 51.6789 45.5681 50.4259 46.9617 50.3964C48.8461 50.3345 50.767 50.53 52.6134 50.0504C55.1827 49.4289 57.4228 47.7639 58.9486 45.6306C60.1608 43.9585 60.8245 41.9195 60.9033 39.8607C60.9258 39.0114 60.9652 38.1578 60.8695 37.3112C60.6375 35.3987 58.8769 33.804 56.9461 33.7829C53.5528 33.7407 50.1581 33.7956 46.7662 33.7562C44.5992 33.7281 42.4884 32.7564 41.0259 31.1645C39.5578 29.6739 38.7619 27.5912 38.7731 25.5057C38.7619 20.3532 38.7717 15.2007 38.7689 10.0482C38.7492 8.7151 38.7633 7.35104 39.2189 6.07979C40.0978 3.55276 42.2817 1.49541 44.8748 0.817602C46.3373 0.422445 47.8631 0.564474 49.358 0.536352C54.1814 0.540572 59.0048 0.527919 63.8283 0.543388C66.022 0.54198 68.1848 1.47573 69.6825 3.07745C71.1295 4.52307 71.948 6.5326 72 8.57167L72 39.5106C71.9241 40.4935 71.9395 41.4864 71.7511 42.4581C71.2758 45.9456 69.8695 49.2798 67.8586 52.1556C64.7944 56.5318 60.0441 59.634 54.862 60.8645Z"
                                                    fill="white" fill-opacity="0.75"/>
                                                <path
                                                    d="M16.1742 60.8439C13.972 61.4106 11.6826 61.4837 9.41854 61.464C8.73511 61.45 8.02495 61.5315 7.36823 61.2925C6.31495 60.8945 5.52885 59.8356 5.54151 58.6951C5.53448 56.829 5.52885 54.9629 5.54432 53.0968C5.54854 51.7047 6.76917 50.4418 8.16136 50.3982C9.70964 50.3392 11.2692 50.4742 12.8076 50.2534C17.6423 49.5868 21.7246 45.2922 22.0931 40.4181C22.1564 39.3423 22.214 38.2553 22.0748 37.1851C21.7907 35.3064 20.0273 33.7848 18.126 33.7806C14.7356 33.744 11.3423 33.7961 7.95182 33.7553C5.72432 33.7187 3.57276 32.6725 2.10745 31.0061C0.78276 29.5815 0.0458861 27.6662 -0.000519489 25.7256L-0.000517989 8.57356C0.045888 6.46418 0.930421 4.397 2.4562 2.93731C3.97214 1.382 6.12933 0.517156 8.29777 0.541063C13.9382 0.539656 19.5801 0.524188 25.222 0.549503C28.5773 0.569191 31.6921 2.93591 32.7806 6.07888C33.1293 7.08154 33.2404 8.15028 33.232 9.20778C33.2278 19.2358 33.2376 29.2637 33.2264 39.2931C33.2151 43.3093 32.0971 47.3115 30.0018 50.7386C27.0332 55.8137 21.8709 59.4784 16.1742 60.8439Z"
                                                    fill="white" fill-opacity="0.75"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-capitalize mb-20">Driving Data-Driven Decision-Making</h3>
                                    <p className="mb-20">We believe that every marketing initiative should be backed by
                                        data-driven
                                        insights. By leveraging advanced analytics, we help you make informed decisions
                                        that drive
                                        results and fuel business growth.</p>
                                    <p className="mb-20">From campaign attribution and audience segmentation to
                                        conversion optimization
                                        and ROI analysis, our analytics solutions empower you to optimize every aspect
                                        of your
                                        marketing strategy.</p>
                                    <p className="mb-20">Partner with us at FrogBID to unlock the full potential of your
                                        data
                                        and take your marketing to new heights. Contact us today to learn more about our
                                        analytics
                                        and reporting services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="brand-area pt-70 pb-70">
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
                <ContactForm></ContactForm>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default AnalyticsReporting