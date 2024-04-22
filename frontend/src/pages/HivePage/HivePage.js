import React, { useEffect } from 'react';
import './HivePage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { HiveGridLayout } from '../../components/GridLayout/GridLayout';


const HivePage = () => {
    const subMenuItems = [
      { menuText: 'project overview' },
      { menuText: 'research' },
      { menuText: 'definition' },
      { menuText: 'ideation' },
      { menuText: 'usability' },
      { menuText: 'design' },
      { menuText: 'future steps' },
    ];
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
    <div className='hive-page'>
      <TopNav bgColor='#FFD2B9' textColor='#363636'isDarkBG={false}/>
      <div className='hive-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/hive.png' alt='hive'/>
        </div>
        

        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection paragraph={paragraph} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group'>
                    <p>
                    I started by focusing on the needs of users who are actively searching for jobs. I brainstormed user stories to capture the key functionalities that would address these needs. This involved identifying the core tasks that users would need to perform, such as adding job application details, tracking application status, and organizing their job search process.
                    </p>
                  </div>
                </div>
                <div>
                  <h6 className='semibold'>USER STORIES</h6>
                  <ul>
                    <li>As a user, I want to add job application details, including company name, role title, date applied, and description, to maintain organized and detailed records of every job I apply for. (CREATE)</li>
                    <li>As a user, I want a clear and accessible overview of all my job applications so that I can easily review and manage them. (READ)</li>
                    <li>As a user, I want a detailed view of each job application, displaying key information such as company name, role title, date applied, and description, to prepare for interviews and understand specific job requirements. (READ)</li>
                    <li>As a user, I want to update the status of my job applications to keep track of my progress. (UPDATE)</li>
                    <li>As a user, I want to delete old or rejected job applications to maintain a clutter-free and organized job tracker. (DELETE)</li>
                    <li>As a user, I want to add comments to my job applications to document relevant information or feedback received. (CREATE)</li>
                  </ul>
                </div>
                
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container design'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='design'/>
                  <div className='paragraph-group-80px'>
                    <Subsection header='LO-FI WireFrames' copy="I created rough sketches and wireframes to visualize the layout and flow of the app. This helped me to identify potential usability issues and refine the user interface design. " paddingBottom='24px'/>
                    <img src='/images/hive/lo-fi.png' alt='lo-fi'></img>
                  </div>

                  <div className='paragraph-group-80px'>
                    <Subsection header='Hi-FI WireFrames' copy="Using Figma, I added color, typography, and visual elements. Creating Hi-Fi designs, allowed me to refine the user interface and ensure that the design accurately reflected the app's functionality and user experience." paddingBottom='24px'/>
                    <img src='/images/hive/hi-fi.png' alt='hi-fi'></img>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
          

          <div className='hive-code-divider-section'>
              <img src='/images/hive/code.png' alt='code'/>
          </div>

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='development'/>
                <div className='paragraph-group'>
                  <p>For the Hive app, I used Django Rest Framework (DRF) for the backend and React for the frontend. In the backend, I created models for job applications and implemented API endpoints for CRUD operations. On the frontend, I used React to create a dynamic user interface with components for managing job applications. I then connected the frontend to the backend using Axios for HTTP requests. </p>
                </div>
                <HiveGridLayout />
                
              </div>
              
            </div>
          </div>

          <div className='whiteBG main-section-container future-steps'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <div className='paragraph-group'>
                  <SectionHeader sectionHeader='future steps'/>
                </div>
              </div>
              <Subsection header='API INTEGRATION' copy='Working with Django Rest Framework (DRF) improved my understanding of API development and integration. I learned how to design RESTful APIs, handle CRUD operations, and manage data efficiently.'/>
              <Subsection header='FULL Stack Development ' copy="Building the Hive app allowed me to strengthen my full-stack development skills. I gained insights into integrating frontend and backend components, ensuring smooth communication between the two."/>
              <Subsection header='Project Management' copy='Managing the development process from ideation to implementation taught me valuable project management skills. I learned how to prioritize tasks, collaborate with others, and iterate on designs based on feedback.'/>
              
            </div>
          </div>

         

        </div>

  



      </div>
    </div>
  )
}

export default HivePage
