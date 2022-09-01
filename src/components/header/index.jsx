import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './header.scss'

const Header = () => {

  const[toggle, setToggle] = useState(false);
  const[scroll, setScroll] = useState(false);

  useEffect(() => {
    if(typeof window !=="undefined") {
      window.addEventListener("scroll", () => {
        setScroll(window.pageYOffset > 142)
      })
    }
  }, []);

  const toggleNav = () => {
    setToggle(!toggle);
  }
  
  return (
    <header className={scroll ? "active" : ""}>
        <div className="headerContainer">
          <nav>
            <NavLink to='/' className='mobileLogo'><div className="imageWrapper"><img src={Logo} alt="logo" /></div></NavLink>
            <ul className={toggle ? "active" : ""}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li className='deskLogo'><NavLink to='/'><img src={Logo} alt="logo" /></NavLink></li>
                <li><NavLink to="/">Media</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
            </ul>
            <button className={toggle ? "navToggle active" : "navToggle"} onClick={toggleNav}>
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