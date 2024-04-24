import React, { useEffect } from 'react';
import './NomadPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { NomadLayoutDesigns, NomadLayoutDev } from '../../components/GridLayout/GridLayout';
import Paragraph from '../../components/Paragraph/Paragraph';


const NomadPage = () => {
  const subMenuItems = [
    { menuText: 'project overview' },
    { menuText: 'research' },
    { menuText: 'definition' },
    { menuText: 'ideation' },
    { menuText: 'usability' },
    { menuText: 'design' },
    { menuText: 'future steps' },
  ];

  const projectOverviewText = [
    { text: `Nomad is a web app designed to streamline and organize your travel schedule, providing a centralized platform for logging and managing all your travel-related information.` },
    { text: `I collaborated with two team members on Nomad, a REST API project, with the goal of implementing full CRUD functionality (Create, Read, Update, and Delete) to deliver a seamless user experience. We utilized the EJS (Embedded JavaScript) templating engine for server-side rendering to facilitate dynamic and interactive user interfaces. This allowed us to efficiently generate HTML templates embedded with JavaScript code, enhancing the rendering capabilities of the application. We used Fetch API to interact with the REST API endpoints, which allowed asynchronous communication between the client and server, enabling dynamic updates without refreshing the entire page.` },
  ];
      
  const info = [
    { label: 'Role', copy: `Full Stack Engineer
    (Comprehensive)` },
    { label: 'Tools', copy: 'Figma, Node.js, Express, EJS, MongoDB, Postman,  Github' },
    { label: 'Team', copy: '3 Engineers' },
    { label: 'Duration', copy: '~2 Weeks' },
  ];

  const development = [
    { text: `We utilized EJS for server-side rendering, Node.js for server logic, MongoDB for flexible data storage, and Postman for API testing and validation. ` },
  ];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='nomad-page'>
      <TopNav bgColor='#FFD661' textColor='#363636'isDarkBG={false}/>
      <div className='nomad-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/nomad.png' alt='nomad'></img>
        </div>

        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection text={projectOverviewText} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group'>
                    <p>
                    During the ideation phase, we carefully outlined our Minimum Viable Product (MVP) along with our stretch goals, providing a clear roadmap for our project. We also crafted detailed user stories to help us empathize with our users, anticipate their needs, and refine our objectives. We then meticulously listed our Mongoose models and their associated properties. By defining the models and properties early in the process, we established a solid framework for efficient data handling and storage.
                    </p>
                  </div>
                </div>
                <div className='ul-booknook'>
                  <h6 className='semibold'>USER STORIES</h6>
                  <ul>
                    <li>As a user, I want to be able to have an overview of the weather, location (Google Maps), and travel itinerary so that I am able to create, view, edit, and delete agenda items.</li>
                    <li>As a user, I want to edit, delete, and move an agenda item so that I can keep my schedule as up-to-date as possible.</li>
                  </ul>
                </div>
                <NomadLayoutDesigns />
                
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container design'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='design'/>
                  <div className='paragraph-group-80px'>
                    <Subsection header='Creating Hi-Fi Wireframes' copy="I created high-fidelity wireframes in Figma as a visual guide for the team to identify essential components and map user flows. This allowed us to align on the Nomad app's structure and functionality." paddingBottom='24px'/>
                    <img src='/images/nomad/creating-hi-fi.png' alt='hi-fi designs'></img>
                  </div>

                  <div className='right-side-showcase padding-btm-80px'>
                    <Subsection header='Defining Color Palettes' copy="When defining our design's visual identity, I meticulously crafted a color palette that not only aligned with our desired aesthetics but also adhered to accessibility guidelines. I used Tailwind CSS generate a complete color scale based on our palette, so that our styling was consistent, cohesive, and user friendly. " paddingBottom='24px'/>
                    <img className='right-side-asset' src='/images/nomad/color-palette.png' alt='color-palette'></img>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
          

          <div className='nomad-code-divider-section'>
              <img src='/images/nomad/code.png' alt='code'/>
          </div>

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='development'/>
                <Paragraph text={development}/>
                
                <NomadLayoutDev />
                
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
              <Subsection header='Backend and Frontend Integration Challenges' copy='As a team, we struggled to connect the front and back end due to a complex database structure (a model within a model) coupled with difficulties in GitHub merges and commits. Eager to contribute, we inadvertently worked on the same files, leading to overwritten code and, in some instances, regressions in the functionality. Despite our setbacks, we managed to stand up the CREATE and READ functions.'/>
              <Subsection header='Refining the Project' copy="Not satisfied with the result, I wanted to take another stab at the project. Restarting the project from scratch, I reviewed resources from GA Bootcamp and YouTube tutorials to successfully implement the Update and Delete functionalities. I refined the user interface by aligning the CSS with our high-fidelity wireframes, making the experience more cohesive."/>
              <Subsection header='Future Plans' copy="To push the project further, I would love to introduce new features like user authentication and social sharing and make it mobile-responsive in the future. Also, incorporating React and Python into the tech stack would elevate the app's functionality. Despite its challenges, this project pushed me and expanded my understanding."/>
              
            </div>
          </div>

          
        </div>


      </div>
    </div>
  )
}

export default NomadPage
