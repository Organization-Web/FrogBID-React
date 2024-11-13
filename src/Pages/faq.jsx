import React from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Faq() {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <InnerHeader title='FAQ'
                             desc='We will help a client to develop the products they have with high quality.'></InnerHeader>
                <section className="faq-two-area pt-120 pb-120 inner-sub-bg">
                    <div className="container">
                        <div className="section-header-two text-center mb-80">
                            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">FAQ</h5>
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">Top question
                                <span>Answered</span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                                Visit out <a href="contact" className="primary-color fw-500 text-decoration-underline">Help
                                Center</a>
                                for more informations
                            </p>
                        </div>
                        <div className="faq-two__wrp">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="00ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="false"
                                                aria-controls="collapseOne">
                                            What services does FrogBID offer?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse"
                                         aria-labelledby="headingOne"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>FrogBID provides a comprehensive range of digital marketing services
                                                including SEO, PPC, Social Media Marketing, Content Writing, Email
                                                Marketing,
                                                Analytics and Reporting, Website Design and Development, Graphic Design,
                                                Online
                                                Reputation Management, Advertising, Lead Generation, and Web
                                                Research.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            How can SEO benefit my business?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwo"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>SEO (Search Engine Optimization) can benefit your business by improving
                                                your
                                                website's visibility on search engines, driving organic traffic,
                                                increasing brand
                                                credibility, and ultimately generating more leads and conversions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                            What is PPC advertising and how can it help my business?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingThree"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>PPC (Pay-Per-Click) advertising is a model where advertisers pay a fee
                                                each time
                                                their ad is clicked. It can help your business by providing immediate
                                                visibility on
                                                search engines, targeting specific demographics, and offering measurable
                                                results,
                                                ensuring a high return on investment (ROI).</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                            What platforms do you use for Social Media Marketing?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingFour"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We utilize popular social media platforms such as Facebook, Instagram,
                                                Twitter,
                                                LinkedIn, and others to implement effective Social Media Marketing
                                                strategies
                                                tailored to your business objectives.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseFive">
                                            How does Content Writing contribute to digital marketing strategies?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingFive"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Content Writing plays a crucial role in digital marketing by creating
                                                engaging,
                                                informative, and relevant content that attracts and retains the target
                                                audience,
                                                improves search engine rankings, and establishes your brand as an
                                                authority in your
                                                industry.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="1000ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix" aria-expanded="false"
                                                aria-controls="collapseSix">
                                            Can Email Marketing effectively reach my target audience?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="headingSix"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, Email Marketing is a powerful tool for reaching your target audience
                                                directly,
                                                nurturing leads, promoting products or services, and driving conversions
                                                through
                                                personalized and targeted email campaigns.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="1200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven" aria-expanded="false"
                                                aria-controls="collapseSeven">
                                            What type of Analytics and Reporting do you provide?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                         aria-labelledby="headingSeven"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We provide comprehensive Analytics and Reporting services, including
                                                tracking website
                                                traffic, user behavior, campaign performance, and key performance
                                                indicators (KPIs),
                                                to measure the effectiveness of your digital marketing efforts and make
                                                data-driven
                                                decisions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="1400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight" aria-expanded="false"
                                                aria-controls="collapseEight">
                                            How can Website Design and Development improve my online presence?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                         aria-labelledby="headingEight"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Professional Website Design and Development enhance your online presence
                                                by creating
                                                a visually appealing, user-friendly, and responsive website that
                                                reflects your brand
                                                identity, engages visitors, and converts them into customers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="1600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNine" aria-expanded="false"
                                                aria-controls="collapseNine">
                                            Do you offer Graphic Design services for branding and marketing materials?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse"
                                         aria-labelledby="headingNine"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, we provide Graphic Design services to create visually stunning
                                                branding and
                                                marketing materials such as logos, brochures, banners, social media
                                                graphics, and
                                                more, ensuring consistency and professionalism across all channels.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="1800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTen" aria-expanded="false"
                                                aria-controls="collapseTen">
                                            How does Online Reputation Management work?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                         aria-labelledby="headingTen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Online Reputation Management involves monitoring, managing, and improving
                                                your
                                                brand's reputation online by addressing customer feedback, managing
                                                online reviews,
                                                mitigating negative publicity, and building a positive online
                                                presence.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="2000ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEleven" aria-expanded="false"
                                                aria-controls="collapseEleven">
                                            What types of advertising strategies do you employ?
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse"
                                         aria-labelledby="headingEleven"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We employ various advertising strategies including display advertising,
                                                search engine
                                                advertising, social media advertising, remarketing, and more, tailored
                                                to your
                                                business goals and target audience.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="2200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwelve">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwelve" aria-expanded="false"
                                                aria-controls="collapseTwelve">
                                            How can Lead Generation services help my business grow?
                                        </button>
                                    </h2>
                                    <div id="collapseTwelve" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwelve"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lead Generation services help your business grow by identifying and
                                                attracting
                                                potential customers, nurturing them through the sales funnel, and
                                                converting them
                                                into qualified leads, ultimately driving revenue and business
                                                growth.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="2400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingThirteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThirteen" aria-expanded="false"
                                                aria-controls="collapseThirteen">
                                            What kind of Web Research services do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapseThirteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingThirteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We offer Web Research services including market research, competitor
                                                analysis,
                                                industry trends analysis, data collection, and data validation, to
                                                provide valuable
                                                insights and inform strategic decision-making for your business.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="2600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingFourteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFourteen" aria-expanded="false"
                                                aria-controls="collapseFourteen">
                                            How do you ensure successful implementation of SEO strategies?
                                        </button>
                                    </h2>
                                    <div id="collapseFourteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingFourteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We ensure successful implementation of SEO strategies through
                                                comprehensive keyword
                                                research, on-page optimization, technical SEO audits, quality content
                                                creation, link
                                                building, and continuous monitoring and optimization to achieve and
                                                maintain high
                                                search engine rankings.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="2800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingFifteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFifteen" aria-expanded="false"
                                                aria-controls="collapseFifteen">
                                            What is the process for setting up a PPC campaign with FrogBID?
                                        </button>
                                    </h2>
                                    <div id="collapseFifteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingFifteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>The process for setting up a PPC campaign involves understanding your
                                                business
                                                objectives, conducting keyword research, creating compelling ad copy,
                                                setting up ad
                                                campaigns, defining targeting parameters, optimizing landing pages, and
                                                ongoing
                                                monitoring and optimization to maximize ROI.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="3000ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingSixteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSixteen" aria-expanded="false"
                                                aria-controls="collapseSixteen">
                                            How do you tailor Social Media Marketing campaigns to suit my business?
                                        </button>
                                    </h2>
                                    <div id="collapseSixteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingSixteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We tailor Social Media Marketing campaigns to suit your business by
                                                identifying your
                                                target audience, creating engaging content that resonates with them,
                                                selecting the
                                                most relevant social media platforms, defining campaign objectives, and
                                                continuous
                                                monitoring and optimization to achieve desired results.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="3200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingSeventeen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeventeen" aria-expanded="false"
                                                aria-controls="collapseSeventeen">
                                            Can you provide examples of successful Content Writing projects you've
                                            completed?
                                        </button>
                                    </h2>
                                    <div id="collapseSeventeen" className="accordion-collapse collapse"
                                         aria-labelledby="headingSeventeen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, we can provide examples of successful Content Writing projects
                                                including blog
                                                posts, articles, website content, social media posts, and other content
                                                pieces that
                                                have effectively engaged audiences, increased website traffic, and
                                                generated leads
                                                or conversions for our clients.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="3400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingEighteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEighteen" aria-expanded="false"
                                                aria-controls="collapseEighteen">
                                            How do you segment email lists for Email Marketing campaigns?
                                        </button>
                                    </h2>
                                    <div id="collapseEighteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingEighteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We segment email lists for Email Marketing campaigns based on
                                                demographics, past
                                                purchase behavior, engagement level, and other relevant criteria to
                                                ensure that the
                                                right message reaches the right audience at the right time, resulting in
                                                higher open
                                                rates and conversions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="3600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingNineteen">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNineteen" aria-expanded="false"
                                                aria-controls="collapseNineteen">
                                            What key metrics do you focus on in your Analytics and Reporting?
                                        </button>
                                    </h2>
                                    <div id="collapseNineteen" className="accordion-collapse collapse"
                                         aria-labelledby="headingNineteen"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We focus on key metrics such as website traffic, conversion rates,
                                                click-through
                                                rates, bounce rates, cost per acquisition (CPA), return on ad spend
                                                (ROAS), and
                                                other relevant KPIs to measure the effectiveness of digital marketing
                                                campaigns and
                                                optimize performance.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="3800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwenty">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwenty" aria-expanded="false"
                                                aria-controls="collapseTwenty">
                                            Can you provide examples of websites you've designed and developed?
                                        </button>
                                    </h2>
                                    <div id="collapseTwenty" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwenty"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, we can provide examples of websites we've designed and developed for
                                                our clients
                                                across various industries, showcasing our expertise in creating visually
                                                appealing,
                                                user-friendly, and high-performing websites that drive results.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="4000ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyOne">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyOne" aria-expanded="false"
                                                aria-controls="collapseTwentyOne">
                                            How do you manage and respond to negative online reviews in Online
                                            Reputation
                                            Management?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyOne" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyOne"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We manage and respond to negative online reviews by promptly addressing
                                                customer
                                                concerns, apologizing for any shortcomings, offering solutions or
                                                compensations, and
                                                demonstrating a commitment to customer satisfaction, thereby mitigating
                                                the impact
                                                of negative feedback on your brand reputation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="4200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyTwo">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyTwo" aria-expanded="false"
                                                aria-controls="collapseTwentyTwo">
                                            What targeting options do you offer for advertising campaigns?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyTwo" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyTwo"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We offer various targeting options for advertising campaigns including
                                                demographic
                                                targeting, geographic targeting, interest targeting, behavior targeting,
                                                retargeting, and lookalike audience targeting, to ensure that your ads
                                                reach the
                                                most relevant audience segments and maximize ROI.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="4400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyThree">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyThree" aria-expanded="false"
                                                aria-controls="collapseTwentyThree">
                                            How do you verify and validate leads generated through your services?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyThree" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyThree"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We verify and validate leads generated through our services by
                                                implementing lead
                                                scoring criteria, conducting follow-up communication to qualify leads,
                                                tracking lead
                                                behavior and engagement, and integrating with CRM systems for lead
                                                management and
                                                tracking, ensuring that only high-quality leads are passed on to your
                                                sales
                                                team.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="4600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyFour">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyFour" aria-expanded="false"
                                                aria-controls="collapseTwentyFour">
                                            What sources do you use for Web Research?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyFour" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyFour"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We use a variety of sources for Web Research including online databases,
                                                industry
                                                reports, market research studies, competitor websites, social media
                                                platforms,
                                                online forums, and other reliable sources of information to gather
                                                relevant data and
                                                insights for your business.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="4800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyFive">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyFive" aria-expanded="false"
                                                aria-controls="collapseTwentyFive">
                                            How do you incorporate SEO best practices into website design and
                                            development?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyFive" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyFive"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We incorporate SEO best practices into website design and development by
                                                optimizing
                                                website structure and navigation, implementing proper URL structures,
                                                utilizing
                                                keyword-rich content and meta tags, optimizing images and multimedia
                                                elements,
                                                ensuring mobile responsiveness and fast page load times, and adhering to
                                                search
                                                engine guidelines and algorithms.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="5000ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentySix">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentySix" aria-expanded="false"
                                                aria-controls="collapseTwentySix">
                                            What social media platforms do you recommend for specific industries?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentySix" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentySix"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We recommend social media platforms based on your industry, target
                                                audience
                                                demographics, and business objectives. For example, LinkedIn is ideal
                                                for B2B
                                                businesses targeting professionals, while Instagram may be more suitable
                                                for
                                                visually-oriented industries such as fashion or food.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="5200ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentySeven">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentySeven" aria-expanded="false"
                                                aria-controls="collapseTwentySeven">
                                            Can you help with crisis communication in case of a reputation management
                                            issue?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentySeven" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentySeven"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, we can help with crisis communication in case of a reputation
                                                management issue
                                                by developing a crisis communication plan, monitoring online
                                                conversations and
                                                sentiment, crafting timely and appropriate responses, and implementing
                                                strategies to
                                                mitigate the impact of negative publicity on your brand reputation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="5400ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyEight">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyEight" aria-expanded="false"
                                                aria-controls="collapseTwentyEight">
                                            How do you ensure compliance with advertising regulations?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyEight" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyEight"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We ensure compliance with advertising regulations by staying updated with
                                                relevant
                                                laws and regulations governing advertising practices, obtaining
                                                necessary
                                                permissions and licenses, ensuring transparency and truthfulness in
                                                advertising
                                                content, and adhering to industry standards and best practices.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg mb-4 border-none"
                                     data-wow-delay="5600ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingTwentyNine">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwentyNine" aria-expanded="false"
                                                aria-controls="collapseTwentyNine">
                                            What strategies do you employ for lead nurturing?
                                        </button>
                                    </h2>
                                    <div id="collapseTwentyNine" className="accordion-collapse collapse"
                                         aria-labelledby="headingTwentyNine"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We employ lead nurturing strategies such as personalized email drip
                                                campaigns,
                                                targeted content delivery, retargeting ads, social media engagement, and
                                                automated
                                                workflows to nurture leads through the sales funnel, build
                                                relationships, and guide
                                                them towards conversion.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInDown sub-bg border-none"
                                     data-wow-delay="5800ms"
                                     data-wow-duration="1000ms">
                                    <h2 className="accordion-header" id="headingThirty">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThirty" aria-expanded="false"
                                                aria-controls="collapseThirty">
                                            How do you ensure the accuracy and reliability of the data collected during
                                            web
                                            research?
                                        </button>
                                    </h2>
                                    <div id="collapseThirty" className="accordion-collapse collapse"
                                         aria-labelledby="headingThirty"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We ensure the accuracy and reliability of the data collected during web
                                                research by
                                                cross-referencing information from multiple sources, verifying data
                                                integrity and
                                                credibility, conducting quality checks and validation processes, and
                                                leveraging
                                                advanced tools and technologies for data analysis and
                                                interpretation.</p>
                                        </div>
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

export default Faq