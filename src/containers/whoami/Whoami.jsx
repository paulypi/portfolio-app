import React from 'react';
import { Article } from '../../components';
import './whoami.css';

const Whoami = () => {
  return (
    <div className='portfolio__whoami section__padding' id='whoami'>
      <div className='portfolio__whoami-container'>
        <div className='portfolio__whoami-container_title gradient__text'>
          <h1>Who am I!</h1>
        </div>
        <div className='portfolio__whoami-container_text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident delectus facilis asperiores, possimus nostrum unde minus ut veniam voluptatibus, sequi non quas porro natus reprehenderit? Dignissimos voluptate harum itaque.</p>
        </div>
      </div>
    </div>
  )
}

export default Whoami