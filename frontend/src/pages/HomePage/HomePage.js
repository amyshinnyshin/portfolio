import React from 'react'
import './HomePage.css'

import Carousel from '../../components/Carousel/Carousel'


const HomePage = () => {
  return (
    <div className='homepage-container'>
      <div className='bio'>
        <h2 className='jobs'>
          product designer. developer. 
        </h2>
        <h2 className='personal-statement'>
        based in austin. i love creating meaningful products that solve user problems. 
        </h2>
      </div>
    
      <Carousel />

      
    </div>
  )
}

export default HomePage
