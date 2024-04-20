import React from 'react'
import './TopNav.css'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='left-section'>amy shin</div>
      <div className='right-section'>
        <div>resume</div>
        <div className='vertical-rule-16px'></div>
        <div className='icon-button-32px'>
          <img className='linkedin' src='/icons/linkedin.png' alt='linkedin' />
        </div>
        <div className='icon-button-32px'>
          <img className='email' src='/icons/email.png' alt='linkedin' />
        </div>
      </div>
    </div>
  )
}

export default TopNav
