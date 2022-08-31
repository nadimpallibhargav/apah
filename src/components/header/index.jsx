import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './header.scss'

const Header = () => {
  return (
    <header>
        <div className="headerContainer">
          <nav>
            <NavLink to='/' className='mobileLogo'><div className="imageWrapper"><img src={Logo} alt="logo" /></div></NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li className='deskLogo'><NavLink to='/'><img src={Logo} alt="logo" /></NavLink></li>
                <li><NavLink to="/">Media</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
            </ul>
            <button className="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
          </nav>
        </div>
    </header>
  )
}

export default Header