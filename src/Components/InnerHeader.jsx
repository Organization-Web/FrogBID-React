import React from "react";

function InnerHeader(props) {
    return (
        <div>
            <section className="banner-inner-area pt-160 pb-80 bg-image"
                     data-background="assets/images/bg/banner-inner.png">
                <div className="container">
                    <div className="banner-inner__content">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms"><a
                            href="/">Home</a> / <span>{props.title}</span></h5>
                        <h2 className="text-white wow fadeInUp" data-wow-delay="200ms"
                            data-wow-duration="1000ms">{props.title}</h2>
                        <p className="para-light-color mt-20 wow fadeInUp" data-wow-delay="400ms"
                           data-wow-duration="1000ms">{props.desc}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InnerHeader