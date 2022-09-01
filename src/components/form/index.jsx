import React from 'react'
import './contactForm.scss'

const ContactForm = () => {
  return (
    <form>
        <h3>Get <span>50% Discount</span></h3>
        <p>Just in One Click</p>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Name' />
        </div>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Email' />
        </div>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Mobile' />
        </div>
        <button>GET A DISCOUNT</button>
    </form>
  )
}

export default ContactForm