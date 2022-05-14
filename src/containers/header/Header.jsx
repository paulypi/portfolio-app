import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='portfolio__header' id='home'>
      <div className='portfolio__header-content'>
        <h1 className='gradient__text'>Hi, i'm Paolo</h1>
        <p> Back-end Developer | Studing as Data engineer </p>

        <div className='portfolio__header-content_github'>
            <h2 className='gradient__text'>GitHub account:</h2>
            <button>Check my GitHub</button>
        </div>
        
        <div className='portfolio__header-content_contact'>
          <p>To contact me, take a look to <a href="#footer" className='gradient__text'>this section</a></p>
        </div>

      </div>
    </div>
  )
}

export default Header