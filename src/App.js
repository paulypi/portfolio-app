import React from 'react';

import { Header, Whoami, Projects, Footer } from './containers';
import { Navbar, Skillset } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Skillset />
        <Whoami />
        <Projects />
        <Footer />
    </div>
  )
}

export default App