import React from 'react';
import './header.css';

const Header = () => {

  return (
    <div className='portfolio__header' id='home'>
      <div className='portfolio__header-content section__padding'>
        <h1 className='gradient__text'>Hi, i'm Paulypi</h1>
        <p> Back-end Developer | Studying as Data engineer | Love learning by doing</p>

        <div className='portfolio__header-content_github'>
            <h2 className='gradient__text'>GitHub account:</h2>
            <a href="https://github.com/paulypi"><button>Check my GitHub</button></a>
        </div>
        
        <div className='portfolio__header-content_contact'>
          <p>Contact me through <a href="#footer" className='gradient__text'>this section</a></p>
        </div>

      </div>
    </div>
  )
}

export default Header