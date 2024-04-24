import React, { useEffect } from 'react';
import './PestControlPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { NomadLayoutDev, PestControlLayout } from '../../components/GridLayout/GridLayout';
import Paragraph from '../../components/Paragraph/Paragraph';


const PestControlPage = () => {
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
      { text: `Pest Control is an engaging game that puts players in the shoes of a intrepid pest exterminator tasked with defending the city from a relentless invasion of pesky creatures. ` },
      { text: `The objective of this project was to create a game using HTML and CSS. Inspired by classic arcade games like Space Invader, I decided to add a unique twist by focusing on defending against pests instead of extraterrestrial threats. The game features pests with distinctive behaviors and allows players to upgrade their extermination tools for more effective pest control.` },
      { text: `By leveraging Figma for ideation and design, and HTML, CSS, and JavaScript for development, I completed this project over the course of two weeks as part of the GA - Software Engineering Immersive Bootcamp.` },
    
  ];
    
  const info = [
    { label: 'Role', copy: `Front End Developer` },
    { label: 'Tools', copy: 'Figma, HTML, CSS, Javascript, Github' },
    { label: 'Duration', copy: '~2 Weeks' },
  ];

  const development = [
    { text: `We utilized EJS for server-side rendering, Node.js for server logic, MongoDB for flexible data storage, and Postman for API testing and validation. ` },
  ];

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pest-control-page'>
      <TopNav bgColor='#D1E3FF' textColor='#363636'isDarkBG={false}/>
      <div className='pest-control-page-container'>
        <div className='hero-image-container'>
          <img src='' alt='od-nav'></img>
        </div>

        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection text={projectOverviewText} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group'>
                    <p>The ideation phase of this project involved several steps – Identifying Key Features, Creating Assets, and Designing Layouts- and took about 2-3 days to finalize.</p>
                  </div>
                  <div className='paragraph-group-80px'>
                    <PestControlLayout />
                  </div>
                  
                

                <div className='right-side-showcase padding-btm-80px'>
                    <Subsection header='Defining Color Palettes' copy="When defining our design's visual identity, I meticulously crafted a color palette that not only aligned with our desired aesthetics but also adhered to accessibility guidelines. I used Tailwind CSS generate a complete color scale based on our palette, so that our styling was consistent, cohesive, and user friendly. " paddingBottom='24px'/>
                    <img className='right-side-asset' src='/images/nomad/color-palette.png' alt='color-palette'></img>
                </div>
                
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

export default PestControlPage
