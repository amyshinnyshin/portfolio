import React from 'react';
import './ProjectOverviewSection.css';
import ReadOnlyField from '../ReadOnlyField/ReadOnlyField';

const ProjectOverviewSection = ({ paragraph, info }) => {
  return (
    <div className='project-overview-section'>
      <h1 className='header'>Project Overview</h1>
      <div className='main-content-container'>
        <div className='paragraph-group'>
          {paragraph.map((item, index) => (
            <p key={index}>{item.bodyParagraph}</p>
          ))}
        </div>
        <div className='read-only-container'>
            {info.map((item, index) => (
                <ReadOnlyField key={index} label={item.label} copy={item.copy} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewSection;
