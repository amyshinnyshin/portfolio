import React from 'react'
import './OrderDetailsNavPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'

const OrderDetailsNavPage = () => {
  const paragraph = [
    { bodyParagraph: `As we approached the Beta stage, a decision needed to be made regarding shipment navigation. The introduction of auto-routing, a feature that assigns orders to Ship From Locations based on proximity to customers, and planning status highlighted the need for an order planning page within the order details. This page allows merchants to review and manage exceptions with the full context of the order and planning actions. However, the tab navigation pattern limited the hierarchy and relationship between an order and its shipments.` },
    { bodyParagraph: `By implementing the left menu navigation concept, we aimed to improve the user experience and streamline the navigation flow in the Order Details section for the Beta release. We believed this concept would provide a clearer delineation between order-level information and planning actions, and shipment actions, ensuring a better hierarchy and relationship between orders and their shipments.` },
  ];
  
  const info = [
    { label: 'Role', copy: 'Product Designer' },
    { label: 'Tools', copy: 'Figma' },
    { label: 'Team', copy: `1 Product Lead, 1 Product Designer, 6 Engineers, 1 QA` },
    { label: 'Duration', copy: '~6 Weeks' },
  ];

  return (
    <div className='order-details-nav-page'>
      <TopNav bgColor='#709BEE' textColor='#363636'isDarkBG={false}/>
      <div className='order-details-nav-page-container'>
        <div className='od-nav-page-container'>
        <div className='hero-image-container'>
          <img src='' alt='od-nav'></img>
        </div>

        <ProjectOverviewSection paragraph={paragraph} info={info}/>

      </div>



      </div>
    </div>
  )
}

export default OrderDetailsNavPage
