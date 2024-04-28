import React, { useEffect } from 'react';
import './PestControlPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { PestControlLayout } from '../../components/GridLayout/GridLayout';
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
    { text: `Using HTML, CSS, and JavaScript, I structured the game code to reflect the wireframes and prototypes created during the ideation/design phase. I used HTML to define the page structure of the game. CSS to style and position elements on the page, ensuring a visually appealing layout and responsive design, and JavaScript to implement game logic – from controlling the behavior of dynamic pests and managing user interactions to handling upgrades and win/loss.` },
  ];

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pest-control-page'>
      <TopNav bgColor='#D1E3FF' textColor='#363636'isDarkBG={false}/>
      <div className='pest-control-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/pest-control.png' alt='pest-control-game'></img>
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
                  <div className='paragraph-group-160px'>
                    <PestControlLayout />
                  </div>
                  
                

                <div className='left-side-showcase padding-btm-160px'>
                    <img className='left-side-asset' src='/images/pest-control/lo-fi.png' alt='lo-fi'></img>
                    <Subsection header='IDENTIFYING KEY FEATURES' copy="The first step was to define key features for the game. During brainstorming sessions, I outlined essential elements such as dynamic pests and their behaviors, extermination tools – how users could use an upgrade, win/loss, and any other game mechanics that would contribute to the overall gaming experience." />
                </div>

                <div className='paragraph-group-160px'>
                  <Subsection header='CREATING ASSETS' copy="After defining the key features, the next step was generating the necessary game assets. Since I wanted Pest Control to have retro 80's arcade game aesthetics, I wanted to incorporate pixelated graphics into the design. However, finding assets in this specific style proved challenging—either they were difficult to come by, or the available assets didn't match the intended aesthetic, so I created them from scratch in Figma." paddingBottom='24px'/>
                  <img src='/images/pest-control/assets.png' alt='assets'></img>
                </div>

                <div className='right-side-showcase padding-btm-80px'>
                  <Subsection header='Designing Layouts' copy="The next step involved designing the layout and interactions for the game page. I created wireframes to position elements and show how players would interact. While I wanted to stay true to Space Invader, I wanted to add an 'upgrades store’. Balancing homage and innovation, I integrated this feature to provide a familiar yet enhanced gaming experience." paddingBottom='24px'/>
                  <img className='right-side-asset' src='/images/pest-control/layout.png' alt='color-palette'></img>
                </div>


                
              </div>
            </div>
          </div>
          

          <div className='pest-control-code-divider-section'>
              <img src='/images/pest-control/code.png' alt='code'/>
          </div>

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='development'/>
                <Paragraph text={development}/>
                
                <img className='pest-control-gif' src='/images/pest-control/pest-control-gif.gif' alt='color-palette'></img>
                
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
              <Subsection header='Limited Gameplay Expansion' copy='I was able to capture the essence of a nostalgic arcade-style game, but due to time, I could only create one level with two different types of pests. I want to expand the gameplay with multiple levels, each presenting unique challenges and escalating difficulty.'/>
              <Subsection header='Testing Throughout Development' copy="I wish I could have conducted testing throughout the ideation, design, and development process to identify and address any issues that might affect gameplay or user experience."/>
              <Subsection header='Utilizing React' copy="Since this was the first project in our General Assembly Bootcamp, we hadn't yet been introduced to React. I wonder how incorporating React as the frontend library could have facilitated a faster and more efficient iteration process and made the project more robust and scalable."/>
              <Subsection header='Valuable Experience' copy="Despite the constraints, this project was a valuable learning experience. I look forward to further refining 'Pest Control' and exploring future development possibilities."/>
              
            </div>
          </div>

          
        </div>

  



      </div>
    </div>
  )
}

export default PestControlPage
