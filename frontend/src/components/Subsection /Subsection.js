import React from 'react'
import './Subsection.css'

const Subsection = ({ header, copy, paddingBottom }) => {
  const containerStyle = {
    paddingBottom: paddingBottom || '24px', 
  };

  return (
    <div className='subsection-container' style={containerStyle}>
      <h6 className='semibold'>{header}</h6>
      <p>{copy}</p>
    </div>
  )
}

export default Subsection
