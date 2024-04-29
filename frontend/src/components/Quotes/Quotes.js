import React from 'react'
import './Quotes.css'

const ODNavQuotes = () => {
  return (
    <div className='od-quote'>
        <img src='/images/od-nav/quote.png' alt='quote'></img>
        <h5 className='descriptive'>how can we improve navigation in the new order details interface for merchants to create a clearer hierarchy and relationship between orders and their shipments?</h5>
    </div>
  )
}

const ODEdQuotes = () => {
  return (
    <div className='od-quote'>
        <img src='/images/od-nav/quote.png' alt='quote'></img>
        <h5 className='descriptive'>how can we improve the discoverability and usability of the actions in the new experience to reduce user confusion?</h5>
    </div>
  )
}

export { ODNavQuotes, ODEdQuotes } 
