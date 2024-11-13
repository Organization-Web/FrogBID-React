import React, {useState} from "react";
import axios from "axios";

function ContactForm() {
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
            <section className="talk-area pt-140 pb-140 primary-bg bg-image"
                     data-background="assets/images/bg/talk-bg.png">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="section-header">
                                <h5 className="text-white wow fadeInUp" data-wow-delay="00ms"
                                    data-wow-duration="1000ms">
                                    Get started with us
                                </h5>
                                <h2 className="text-white wow fadeInUp" data-wow-delay="200ms"
                                    data-wow-duration="1000ms">
                                    Start Conversation to
                                    <span className="light-underline">FrogBID</span> Your Business
                                </h2>
                                <p className="para-light-color wow fadeInUp" data-wow-delay="400ms"
                                   data-wow-duration="1000ms">
                                    Schedule a free consultation with our experts. Uncover
                                    opportunities <br/>
                                    and take the first step towards digital success
                                </p>
                                <div className="d-flex align-items-center gap-4 mt-40 wow fadeInDown"
                                     data-wow-delay="200ms"
                                     data-wow-duration="1000ms">
                                    <a href="#" className="btn-one" target="_blank">
                                        Schedule a Meeting <i
                                        className="fa-regular fa-circle-arrow-right ml-10"></i>
                                    </a>
                                    <span className="para-light-color">Or</span>
                                    <a className="explore-btn-light" href="#"
                                       target="_blank">
                                        <span>Book A Demo</span>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                            <div className="contact__form">
                                <h3 className="text-capitalize mb-30 text-center">
                                    get a free consultation with our Expert
                                </h3>
                                <form>
                                    <input type="text" name="companyName" placeholder="Company Name" value={companyName}
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
                                            <input type="email" name="email" placeholder="Email Address*" value={email}
                                                   onChange={(e) => setemail(e.target.value)} required/>
                                        </div>
                                        <div className="col-6">
                                            <input type="tel" name="phone" placeholder="Phone Number*" value={phone}
                                                   onChange={(e) => setphone(e.target.value)} required/>
                                        </div>
                                    </div>
                                    <textarea name="message" id="message" placeholder="Message" value={message}
                                              onChange={(e) => setmessage(e.target.value)} required></textarea>
                                    <button type="button" className="btn-one transition" onClick={handleSubmit}>Submit<i
                                        className="fa-regular fa-circle-arrow-right ml-10"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactForm