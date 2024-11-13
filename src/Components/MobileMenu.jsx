import React from "react";

function MobileMenu() {
    return (
        <div>
            <div id="targetElement" className="sidebar-area sidebar__hide">
                <div className="sidebar__overlay"></div>
                <a href="home" className="logo mb-40">
                    <img src="assets/images/logo/logo-white.png" alt="logo"/>
                </a>
                <div className="mobile-menu overflow-hidden"></div>
                <ul className="info pt-40">
                    <li>
                        <i className="fa-solid primary-color fa-location-dot"></i>
                        <a href="mailto:contact@frogbid.com">contact@frogbid.com</a>
                    </li>
                    <li className="py-2">
                        <i className="fa-solid primary-color fa-phone-volume"></i>
                        <a href="tel:+16466311557">+1 (646) 631-1557</a>
                    </li>
                    <li>
                        <i className="fa-solid primary-color fa-paper-plane"></i>
                        <a href="mailto:contact@frogbid.com">contact@frogbid.com</a>
                    </li>
                </ul>
                <div className="social-icon mt-20">
                    <a href="https://www.facebook.com/frogbid"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/frogbid.khl/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/message/VBCGRP7FAFCOD1?autoload=1&app_absent=0"><i
                        className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://join.skype.com/invite/whLjFofI5M1I"><i className="fa-brands fa-skype"></i></a>
                </div>
                <button id="closeButton" className="text-white">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )

}

export default MobileMenu