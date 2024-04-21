import React from 'react';
import './Carousel.css'

import Card from '../Card/Card';

const cards = [
  {
    imageUrl: '/images/snapshot/order-detail-navigation.png',
    url: 'order-details-navigation',
    projectTitle: 'order details navigation',
    category: 'design',
    date: '2023',
    projectHasChip: true,
    chipBgColor: '#2D6AE6', 
    chipTextColor: '#FFFFFF', 
  },
  {
    imageUrl: '/images/snapshot/onboarding.png',
    url: 'onboarding',
    projectTitle: 'onboarding',
    category: 'design',
    date: '2023',
    projectHasChip: true,
    chipBgColor: '#042E40', 
    chipTextColor: '#FFFFFF', 
  },
  {
    imageUrl: '/images/snapshot/order-detail-education.png',
    url: 'order-details-education-&-adoption',
    projectTitle: 'order details education & adoption',
    category: 'design',
    date: '2024',
    projectHasChip: true,
    chipBgColor: '#B3B3F6', 
    chipTextColor: '#363636', 
  },
  {
    imageUrl: '/images/snapshot/harvest.png',
    url: 'harvest',
    projectTitle: 'harvest',
    category: 'design',
    date: '2021',
  },
  {
    imageUrl: '/images/snapshot/order-planning.png',
    url: 'order-planning',
    projectTitle: 'order planning',
    category: 'design',
    date: '2023',
    projectHasChip: true,
    chipBgColor: '#BAD2D0', 
    chipTextColor: '#363636', 
  },
  {
    imageUrl: '/images/snapshot/pest-control.png',
    url: 'pest-control',
    projectTitle: 'pest control game',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/nomad.png',
    url: 'nomad',
    projectTitle: 'nomad travel organizer',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/booknook.png',
    url: 'booknook',
    projectTitle: 'booknook library',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/hive.png',
    url: 'hive',
    projectTitle: 'hive job kanban board',
    category: 'development',
    date: '2024',
  },
];

const Carousel = () => {
  return (
    <div className='project-carousel'>
      <div className='top-section'>
        <div className='dropdown'>
          <h5>All Works</h5>
          <div className='icon-container'>
            <img className='caret' src='/icons/caret.png' alt='caret'/>
          </div>
        </div>
      </div>
      <div className='carousel-container'>
        {cards.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            projectHasChip={card.projectHasChip}
            chipBgColor={card.chipBgColor}
            chipTextColor={card.chipTextColor}
            imageUrl={card.imageUrl}
            projectTitle={card.projectTitle}
            category={card.category}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

