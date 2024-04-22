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

      <img className='full-width' src='/images/hive/hive-interaction.gif' alt='hive-interaction'/>
        
        <img src='/images/hive/adding-comment.png' alt='adding-comments'/>
        <img src='/images/hive/editing-deleting-comment.png' alt='editing-deleting-comments'/>
        
        <img className='full-width' src='/images/hive/kanban-board.png' alt='hive-kanban'/>
        
    </div>
  )
}

const BookNookLayoutBrand = () => {
  return (
    <div className='booknook-brand-grid-layout'>

      <img className='full-width' src='/images/booknook/booknook-logo.png' alt='booknook-logo'/>
      <img className='full-width' src='/images/booknook/hi-fi.png' alt='booknook-hi-fi'/>
        
    </div>
  )
}

const BookNookLayoutDesigns = () => {
  return (
    <div className='booknook-brand-grid-layout'>

      <img src='/images/booknook/dropdown.png' alt='dropdown'/>
      <img src='/images/booknook/book-selection.png' alt='book-selection'/>
      <img className='full-width' src='/images/booknook/booknook-gif.gif' alt='booknook-gif'/>
        
    </div>
  )
}


export { HarvestGridLayout, HiveGridLayout, BookNookLayoutBrand, BookNookLayoutDesigns}
