import React from 'react';

import './whoami.css';

const Whoami = () => {
  return (
    <div className='portfolio__whoami section__padding' id='whoami'>
      <div className='portfolio__whoami-container'>
        <div className='portfolio__whoami-container_title gradient__text'>
          <h1>Who am I</h1>
        </div>
        <div className='portfolio__whoami-container_text'>
          <p>Aviation quality inspector and tutor with 10 years of experience, seeking a carrer change to a position of Data Engineer.</p> 
          <p>Driven self-starter, fast learner and team player, enrolled in "IBM Data Engineering Professional Certificate" on Coursera.</p> 
          <br />
          <p>Check my certificate:</p>
          <p>1. <a href="https://coursera.org/share/5fd11034c4d475e9b19da4f4e79f0b81" className='gradient__text'>Introduction to Data Engineering</a></p>
          <p>2. <a href="https://coursera.org/share/071b4b4856c65a94c62d6d28dd08c69d" className='gradient__text'>Python for Data Science, AI and Development</a></p>
          <p>3. <a href="https://coursera.org/share/65b32a134cc7e4c49f614837db376c3a" className='gradient__text'>Python Project for Data Engineering</a></p>
          <p>4. <a href="https://coursera.org/share/8b1d0ca251585ddab60edfcae59d4680" className='gradient__text'>Introduction to Relational Databases (RDBMS)</a></p>
          <p>5. <a href="https://coursera.org/share/7d826f9d0bf56ed5f23267d9c8127959" className='gradient__text'>Databases and SQL for Data Science with Python</a></p>
          <p>6. <a href="https://coursera.org/share/28666ca3a095c8998f46272cc52ec99b" className='gradient__text'>Hands-on Introduction to Linux Commands and Shell Scripting</a></p>
          <p>7. <a href="https://coursera.org/share/b4bcf4c39126db9afaf894071296f186" className='gradient__text'>Relational Database Administration (DBA)</a></p>
        </div>
      </div>
    </div>
  )
}

export default Whoami
