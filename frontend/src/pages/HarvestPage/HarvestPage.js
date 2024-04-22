import React, { useEffect } from 'react';
import './HarvestPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import SubNav from '../../components/SubNav/SubNav'
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Subsection from '../../components/Subsection /Subsection';
import { AssetsOnLeft, AssetsOnRight } from '../../components/AssetShowcase/AssetShowcase';
import { HarvestGridLayout } from '../../components/GridLayout/GridLayout';



const HarvestPage = () => {

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
    { bodyParagraph: `Harvest is an app for health-conscious shoppers, offering locally-sourced, seasonal items from farmers markets. Developed over three weeks by a team including Anna Curl, Kate Ellis, Al Schmidt, Ali Villareal, and myself, the app aims to support local farmers and small businesses while providing a user-friendly shopping experience.` },
    { bodyParagraph: `Our journey began with thorough user research and competitive analysis, guiding us through user interviews, research, definition, and ideation phases. I led the design process, translating our vision into a lo-fi prototype and refining it into a high-fidelity version focused on the 'Add to Cart' and 'Checkout Process' screens.` },
    { bodyParagraph: `Throughout the process, I contributed to alignment, formatting, and wire-framing, ensuring a cohesive design. Our efforts culminated in five user tests with the initial high-fidelity prototype, which we used to refine the Harvest app in a subsequent iteration. The result is a meaningful solution that supports local businesses and provides a seamless alternative to traditional grocery shopping.` },
  ];
  
  const info = [
    { label: 'Role', copy: 'UX/UI Designer' },
    { label: 'Tools', copy: 'Adobe XD' },
    { label: 'Team', copy: '4 UX/UI Designers' },
    { label: 'Duration', copy: '~3 Weeks' },
  ];



  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='harvest-page'>
      <TopNav bgColor='#E6E870' textColor='#363636' isDarkBG={false}/>
      <div className='harvest-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/harvest.png' alt='harvest'></img>
        </div>
        <div className='main-content-container'> 
          <SubNav items={subMenuItems} />
          <ProjectOverviewSection paragraph={paragraph} info={info}/>

          <div className='whiteBG whiteBG-section-group'>
            <div className='whiteBG main-section-container research'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='research'/>
                  <div className='paragraph-group'>
                    <p>We conducted five user interviews and collected 77 survey responses to understand user's shopping habits, pain points, and motivations. We wanted to know how important local produce and farmer's markets are for health-conscious shoppers to gauge the viability of our app, especially during the COVID-19 pandemic.
                    </p>
                    <p>
                    Our user research found that shoppers did not like to spend more than an hour or two shopping. We also noted that most shoppers are willing to spend more at one store than frequent multiple stores to find discounted and cheaper items.
                    </p>
                  </div>
                </div>
                <Subsection header='competitive analysis' copy='Apps and services predominantly centered around large metropolitan areas and lacked engaging and user-friendly designs. In contrast, adjacent competitors thrived by providing packaged meal plans, fresh produce, and groceries sourced directly from local farmers.'/>
                <Subsection header='user interview' copy='The research identified key pain points related to crowds, product availability, and sourcing products across multiple locations.'/>
                <Subsection header='Google form survey' copy='Survey results revealed shared sentiments regarding the grocery shopping experience and time investment. However, notable discrepancies surfaced about individual dietary preferences and food choice lifestyles.'/>
                <img src='/images/harvest/research.png' alt='research'></img>
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container definition'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='definition'/>
                  <div className='paragraph-group'>
                    <Subsection header='user persona' copy='After organizing our user insights into an Affinity Diagram, we crafted a proto-persona centered around Gwen Martin, a dynamic young mom juggling the demands of both work and family life. Despite her hectic schedule, Gwen stands out as a health-conscious individual, particularly attentive to the dietary needs of her one-year-old child.' paddingBottom='0px'/>
                    <p>
                    This helped us develop a final user persona, helping us refine and personalize the user experience within the Harvest app. By focusing on Gwen's specific needs and preferences, We wanted to create a solution that resonates with the challenges faced by individuals like her, offering a tailored and meaningful shopping experience that aligns with her health-conscious lifestyle amid a busy routine.
                    </p>
                  </div>
                </div>
                
                <img src='/images/harvest/userpersona.png' alt='research'></img>
                <div className='vertical-rule-page'></div>
              </div>
            </div>

            <div className='whiteBG main-section-container ideation'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='ideation'/>
                  <div className='paragraph-group-80px'>
                    <Subsection header='feature prioritization matrix' copy="We brainstormed using the 'I Like, I Wish & What If' Diagram and the Feature Prioritization Matrix and developed some ideas and features to incorporate into the app. We distilled it down to three features that would make the most impact and improve the users' experience:"/>
                    <AssetsOnLeft />
                  </div>
                  <div className='paragraph-group-80px'>
                    <Subsection header='storyboard' copy="We created a user storyboard to ideate and enhance the shopping experience for the modern, health-conscious shopper. Our focus is on those seeking organic options for their families and wishing to avoid chain grocery stores. Through Harvest, our users can select from a diverse range of fresh, locally sourced foods, fostering a connection with the local economy. This design attempts to address today's conscientious consumers' specific needs and preferences."/>
                    <img src='/images/harvest/storyboard.png' alt='userflow'></img>
                  </div>
                  <div className='paragraph-group-80px'>
                    <Subsection header='user flow' copy="It was important that users could browse and shop before creating an account." paddingBottom='0px'/>
                    <p className='padding-btm-24px'>Our competitor analysis unveiled a common frustration among users as other grocery delivery apps restricted access until an account was created, causing stress and frustration. By creating a more user-friendly approach, we aim to improve the overall experience, making it seamless from creating an account to checkout.</p>
                    <img src='/images/harvest/userflow.png' alt='userflow'></img>
                  </div>
                  <div className='paragraph-group'>
                    <Subsection header='Lo-Fi Wireframes' copy="After defining the user and ideating different solutions, we independently sketched how we envisioned Harvest. Below are my lo-fi sketches. I hand-drew 18 frames to visualize the layout and design of the app." paddingBottom='0px'/>
                    <img src='/images/harvest/lo-fi.png' alt='lo-fi'></img>
                  </div>
                  <div className='vertical-rule-page'></div>
                </div>
                
              </div>
            </div>

            <div className='whiteBG main-section-container usability-test'>
              <div className='section-group-container'>
                <div className='main-section-group'>
                  <SectionHeader sectionHeader='usability testing'/>
                  <div className='paragraph-group'>
                    <Subsection copy="After designing the lo-fi prototype, we conducted five usability tests and analyzed the data. We identified three main issues:"/>
                    <AssetsOnRight />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          

          <div className='design-section'>
              <h6 className='design-header'>DESIGN INSPIRATION</h6>
              <img src='/images/harvest/design-inspo.png' alt='design-inspo'/>
          </div>

          <div className='tanBG main-section-container one-section'>
            <div className='section-group-container'>
              <div className='main-section-group'>
                <SectionHeader sectionHeader='design'/>
                <p>Together, we collaborated on building our hi-fi prototype. I specifically focused on designing and wireframing the 'Add to Cart' and 'Checkout' screens, ensuring smooth transitions between them. I iterated on these designs 2-3 times to achieve continuity and uniformity in our app's overall design.</p>
                <HarvestGridLayout />
                
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
              <Subsection header='Produce & Meal Subscription Boxes' copy='Develop a feature to offer curated boxes of seasonal local produce. This could include options for different box sizes, customization preferences, and delivery frequency.'/>
              <Subsection header='Recipe Suggestions' copy="Implement a feature that generates recipe suggestions based on the items in a shopper's cart. This could also include suggestions for additional ingredients needed to complete a recipe."/>
              <Subsection header='Runner/Vendor Sign Up' copy='Create a separate interface for runners and vendors to sign up and manage their accounts. This could include features for managing inventory, orders, and deliveries.'/>
              <Subsection header='Reward System' copy='Implement a more fleshed out reward system to incentivize frequent shoppers to continue supporting local farmers and businesses. This could include earning points for purchases that can be redeemed for discounts or other rewards.'/>
              <Subsection header='User Feedback and Iteration' copy='Gather feedback from users on the new features and use it to make improvements. Continue to iterate on the app to enhance the user experience and add new features based on user needs and preferences.'/>
              
            </div>
          </div>

         

        </div>

      </div>
    </div>
  )
}

export default HarvestPage
