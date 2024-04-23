import React, { useEffect } from 'react';
import './NomadPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { NomadLayoutDesigns } from '../../components/GridLayout/GridLayout';
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
    { text: `Using React, I created the frontend components and integrated them with the Open Book API to fetch and display book data. I focused on building features such as book tiles, search functionality and book summaries. Each feature was developed iteratively, ensuring that it met the requirements outlined in the user stories and design specifications.` },
    { text: `I also implemented responsive design principles to ensure that the app was accessible and functional. This involved testing the app and making adjustments to the layout and styling as needed.` },
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
                  <div className='paragraph-group'>
                    <Subsection header='CREATING High Fidelity Wireframes' copy="I translated the initial concepts and user stories into visual designs via Figma. I wanted to capture the app’s layout, interactions, and visual elements before I started to code. I started by defining the overall structure of the app like navigation and key components, creating screens for browsing books, searching, and viewing book details." paddingBottom='0px'/>
                    <p>I then added more detailed design elements, such as typography, colors, icons, and imagery, which really brought the vision to life. I also iterated and refined the layout and design elements through the coding process as well, focusing usability and making sure that information and actions were easily accessible to  users.</p>
                  </div>
                  

                  
                </div>
                
              </div>
            </div>

          </div>
          

          <div className='booknook-code-divider-section'>
              <img src='/images/booknook/code.png' alt='code'/>
          </div>

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='development'/>
                <Paragraph text={development}/>
                
                <NomadLayoutDesigns />
                
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
              <Subsection header='API INTEGRATION' copy='Integrating the Open Book API taught me the intricacies of working with external data sources, teaching me how to find the right documentation, and integrating the source properly. This process deepened my understanding of API integration and how to effectively use external data in applications. It also highlighted the importance of thorough research and documentation reading when working with third-party APIs.'/>
              <Subsection header='REACT DEVELOPMENT ' copy="Working with React, I've developed a deeper understanding of component-based UI development, enabling me to create more modular and reusable code. This allowed me to build interfaces that are not only dynamic but also highly interactive, enhancing the user experience."/>
              
            </div>
          </div>

          
        </div>


      </div>
    </div>
  )
}

export default NomadPage
