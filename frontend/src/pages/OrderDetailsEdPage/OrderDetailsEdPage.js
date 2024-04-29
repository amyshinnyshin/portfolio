import React, { useEffect } from 'react';
import './OrderDetailsEdPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import SubNav from '../../components/SubNav/SubNav'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Subsection from '../../components/Subsection /Subsection';
import { ODDesignLayout, ODEDDesignLayout} from '../../components/GridLayout/GridLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import { ODEdQuotes } from '../../components/Quotes/Quotes';



const OrderDetailsEdPage = () => {
  const subMenuItems = [
    { menuText: 'project overview' },
    { menuText: 'problem' },
    { menuText: 'objectives' },
  ];
  const projectOverviewText = [
      { text: `Before transitioning from Alpha to GA, we introduced a new feedback form for merchants opting out of the new experience. This feedback highlighted a key discoverability and usability issue: users are struggling to find the "Create Another Shipment" and "Create Return" buttons in the new experience.` },
      { text: `In the old experience, these actions were prominently located at the top of the modal, but in the new experience, we've moved them into the collapsed left sidebar. This change has led to confusion and difficulty for users in locating these essential actions.` },
      { text: `We aimed to address these small issues through self-serve education. Our goal was to minimize the need for customer support by ensuring that users could easily understand and navigate the new interface. This proactive approach aimed to reduce the potential influx of support calls upon the release to GA.` },
    ];
    
  const info = [
    { label: 'Role', copy: `Product Designer` },
    { label: 'Tools', copy: 'Figma' },
    { label: 'Team', copy: '1 Product Lead, 1 Product Designer, 6 Engineers, 1 QA' },
    { label: 'Duration', copy: '~3 Weeks' },
  ];

  const research = [
    { text: `Before GA in February 2024, we provided our merchants with the option to revert from the new order details to the old order details on an order basis. We did this to understand why they were reverting, seeking to identify any bugs or missing functionality before GA. Despite monitoring usability issues via LogRocket, we wanted to gather direct feedback from our merchants without completely disrupting their workflow. To achieve this, we implemented a feedback form for users when they opted out, allowing us to gather information that we may not have been able to glean from LogRocket.` },
    
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className='od-ed-page'>
      <TopNav bgColor='#D4D4FA' textColor='#363636'isDarkBG={false}/>
      <div className='od-ed-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/od-ed.png' alt='od-ed'></img>
        </div>

        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection text={projectOverviewText} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container research'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='research'/>
                  <Paragraph text={research}/>

                  <div className='paragraph-group'>
                    <Subsection header='Feedback Analysis' copy="Out of 10,000 feedback form responses received, 833 respondents expressed that the 'Create Another Shipment' and/or 'Create Return' buttons were not easily noticeable or intuitive in the new experience. This feedback highlights a significant usability concern that needs to be addressed to enhance the user experience."/>
                    <img src='/images/od-ed/research.png' alt='research'/>
                  </div>

                  <Subsection header='User Behavior' copy="We also observed merchants via LogRocket struggle to find the two actions. They would often resort to clicking the ‘Shipment Action’ dropdown (we assume due to its proximity of the actions in the  old experience), indicating a need for improved visibility and accessibility of these key actions."/>
                  
                </div>
                
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container problem'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='problem'/>
                  <p>During the transition from Alpha to GA, feedback from merchants opting out of the new experience highlighted a significant usability issue. Users are struggling to find the "Create Another Shipment" and "Create Return" buttons in the new interface, which were previously prominently displayed at the top of the modal in the old experience.  In the new experience, these essential actions have been moved into the collapsed left sidebar, leading to confusion and difficulty in navigation. This change has led to confusion and usability issues, and addressing this issue through self-serve education is crucial to minimize support calls and ensure a smooth transition to GA.</p>
                  <img src='/images/od-ed/current-vs-new.png' alt='research' />
                  
                  <div className='vertical-rule-page'></div>
                </div>
              </div>

            </div>

            <div className='whiteBG main-section-container objectives'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='objectives'/>
                  <ODEdQuotes />
                  
                </div>
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container goals'>
              <div className='section-group-container'>
              <div className='main-section-group'>
                <div className='paragraph-group'>
                  <SectionHeader sectionHeader='goals'/>
                </div>
              </div>
              <Subsection header='Improve Discoverability and Usability' copy='Make it intuitive for users to understand and navigate the new interface without the need for extensive customer support.'/>
              <Subsection header='Reduce Support Contact' copy="Minimize the need for customer support by providing self-serve education tools that address discoverability and usability issues."/>
              <Subsection header='Prepare for GA Release' copy='Ensure that the interface is user-friendly and efficient before the General Availability release to address any potential issues that could lead to negative feedback or adoption challenges.'/>
              <div className='vertical-rule-page-80px'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group'>
                    <p>I kicked off the sprint with the lead product manager. We initially considered reusing the opt-in carousel modal because it could help address some of the educational gaps our merchants were facing. However, we realized that the carousel pattern had its limitations, as users might close the modal before navigating through all the carousel slides. </p>
                    <p>We brainstormed strategies on how to highlight, educate, and direct merchants to discover and learn the new location of these actions. This involved introducing the information, providing a guided tour, and allowing users to re-access the tour for reference.</p>
                  </div>
                  <img src='/images/od-ed/ideation.png' alt='ideation'/>

                  
                </div>
              </div>

            </div>
          </div>
          

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='design'/>
                <p>We implemented a modal that allows users to preview the four actions or features that caused confusion. Additionally, we included the ability to take a tour to see where to find those actions, as well as a way to re-access the modal and tour for future reference.</p>
                <ODEDDesignLayout />
                
              </div>
              
            </div>
          </div>

          <div className='whiteBG main-section-container one-section future-steps'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <div className='paragraph-group'>
                  <SectionHeader sectionHeader='future steps'/>
                </div>
              </div>
              <Subsection header='Continuous Improvement' copy='Establish a feedback loop with users to gather ongoing feedback on Order Details and use this feedback to identify areas for improvement and prioritize enhancements.'/>
              <Subsection header='Monitoring & Analytics ' copy="Monitor user interactions with the Order Details interface using LogRocket and MGMT and use this data to identify usage patterns, pain points, and areas for optimization."/>
              <Subsection header='USER education & Support' copy='Provide resources and support to help users understand and make the most of Order Details.'/>
  
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderDetailsEdPage
