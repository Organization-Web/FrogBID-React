import React, {useState} from "react";
import axios from "axios";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import MobileMenu from "../Components/MobileMenu";
import InnerHeader from "../Components/InnerHeader";
import Footer from "../Components/Footer";

function Contact() {
    const [companyName, setcompanyName] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');
    const handleSubmit = () => {
        if (companyName.length === 0) {
            alert("Company Name has left Blank!");
        } else if (fname.length === 0) {
            alert("First Name has left Blank!");
        } else if (lname.length === 0) {
            alert("Last Name has left Blank!");
        } else if (email.length === 0) {
            alert("Email has left Blank!");
        } else if (phone.length === 0) {
            alert("Phone Number has left Blank!");
        } else if (message.length === 0) {
            alert("Message has left Blank!");
        } else {
            const url = 'https://frogbid.com/admin/api/contact.php';
            let fData = new FormData();
            fData.append('companyName', companyName);
            fData.append('fname', fname);
            fData.append('lname', lname);
            fData.append('email', email);
            fData.append('phone', phone);
            fData.append('message', message);
            axios.post(url, fData)
                .then(response => {
                    alert(response.data);

                    // Reset form fields to empty after successful submission
                    setcompanyName('');
                    setfname('');
                    setlname('');
                    setemail('');
                    setphone('');
                    setmessage('');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network Error');
                });
        }
    }
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <MobileMenu></MobileMenu>
            <main>
                <InnerHeader title='Contact'
                             desc='We will help a client to develop the products they have with high quality.'></InnerHeader>
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="section-header-two mb-90 text-center">
                            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1000ms">ContactForm
                                us</h5>
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1000ms">We’d love to
                                hear from
                                <span>you</span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">Your feedback
                                is
                                invaluable to us, and we eagerly await your thoughts <br/> and insights. Chat to our
                                friendly team.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="contact__item">
                                    <div className="icon">
                                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16 16.75H4C1.582 16.75 0.25 15.418 0.25 13V4C0.25 1.582 1.582 0.25 4 0.25H16C18.418 0.25 19.75 1.582 19.75 4V13C19.75 15.418 18.418 16.75 16 16.75ZM4 1.75C2.423 1.75 1.75 2.423 1.75 4V13C1.75 14.577 2.423 15.25 4 15.25H16C17.577 15.25 18.25 14.577 18.25 13V4C18.25 2.423 17.577 1.75 16 1.75H4ZM11.0291 9.179L15.9409 5.60699C16.2759 5.36399 16.35 4.89401 16.106 4.55901C15.863 4.22501 15.3951 4.149 15.0581 4.394L10.146 7.966C10.058 8.03 9.94103 8.03 9.85303 7.966L4.94092 4.394C4.60292 4.149 4.13607 4.22601 3.89307 4.55901C3.64907 4.89401 3.72311 5.36299 4.05811 5.60699L8.96997 9.17999C9.27797 9.40399 9.63902 9.515 9.99902 9.515C10.359 9.515 10.7221 9.403 11.0291 9.179Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <h4>Chat to support</h4>
                                    <p>Speak to our friendly team.</p>
                                    <a href="mailto:contact@frogbid.com">contact@frogbid.com</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact__item">
                                    <div className="icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.92 1.00869C18.4 0.687689 17.764 0.658541 17.217 0.931541L13.79 2.64468C13.643 2.71768 13.468 2.72758 13.311 2.66958L7.21304 0.382713C6.66804 0.177713 6.05602 0.209603 5.53702 0.470603L1.76904 2.35464C0.831043 2.82364 0.249023 3.7666 0.249023 4.8146V17.5026C0.249023 18.1136 0.559041 18.6696 1.07904 18.9906C1.59904 19.3116 2.23504 19.3408 2.78204 19.0678L6.20905 17.3546C6.35605 17.2816 6.53102 17.2717 6.68802 17.3297L12.786 19.6166C13.023 19.7056 13.273 19.7497 13.523 19.7497C13.545 19.7497 13.566 19.7426 13.588 19.7426C13.593 19.7426 13.596 19.7448 13.601 19.7448C13.618 19.7448 13.632 19.7368 13.648 19.7348C13.929 19.7178 14.207 19.6557 14.463 19.5277L18.231 17.6437C19.169 17.1747 19.751 16.2317 19.751 15.1837V2.49575C19.75 1.88575 19.44 1.32969 18.92 1.00869ZM2.11203 17.7257C2.00403 17.7787 1.91302 17.7427 1.86902 17.7147C1.82502 17.6877 1.75003 17.6236 1.75003 17.5026V4.8146C1.75003 4.3376 2.01504 3.90968 2.44104 3.69668L5.65002 2.09267V15.9726C5.61302 15.9886 5.57402 15.9946 5.53802 16.0136L2.11203 17.7257ZM7.21402 15.9247C7.19302 15.9167 7.17102 15.9146 7.15002 15.9066V1.96059L12.786 4.07363C12.807 4.08163 12.829 4.08372 12.85 4.09072V18.0377L7.21402 15.9247ZM18.25 15.1847C18.25 15.6617 17.985 16.0896 17.559 16.3026L14.35 17.9066V4.02871C14.387 4.01271 14.426 4.00472 14.462 3.98672L17.888 2.27358C17.995 2.21958 18.087 2.25657 18.131 2.28457C18.175 2.31257 18.25 2.37573 18.25 2.49673V15.1847Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <h4>Visit us</h4>
                                    <p>Visit our office HQ.</p>
                                    <a href="https://maps.app.goo.gl/JRHCLH7aiXyxvKyS6">Ground Floor, Kabir
                                        Monjil, <br/>
                                        16 KDA Ave, Khulna 9100</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact__item">
                                    <div className="icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.5518 19.7521C14.0928 19.7521 13.6309 19.6901 13.1749 19.5651C7.01086 17.8731 2.12885 12.9951 0.435851 6.83414C0.0508506 5.43314 0.261798 3.97313 1.0318 2.72513C1.8048 1.47113 3.07586 0.58713 4.51886 0.29813C5.47186 0.10713 6.42785 0.533136 6.91485 1.35514L8.47784 3.99411C9.23684 5.27611 8.85971 6.92812 7.61871 7.75312L6.48785 8.50513C7.54485 10.6761 9.3227 12.4581 11.4837 13.5141L12.2459 12.3771C13.0749 11.1381 14.7278 10.7671 16.0088 11.5301L18.6519 13.1061C19.4699 13.5941 19.8938 14.5481 19.7068 15.4811C19.4188 16.9241 18.5338 18.1951 17.2808 18.9681C16.4388 19.4871 15.5018 19.7521 14.5518 19.7521ZM4.97784 1.75013C4.92884 1.75013 4.87887 1.75514 4.83087 1.76514C3.77687 1.97614 2.86487 2.61112 2.30987 3.51212C1.76087 4.40212 1.60985 5.44113 1.88385 6.43613C3.43685 12.0901 7.91584 16.5661 13.5718 18.1181C14.5668 18.3911 15.6047 18.2391 16.4927 17.6911C17.3927 17.1361 18.0289 16.2221 18.2359 15.1861C18.2979 14.8751 18.1568 14.5561 17.8838 14.3941L15.2408 12.8181C14.6428 12.4631 13.8758 12.6371 13.4918 13.2121L12.3768 14.8771C12.1768 15.1751 11.7909 15.2891 11.4649 15.1511C8.5019 13.9131 6.09189 11.4961 4.85089 8.52213C4.71289 8.19013 4.82975 7.80813 5.12775 7.60913L6.78888 6.50412C7.36488 6.12112 7.53983 5.35413 7.18683 4.75913L5.62384 2.12012C5.48684 1.88712 5.23884 1.75013 4.97784 1.75013ZM12.8687 12.7941H12.8787H12.8687ZM15.7498 8.00013C15.7498 5.93213 14.0668 4.25013 11.9998 4.25013C11.5858 4.25013 11.2498 4.58613 11.2498 5.00013C11.2498 5.41413 11.5858 5.75013 11.9998 5.75013C13.2398 5.75013 14.2498 6.75913 14.2498 8.00013C14.2498 8.41413 14.5858 8.75013 14.9998 8.75013C15.4138 8.75013 15.7498 8.41413 15.7498 8.00013ZM18.7498 8.00013C18.7498 4.27813 15.7218 1.25013 11.9998 1.25013C11.5858 1.25013 11.2498 1.58613 11.2498 2.00013C11.2498 2.41413 11.5858 2.75013 11.9998 2.75013C14.8948 2.75013 17.2498 5.10513 17.2498 8.00013C17.2498 8.41413 17.5858 8.75013 17.9998 8.75013C18.4138 8.75013 18.7498 8.41413 18.7498 8.00013Z"
                                                fill="white"/>
                                        </svg>
                                    </div>
                                    <h4>Call us</h4>
                                    <p>Mon-Fri from 9am to 6pm.</p>
                                    <a href="tel:+8801729277765">+8801729277765</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area pb-120">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="contact__map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.74819121334!2d89.55539417590765!3d22.811792624160006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91f9f0427857%3A0xf446e13e5c13bc70!2sFrogBid!5e0!3m2!1sbn!2sbd!4v1717322116996!5m2!1sbn!2sbd"
                                        width="600" height="450" style={{border: "none"}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="contact__form">
                                    <h2 className="text-capitalize mb-10">Get in touch</h2>
                                    <p className="mb-30">Our team would love to hear from you. Write your <br/> message
                                        to us!</p>
                                    <form>
                                        <input type="text" name="companyName" placeholder="Company Name"
                                               value={companyName}
                                               onChange={(e) => setcompanyName(e.target.value)}/>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <input type="text" name="fname" placeholder="First Name*" value={fname}
                                                       onChange={(e) => setfname(e.target.value)} required/>
                                            </div>
                                            <div className="col-6">
                                                <input type="text" name="lname" placeholder="Last Name*" value={lname}
                                                       onChange={(e) => setlname(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <input type="email" name="email" placeholder="Email Address*"
                                                       value={email}
                                                       onChange={(e) => setemail(e.target.value)} required/>
                                            </div>
                                            <div className="col-6">
                                                <input type="tel" name="phone" placeholder="Phone Number*" value={phone}
                                                       onChange={(e) => setphone(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <textarea name="message" id="message" placeholder="Message" value={message}
                                                  onChange={(e) => setmessage(e.target.value)} required></textarea>
                                        <button type="button" className="btn-one transition"
                                                onClick={handleSubmit}>Submit<i
                                            className="fa-regular fa-circle-arrow-right ml-10"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="started-area pb-120">
                    <div className="container">
                        <div className="started__item bg-image" data-background="assets/images/bg/started-bg.png">
                            <div className="section-header-two text-center mb-40">
                                <h2 className="text-white wow fadeInUp" data-wow-delay="00ms"
                                    data-wow-duration="1000ms">Unlock Your
                                    Digital Potential with <br/> Marketi's SEO Solutions!</h2>
                                <p className="para-light-color wow fadeInUp" data-wow-delay="200ms"
                                   data-wow-duration="1000ms">
                                    Elevate your online presence with Marketi's trusted SEO
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

export default Contact