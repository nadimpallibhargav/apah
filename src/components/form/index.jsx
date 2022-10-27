import axios from 'axios'
import React, {useState} from 'react'
import './contactForm.scss'

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Mobile: mobile
    }

    axios.post('https://sheet.best/api/sheets/145fd9ea-9c69-4dd8-b334-147f831d5381',data).then((response)=>{
      console.log(response);
      setName('');
      setEmail('');
      setMobile('');
    });
  }  

  return (
    <form onSubmit={handleSubmit}>
        <h3>Get <span>50% Discount</span></h3>
        <p>Just in One Click</p>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="inputWrapper">
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="inputWrapper">
            <input type="text" placeholder='Enter Your Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>
        <button type='submit'>GET A DISCOUNT</button>
    </form>
  )
}

export default ContactForm