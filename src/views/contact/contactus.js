import React from 'react';
import './contactus.css';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
    const location = useLocation();
    console.log(window.location);
    return (
        <div>
            <div className='contactpage'>
                <div className='contactpagecontent'>
                    <h1>CONTACT</h1>
                    <p>Creating Synergy Between Lifestyle And Aesthetics</p>
                    <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "orangered" }}>{location.pathname}</span></p>
                </div>
            </div>
            <section className='contactpagecards'>
                <div class="card">
                    <div class="card-body">
                        <img src="/images/icon-global.png" alt="" />
                        <h6 class="card-subtitle mb-2 text-body-secondary">HEAD QUARTERS</h6>
                        <p class="card-text">
                            1-001/A, MYTHRI ENCLAVE, <br />
                            Hi-Tech City, HYD-500016.
                        </p>
                    </div>
                    <div class="card-body">
                        <img src="/images/icon-phone.png" alt="" />
                        <h6 class="card-subtitle mb-2 text-body-secondary">PHONES</h6>
                        <p class="card-text">
                            +911400253020 <br />
                            +911400253032
                        </p>
                    </div>
                    <div class="card-body">
                        <img src="/images/icon-email.png" alt="" />
                        <h6 class="card-subtitle mb-2 text-body-secondary">WRITE TO US</h6>
                        <p class="card-text">
                            info@vdhatri.com <br />
                            for all purpose
                        </p>
                    </div>
                </div>
            </section>
            <section className='contactpageinfo'>
                <h1>FIND A LOCATION <br /> WITH US</h1>
                <div className='contactpagemap'>
                    <iframe
                        class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.670830340825!2d75.7940167!3d13.308491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77f6b8853b5%3A0xaefdd637ace50db8!2sDev%E2%80%99s%20residence!5e0!3m2!1sen!2sin!4v1717173694838!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='contactpageform'>
                    <form action="" class="form">
                        <h3>Get in Touch</h3>
                        <input type="text" placeholder="Name" class="form-box" />
                        <input type="email" placeholder="Email" class="form-box" />
                        <input type="number" placeholder="Phone" class="form-box" />
                        <textarea
                            type="text"
                            placeholder="Message"
                            class="form-box"
                            id=""
                            cols="20"
                            rows="5"
                        ></textarea>
                        <div class="submit-btn">
                            <a href="">Submit</a>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
