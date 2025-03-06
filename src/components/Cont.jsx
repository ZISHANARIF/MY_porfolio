import React from 'react'
import './Contact.css'

const Cont = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "053a7cf7-5f44-4d50-abd8-9e0585d6fd21");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }

    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src='/connection.png' alt='theme' />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Have a project in mind? Let’s bring it to life with powerful MERN solutions,
                        strategic data insights, and precision-driven problem-solving.
                        Reach out, and let’s create something impactful together.</p>
                    <div className="contact-details">

                        <div className="contact-detail">
                            <img src='/email.svg' alt='mail' />
                            <p>zishanarif912@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src='/call.svg' alt='call' />
                            <p>Call Us +91 8115332965</p>
                        </div>

                        <div className="contact-detail">
                            <img src='/location.svg' alt='location' />
                            <p>Delhi, New Delhi</p>
                        </div>

                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Name' name='name' />
                    <lable htmlFor=''>Your Email</lable>
                    <input type='email' placeholder='Enter Email' name='email' />
                    <lable htmlFor=''>Write Your Message</lable>
                    <textarea name='message' rows="8" placeholder='Enter Message' />
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Cont