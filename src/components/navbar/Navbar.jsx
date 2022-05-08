import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/Logo.png';
import './navbar.css';


const Navbar = () => {
  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='portfolio__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#skillset">Skillset</a></p>
          <p><a href="#whoami">Who am I</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#Footer">Contacts</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar