import React from 'react'
import apahWater from '../../../assets/images/apahBenefits.webp'
import ContactForm from '../../../components/form'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Try the product.</h2>
        <div className="contactContent">          
          <div className="contactForm">
            <ContactForm />
          </div>
          <div className="contactImage">
            <div className="imageWrapper">
                <img src={apahWater} alt="Try Apah Water" />
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Contact