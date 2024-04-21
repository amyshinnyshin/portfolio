import React, { useEffect } from 'react';
import './BookNookPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'


const BookNookPage = () => {

    const paragraph = [
        { bodyParagraph: `Booknook is an app designed to help users discover, organize, and enjoy books. Inspired by popular platforms like Goodreads and Spotify, it aims to help simplify how people engage with books.` },
        { bodyParagraph: `The objective of this project was to develop a Single Page Application (SPA) using React and a third-party API. I utilized the Open Book API and created custom React components to implement various features such as search functionality, book summaries, personal libraries, and more. The design and ideation were done using Figma, and then I implemented the frontend using React, connecting it to the Open Book API to retrieve and display book details.` },
      ];

      const info = [
        { label: 'Role', copy: `Full Stack Engineer
        (Comprehensive)`},
        { label: 'Tools', copy: 'Figma, React, Github' },
        { label: 'Duration', copy: '~2 Weeks' },
      ];

      useEffect(() => {
    
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='booknook-page'>
        <TopNav bgColor='#9BA8F2' textColor='#363636'isDarkBG={false}/>
        <div className='booknook-page-container'>
            <div className='hero-image-container'>
            <img src='' alt='od-nav'></img>
            </div>

            <ProjectOverviewSection paragraph={paragraph} info={info}/>



        </div>
    </div>
  )
}

export default BookNookPage
