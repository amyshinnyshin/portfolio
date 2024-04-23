import React from 'react';
import './ProjectOverviewSection.css';
import ReadOnlyField from '../ReadOnlyField/ReadOnlyField';

const ProjectOverviewSection = ({ text, info }) => {
  return (
    <div className='project-overview-section'>
        <div className='project-overview-content-container'>
        <h1 className='header'>Project Overview</h1>
        <div className='main-content-container'>
            <div className='paragraph-group'>
            {text.map((item, index) => (
                <p key={index}>{item.text}</p>
            ))}
            </div>
            <div className='read-only-container'>
                {info.map((item, index) => (
                    <ReadOnlyField key={index} label={item.label} copy={item.copy} />
                ))}
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProjectOverviewSection;
