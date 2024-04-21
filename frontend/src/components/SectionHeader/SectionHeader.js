import React from 'react'
import './SectionHeader.css'


const SectionHeader = ({ sectionHeader }) => {
  return (
    <div className='section-header-container'>
      <h2 className='section-header'>{sectionHeader}</h2>
    </div>
  )
}

export default SectionHeader
