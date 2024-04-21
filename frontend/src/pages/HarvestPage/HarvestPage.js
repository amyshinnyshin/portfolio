import React from 'react'
import './HarvestPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'

const HarvestPage = () => {

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

  return (
    <div className='harvest-page'>
      <TopNav bgColor='#E6E870' textColor='#363636' isDarkBG={false}/>
      <div className='harvest-page-container'>
        <div className='hero-image-container'>
          <img src='/images/hero-image/harvest.png' alt='harvest'></img>
        </div>

        <ProjectOverviewSection paragraph={paragraph} info={info}/>

      </div>
    </div>
  )
}

export default HarvestPage
