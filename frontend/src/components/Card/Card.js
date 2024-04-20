import React from 'react'
import './Card.css'


const Card = ({ imageUrl, projectTitle, category, date}) => {
  return (
    <div className='project-card'>
      <div className='project-img-container'>
        <img className='snapshot'src={imageUrl} alt={projectTitle} />
      </div>
      <div className='project-card-description'>
        <h6 className='project-card-title'>{projectTitle}</h6>
        <div className='project-category-group'>
            <p className='caption'>{category}</p>
            <div className='vertical-rule-12px'></div>
            <p className='caption'>{date}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Card
