import React from 'react'
import './ReadOnlyField.css';

const ReadOnlyField = ({ label, copy }) => {
  return (
    <div className='read-only-group'>
      <p className='semibold'>{label}</p>
      <p>{copy}</p>
    </div>
  )
}

export default ReadOnlyField
