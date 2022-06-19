import React from 'react';

import { pythonl, HTMLl, CSSl, JavaScriptl, SQLl, Reactl, PostgreSQL } from './imports';
import './skillset.css';

const Skillset = () => {
  return (
    <div className='portfolio__skillset' id='skillset'>
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
        <img src={PostgreSQL} alt="PostgreSQL" />
        <p>PostgreSQL</p>
      </div>
      <div>
        <img src={SQLl} alt="SQLl" />
        <p>SQL</p>
      </div>
      <div>
        <img src={Reactl} alt="Reactl" />
        <p>React JS</p>
      </div>
    </div>
  )
}

export default Skillset