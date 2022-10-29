import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.scss';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b0frvz9', 'template_v2az3zo', form.current, 'L4EmhoTI2BsKkdWyX')
      .then((result) => {
          console.log('success');
      }, (error) => {
          console.log('error sending');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <h3>Get <span>50% Discount</span></h3>
        <p>Just in One Click</p>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Name' name="from_name" />
        </div>
        <div className="inputWrapper">
            <input type="email" placeholder='Enter Your Email' name="user_email" />
        </div>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Mobile' name="user_mobile" />
        </div>
        <button type='submit'>GET A DISCOUNT</button>
    </form>
  )
}

export default ContactForm