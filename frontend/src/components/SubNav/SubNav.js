import React from 'react'
import './SubNav.css'

import SubNavItem from '../SubNavItem/SubNavItem'


const SubNav = ({ items }) => {
  return (
    <div className='sub-menu-group'>
      {items.map((item, index) => (
        <SubNavItem key={index} menuText={item.menuText} />
      ))}
    </div>
  )
}

export default SubNav
