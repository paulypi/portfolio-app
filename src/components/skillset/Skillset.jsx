import React from 'react';
import './skillset.css';
import { pythonl, HTMLl, CSSl, JavaScriptl, SQLl, Reactl } from './imports';

const Skillset = () => {
  return (
    <div className='portfolio__skillset section__padding' id='skillset'>
      <div>
        <img src={pythonl} alt="pythonl" />
        <p>python</p>
      </div>
      <div>
        <img src={HTMLl} alt="HTMLl" />
        <p>HTML</p>
      </div>
      <div>
        <img src={CSSl} alt="CSSl" />
        <p>CSS</p>
      </div>
      <div>
        <img src={JavaScriptl} alt="JavaScriptl" />
        <p>Javascript</p>
      </div>
      <div>
        <img src={SQLl} alt="SQLl" />
        <p>SQL</p>
      </div>
      <div>
        <img src={Reactl} alt="Reactl" />
        <p>React</p>
      </div>
    </div>
  )
}

export default Skillset