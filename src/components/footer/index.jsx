import React from 'react';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Linkedin from '../../assets/images/linkedin.png';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footerContent">
            <div className="footerLinks">
              <p>Help us spread the word and share our movement with your friends and family</p>
              <ul>
                <li><a><img src={Facebook} alt="Apah Facebook" /></a></li>
                <li><a><img src={Instagram} alt="Apah Instagram}" /></a></li>
                <li><a><img src={Linkedin} alt="Apah Linkedin}" /></a></li>
              </ul>
            </div>
            <div className="footerLinks">
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
            <div className="footerLinks">
              <ul>
                <li><a>Contact</a></li>
                <li><a>Media</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <div className="footerLinks">
              <ul>
                <li><a>Order Cardamom Water</a></li>
                <li><a>Order  Cinnamon Water</a></li>
                <li><a>Order Clove Water</a></li>
              </ul>
            </div>
           
          </div>
          <p className="copyright">&copy; Copyright 2022 Apah Water - All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer