import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#skillset">Skillset</a></p>
  <p><a href="#whoami">Who am I</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#footer">Contacts</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='portfolio__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='portfolio__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='portfolio__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='portfolio__navbar-menu_container scale-up-right'>
            <div className='portfolio__navbar-menu_container-links'>
              <Menu />
              <div className='portfolio__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar