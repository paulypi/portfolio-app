import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='portfolio__project-container_article'>
      <div className='portfolio__project-container_article-image'>
        <img src={imgUrl} alt="project img" />
      </div>
      <div className='portfolio__project-container_article-content'>
        <div>
          <p>{ date }</p>
          <h3>{ title }</h3>
        </div>
        <p>Go to project</p>
      </div>
    </div>
  )
}

export default Article