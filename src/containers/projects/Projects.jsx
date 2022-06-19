import React from 'react';

import { Article } from '../../components';
import { portfolio, sudokuToPdf } from './imports'
import './projects.css';

const Projects = () => {
  return (
    <div className='portfolio__projects section__padding' id='projects'>
      <div className='portfolio__projects-heading'>
        <h1 className='gradient__text'>Project section</h1>
      </div>

      <div className='portfolio__projects-container'>
        <div className='portfolio__projects-container_articles'>
          <Article imgUrl={portfolio} date='19 jun 2022' title='Portfolio website' description="This portfolio website" link="https://github.com/paulypi/portfolio-app" />
          <Article imgUrl={sudokuToPdf} date='08 may 2022' title='SudokuToPdf' description="Create a sudoku book content pdf with printing size as Letter and puzzles difficulty Easy / Medium / Hard." link="https://github.com/paulypi/sudokuToPdf" />
        </div>
      </div>

    </div>
  )
}

export default Projects