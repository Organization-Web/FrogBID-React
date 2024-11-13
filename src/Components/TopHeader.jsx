import React from "react";

function TopHeader() {
    return (
        <div>
            <div className="header-top d-none d-lg-block">
                <div className="container">
                    <div className="header-top-wrp">
                        <ul className="info">
                            <li>
                                <i className="fa-solid fa-paper-plane"></i>
                                <a href="mailto:contact@frogbid.com">contact@frogbid.com</a>
                            </li>
                            <li className="bor-left ms-4 ps-4">
                                <i className="fa-solid fa-location-dot"></i>
                                <a href="#0">Ground Floor, Kabir Monjil, 16 KDA Ave, Khulna 9100</a>
                            </li>
                        </ul>
                        <ul className="link-info">
                            <li className="bor-right">
                                <a href="https://www.facebook.com/frogbid"><i
                                    className="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li className="bor-right">
                                <a href="https://www.instagram.com/frogbid.khl/"><i
                                    className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li className="bor-right">
                                <a href="https://api.whatsapp.com/message/VBCGRP7FAFCOD1?autoload=1&app_absent=0"><i
                                    className="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li>
                                <a href="https://join.skype.com/invite/whLjFofI5M1I"><i
                                    className="fa-brands fa-skype"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader