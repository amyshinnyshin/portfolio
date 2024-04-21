import React from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';

import Chip from '../Chip/Chip';

const Card = ({ imageUrl, url, projectTitle, category, date, projectHasChip, chipBgColor, chipTextColor }) => {
  return (
    <Link to={`/work/${url}`} className='project-link'>
      <div className='project-card'>
        <div className='project-img-container'>
          <div className='chip-container'>
          {projectHasChip && <Chip textColor={chipTextColor} bgColor={chipBgColor} />}
          </div>
          <img className='snapshot' src={imageUrl} alt={projectTitle} />
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
    </Link>
  );
};

export default Card;


