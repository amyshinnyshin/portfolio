import React, { useEffect } from 'react';
import './OrderDetailsNavPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import SubNav from '../../components/SubNav/SubNav'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Subsection from '../../components/Subsection /Subsection';
import { ODDesignLayout, ODNavProblemLayout } from '../../components/GridLayout/GridLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import { ODNavQuotes } from '../../components/Quotes/Quotes';
// import Paragraph from '../../components/Paragraph/Paragraph';


const OrderDetailsNavPage = () => {
  const subMenuItems = [
    { menuText: 'project overview' },
    { menuText: 'problem' },
    { menuText: 'objectives' },
  ];

  const projectOverviewText = [
    { text: `As we approached the Beta stage, a decision needed to be made regarding shipment navigation. The introduction of auto-routing, a feature that assigns orders to Ship From Locations based on proximity to customers, and planning status highlighted the need for an order planning page within the order details. This page allows merchants to review and manage exceptions with the full context of the order and planning actions. However, the tab navigation pattern limited the hierarchy and relationship between an order and its shipments.` },
    { text: `By implementing the left menu navigation concept, we aimed to improve the user experience and streamline the navigation flow in the Order Details section for the Beta release. We believed this concept would provide a clearer delineation between order-level information and planning actions, and shipment actions, ensuring a better hierarchy and relationship between orders and their shipments.` },
  ];
  
  const info = [
    { label: 'Role', copy: 'Product Designer' },
    { label: 'Tools', copy: 'Figma' },
    { label: 'Team', copy: `1 Product Lead, 1 Product Designer, 6 Engineers, 1 QA` },
    { label: 'Duration', copy: '~6 Weeks' },
  ];

  const research = [
    { text: `As we approached Beta, the team needed to make a decision regarding the navigation within Order Details. The current horizontal tab navigation presented usability challenges, including limited space for tab labels, reduced visibility of tabs not in view, and difficulties in adapting to different screen sizes. Additionally, the ongoing auto-routing work highlighted a need to create hierarchy between planning and order level views and shipment level views. This redesign aims to address these challenges and improve the overall user experience.` },
    
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='order-details-nav-page'>
      <TopNav bgColor='#709BEE' textColor='#363636'isDarkBG={false}/>
      <div className='od-nav-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/od-nav.png' alt='od-nav'></img>
        </div>

        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection text={projectOverviewText} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container problem'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='problem'/>
                  <Paragraph text={research}/>
                </div>
                <ODNavProblemLayout />
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container objectives'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='objectives'/>
                  <ODNavQuotes />
                  <p>
                    This helped us develop a final user persona, helping us refine and personalize the user experience within the Harvest app. By focusing on Gwen's specific needs and preferences, We wanted to create a solution that resonates with the challenges faced by individuals like her, offering a tailored and meaningful shopping experience that aligns with her health-conscious lifestyle amid a busy routine.
                    </p>
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
              <Subsection header='improve usability' copy='Enhance the usability of the Order Details interface by providing clearer navigation options that are easier to access and understand.'/>
              <Subsection header='increase visibility and responsiveness' copy="Ensure that all tabs are visible and easily accessible and create a design that is responsive and adapts well to different screen sizes, ensuring a consistent and user-friendly experience across devices."/>
              <Subsection header='Establish Hierarchy And Support Auto-Routing Work' copy='Clearly define the hierarchy between planning and order level views and shipment level views, making it easier for users to understand the relationship between different levels of information.'/>
              <div className='vertical-rule-page-80px'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container research'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='research'/>
                  <div className='paragraph-group'>
                    <p>While the majority (~95%) of our merchants have less than 2 shipments per order, there are edge cases where some merchants have more than 10+ shipments per order, particularly as part of a subscription model. These edge cases highlight the need for flexibility in the Order Details interface to accommodate a wide range of merchant needs.</p>
                  </div>
                  <img src='/images/od-nav/research-graph.png' alt='research' />
                  <div className='vertical-rule-page'></div>
                </div>
              </div>

            </div>

            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group'>
                    <p>When exploring designs for left sidebar, I considered several concepts. One concept involved a single sidebar that unified both the Shipments and Returns sections into a singular menu. Another concept was a double sidebar layout. In one variation,  the left section remained static and could expand and collapse a secondary menu. The second variation allowed both sidebars to expand and collapse. Each of these concepts aimed to improve navigation and provide a more intuitive user experience.</p>
                    <p>Ultimately, our goal was to test the two best versions of the left sidebar design with users. This testing would help us determine which design was more effective in terms of usability.</p>
                  </div>

                  <ODDesignLayout />

                  <div className='vertical-rule-page'></div>
                </div>
              </div>

            </div>

            <div className='whiteBG main-section-container usability-testing'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='usability testing'/>
                  <div className='paragraph-group'>
                    <p>I conducted 30-minute to 1-hour sessions via Zoom with 7 Alpha Merchants to gather feedback on the first impressions of the Left Sidebar (V1-single sidebar & V2-double sidebar) and to observe how merchants would complete the following tasks - 'Create Another Shipment,' 'Delete a Shipment,' and 'Create a Return.'</p>
                    <p>During the session, we shared Figma prototypes to simulate the new interface, asking specific tasks related to sidebar navigation and action buttons, encouraging merchants to think aloud while performing tasks, and recording sessions for analysis.</p>
                  </div>

                  <img src='/images/od-nav/usability-testing-results.png' alt='test-results'/>

                  <div className='vertical-rule-page'></div>
                </div>
              </div>

            </div>

            <div className='whiteBG main-section-container learnings'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='learnings'/>
                  <div className='paragraph-group'>
                    <p>Based on these insights, I recommended proceeding with the double sidebar design for Beta. This design choice was favored for its use of intuitive icons for Order Summary, Shipments, and Returns, enabling quick recognition and navigation. Furthermore, the double sidebar's clear separation of actions (top-level actions on the single sidebar) and the ability to manage each "shipment type" separately was seen as advantageous, particularly given the limited use of the Returns feature among the majority of users.</p>
                  </div>

                  <Subsection header='Order Summary Preference' copy="User preferences for interface elements such as the placement of the Order Summary can vary. It's important to consider flexibility in layout options to accommodate different user needs and preferences."/>
                  <Subsection header='Icon Recognition' copy="Some icons, like the Return icon, may not be immediately recognizable to users. Providing clear labels or tooltips can help prevent misinterpretation and improve user understanding."/>
                  <Subsection header='Self Serve User Education' copy='Self-serve education tools, such as tooltips or guided tours, can help users navigate new interfaces and features, reducing the need for customer support and improving overall user satisfaction.'/>
                </div>
              </div>

            </div>



          </div>
          

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='design'/>
                <div className='paragraph-group'>
                    <p>The design features a double sidebar layout, with one sidebar dedicated to Order Summary, Shipments, and Returns icons, and the other sidebar reserved for additional navigation and contextual information.</p>
                    <p>Key improvements include clearer iconography to address user confusion, particularly regarding the Return icon. Additionally, tooltips have been added to the double sidebar to provide further clarification on icon meanings, addressing user feedback for more explicit explanations.</p>
                </div>
                <img src='/images/od-nav/od-nav.gif' alt='od-nav-designs'/>
                
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

export default OrderDetailsNavPage
