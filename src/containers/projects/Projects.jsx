import React from 'react';

import { Article } from '../../components';
import { articleEx } from './imports'
import './projects.css';

const Projects = () => {
  return (
    <div className='portfolio__projects section__padding' id='projects'>
      <div className='portfolio__projects-heading'>
        <h1 className='gradient__text'>Project section</h1>
      </div>

      <div className='portfolio__projects-container'>
        <div className='portfolio__projects-container_articles'>
          <Article imgUrl={articleEx} date='15 may 2022' title='Some short tile of a project' />
          <Article imgUrl={articleEx} date='15 may 2022' title='Some short tile of a project' />
          <Article imgUrl={articleEx} date='15 may 2022' title='Some short tile of a project' />
          <Article imgUrl={articleEx} date='15 may 2022' title='Some short tile of a project' />
        </div>
      </div>

    </div>
  )
}

export default Projects