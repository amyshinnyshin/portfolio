import React from 'react';
import './Chip.css';

const Chip = ({ textColor, bgColor }) => {
  const chipStyle = {
    backgroundColor: bgColor,
  };

  const textStyle = {
    color: textColor,
  }

  return (
    <div className='password-chip' style={chipStyle}>
      <div className='emoji-container'>
        <p className='small-12px'>🔒</p>
      </div>
      <p className='small-12px' style={textStyle}>Password Protected</p>
    </div>
  );
};

export default Chip;
