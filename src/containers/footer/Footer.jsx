import React from 'react';
import { gitHub, gmail, twitter } from './imports'
import './footer.css';

const Footer = () => {
  return (
    <div className='portfolio__footer section__padding' id='footer'>
      <div className='portfolio__footer-links'>
        <div className='portfolio__footer-links_heading'>
          <h1 className='gradient__text'>Contacts</h1>
          <p>Feel free to use the form below or check my connections</p>
        </div>
        <div className='portfolio__footer-links_form'>
          <input type="email" placeholder='Emamil address' />
          <textarea name="text" cols="40" rows="5" placeholder='Insert your text here'></textarea>
          <button type='button'>Send</button>
        </div>
      </div>
      <div className='portfolio__footer-connections'>
          <h1 className='gradient__text'>Connections</h1>
          <a href="mailto:paolo.pierini.p@gmail.com"><img src={gmail} alt="gmail img" /></a>
          <a href="https://twitter.com/Paulypi1"><img src={twitter} alt="twitter img" /></a>
          <a href="https://github.com/paulypi"><img src={gitHub} alt="github img" /></a>
        </div>
    </div>
  )
}

export default Footer