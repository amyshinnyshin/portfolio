import React, { useEffect } from 'react';
import './OrderPlanningPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'


const OrderPlanningPage = () => {
    const projectOverviewText = [
        { text: `The Hive app simplifies job searching by providing a centralized platform for organizing and monitoring the process. Users can input application details, track status updates, store relevant documents, and gain valuable insights, all within a single interface.` },
        { text: `For the development, I utilized Django Rest Framework for the backend and React for the frontend. This combination enables the app to function like a Kanban board, where the backend API manages task data and status updates, while the frontend renders tasks dynamically. This approach allows users to visualize and manage their job search tasks in a familiar and intuitive manner, enhancing efficiency and organization.` },
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
    <div className='order-planning-page'>
      <TopNav bgColor='#DBE7E6' textColor='#363636'isDarkBG={false}/>
      <div className='order-planning-page-container'>
        <div className='hero-image-container'>
          <img src='' alt='od-nav'></img>
        </div>

        <ProjectOverviewSection text={projectOverviewText} info={info}/>

  



      </div>
    </div>
  )
}

export default OrderPlanningPage
