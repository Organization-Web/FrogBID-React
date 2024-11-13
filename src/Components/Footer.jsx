import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Footer() {

    const [email, setemail] = useState('');
    const newsLetter  = () => {
        if (email.length === 0) {
            alert("Email has left Blank!");
        } else {
            const url = 'https://frogbid.com/admin/api/newsletter.php';
            let fData = new FormData();
            fData.append('email', email);
            axios.post(url, fData)
                .then(response => {
                    alert(response.data);
                    // Reset form fields to empty after successful submission
                    setemail('');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network Error');
                });
        }
    }
    return (
        <div>
            <footer className="footer-area footer-bg bg-image" data-background="assets/images/bg/footer-bg.png">
                <div className="footer__main-wrp">
                    <div className="container">
                        <div className="footer__wrp pt-140 pb-90">
                            <div className="row g-4 justify-content-between">
                                <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="00ms"
                                     data-wow-duration="1000ms">
                                    <div className="footer__item">
                                        <a href="home" className="logo mb-20">
                                            <img src="assets/images/logo/logo-white.png" alt="image"/>
                                        </a>
                                        <p>
                                            Optimize your success with our ROI-driven digital marketing agency.
                                        </p>
                                        <div className="social-icon mt-20">
                                            <a href="https://www.facebook.com/frogbid"><i
                                                className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i
                                                className="fa-brands fa-instagram"></i></a>
                                            <a href="https://api.whatsapp.com/message/VBCGRP7FAFCOD1?autoload=1&app_absent=0">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                            <a href="https://join.skype.com/invite/whLjFofI5M1I">
                                                <i className="fa-brands fa-skype"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 wow fadeInUp" data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <div className="footer__item">
                                        <h4 className="title mb-20 text-white">Company</h4>
                                        <ul className="link">
                                            <li>
                                                <Link to="/About">About</Link>
                                            </li>
                                            <li>
                                                <Link to="">Services</Link>
                                            </li>
                                            <li>
                                                <Link to="/Faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/Portfolio">Portfolio</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-6 wow fadeInUp" data-wow-delay="400ms"
                                     data-wow-duration="1000ms">
                                    <div className="footer__item">
                                        <h4 className="title mb-20 text-white">Support</h4>
                                        <ul className="link">
                                            <li>
                                                <Link to="/Contact">Contact</Link>
                                            </li>
                                            <li>
                                                <a href="#">Book A Demo</a>
                                            </li>
                                            <li>
                                                <Link to="/Privacy-Policy">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="/T&C">Terms Conditions</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms"
                                     data-wow-duration="1000ms">
                                    <div className="footer__item">
                                        <h4 className="title mb-20 text-white">Join our Newsletter</h4>
                                        <div className="newsletter">
                                            <form>
                                                <input type="email" placeholder="Enter your email" name="email" value={email}
                                                       onChange={(e) => setemail(e.target.value)}
                                                       required/>
                                                <input type="hidden" name="page" value="home" required/>
                                                <button type="button" onClick={newsLetter}>
                                                    <i className="fa-regular fa-circle-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                        <p className="mt-4">
                                            We will send you weekly updates for your better Product management.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copytext">
                    <p className="wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1000ms">
                        &copy; All Copyright 2024 by
                        <a href="#0" className="primary-hover">FrogBID.</a>
                    </p>
                </div>
            </footer>
            {/*<button className="btn-backToTop">
                <i className="fa-solid fa-chevron-up"></i>
            </button>*/}
        </div>

    )
}

export default Footer