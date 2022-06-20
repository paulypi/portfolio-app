import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { gitHub, gmail, twitter } from './imports'
import './footer.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n2ymto6', 'template_qe6frj2', form.current, 'JzsVQw8JpJRmYfWtS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='portfolio__footer section__padding' id='footer'>
      <div className='portfolio__footer-links'>
        <div className='portfolio__footer-links_heading'>
          <h1 className='gradient__text'>Contacts</h1>
          <p>Feel free to use the form below or check my other connections</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='portfolio__footer-links_form'>
            <input type="email" placeholder='Your email address' name='email'/>
            <textarea type="text" cols="40" rows="5" placeholder='Insert your text here' name='message'></textarea>
            <button type='submit'>Send</button>
          </div>
        </form>
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