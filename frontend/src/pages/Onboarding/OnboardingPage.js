import React, { useEffect } from 'react';
import './OnboardingPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'


const OnboardingPage = () => {
    const paragraph = [
        { bodyParagraph: `The Hive app simplifies job searching by providing a centralized platform for organizing and monitoring the process. Users can input application details, track status updates, store relevant documents, and gain valuable insights, all within a single interface.` },
        { bodyParagraph: `For the development, I utilized Django Rest Framework for the backend and React for the frontend. This combination enables the app to function like a Kanban board, where the backend API manages task data and status updates, while the frontend renders tasks dynamically. This approach allows users to visualize and manage their job search tasks in a familiar and intuitive manner, enhancing efficiency and organization.` },
      ];
      
      const info = [
        { label: 'Role', copy: `Full Stack Engineer
        (Comprehensive)` },
        { label: 'Tools', copy: 'Figma, Django Rest Framework, React, Github' },
        { label: 'Duration', copy: '~2 Weeks' },
      ];

      useEffect(() => {
    
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='onboarding-page'>
      <TopNav bgColor='#215053' textColor='#FFFFFF'isDarkBG={true}/>
      <div className='onboarding-page-container'>
        <div className='hero-image-container'>
          <img src='' alt='od-nav'></img>
        </div>

        <ProjectOverviewSection paragraph={paragraph} info={info}/>

  



      </div>
    </div>
  )
}

export default OnboardingPage
