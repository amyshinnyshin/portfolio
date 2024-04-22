import React from 'react'
import './GridLayout.css'

const HarvestGridLayout = () => {
  return (
    <div className='harvest-grid-layout'>

        <img src='/images/harvest/selection-options.png' alt='selection-options'/>
        <img src='/images/harvest/search.png' alt='search-feature'/>
        
        <img src='/images/harvest/cart-feature.png' alt='cart-feature'/>
        <img src='/images/harvest/add-to-cart.png' alt='add-to-cart-options'/>
        
        <img className='full-width' src='/images/harvest/hi-fi.png' alt='hi-fi'/>
        
    </div>
  )
}

const HiveGridLayout = () => {
  return (
    <div className='hive-grid-layout'>

        <div className='full-width yellowBG'>
          <img className='hive-gif' src='/images/hive/hive-interaction.gif' alt='hive-interaction'/>
        </div>
        
        <img src='/images/hive/adding-comment.png' alt='adding-comments'/>
        <img src='/images/hive/editing-deleting-comment.png' alt='editing-deleting-comments'/>
        
        <img className='full-width' src='/images/hive/kanban-board.png' alt='hive-kanban'/>
        
    </div>
  )
}

export { HarvestGridLayout, HiveGridLayout}
