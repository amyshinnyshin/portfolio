import React from 'react';
import { Link } from 'react-router-dom'; 
import './TopNav.css';

const TopNav = ({ textColor, bgColor, isDarkBG }) => {
  const bgStyle = {
    backgroundColor: bgColor,
  };

  const textStyle = {
    color: textColor,
  };

  return (
    <div className='top-nav' style={bgStyle}>
      <Link to={`/`} className='left-section' style={textStyle}>amy shin</Link>
      <div className='right-section'>
        <div style={textStyle}>resume</div>
        <div className='vertical-rule-16px'></div>
        <div className='icon-button-32px'>
          <img className='linkedin' src={isDarkBG ? '/icons/linkedin-light.png' : '/icons/linkedin-dark.png'} alt='linkedin' />
        </div>
        <div className='icon-button-32px'>
          <img className='email' src={isDarkBG ? '/icons/email-light.png' : '/icons/email-dark.png'} alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default TopNav;

