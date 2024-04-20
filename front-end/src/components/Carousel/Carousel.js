import React from 'react';
import './Carousel.css'

import Card from '../Card/Card';

const cards = [
  {
    imageUrl: '/images/snapshot/order-detail-navigation.png',
    projectTitle: 'order details navigation',
    category: 'design',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/onboarding.png',
    projectTitle: 'onboarding',
    category: 'design',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/order-detail-education.png',
    projectTitle: 'order details education & adoption',
    category: 'design',
    date: '2024',
  },
  {
    imageUrl: '/images/snapshot/harvest.png',
    projectTitle: 'harvest',
    category: 'design',
    date: '2021',
  },
  {
    imageUrl: '/images/snapshot/order-planning.png',
    projectTitle: 'order planning',
    category: 'design',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/pest-control.png',
    projectTitle: 'pest control game',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/nomad.png',
    projectTitle: 'nomad travel organizer',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/booknook.png',
    projectTitle: 'booknook library',
    category: 'development',
    date: '2023',
  },
  {
    imageUrl: '/images/snapshot/hive.png',
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

