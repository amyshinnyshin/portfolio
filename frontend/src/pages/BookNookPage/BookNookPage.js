import React, { useEffect } from 'react';
import './BookNookPage.css'

import TopNav from '../../components/TopNav/TopNav'
import ProjectOverviewSection from '../../components/ProjectOverviewSection/ProjectOverviewSection'
import Subsection from '../../components/Subsection /Subsection';
import SubNav from '../../components/SubNav/SubNav';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { BookNookLayoutBrand, BookNookLayoutDesigns } from '../../components/GridLayout/GridLayout';


const BookNookPage = () => {
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
      { text: `Booknook is an app designed to help users discover, organize, and enjoy books. Inspired by popular platforms like Goodreads and Spotify, it aims to help simplify how people engage with books.` },
      { text: `The objective of this project was to develop a Single Page Application (SPA) using React and a third-party API. I utilized the Open Book API and created custom React components to implement various features such as search functionality, book summaries, personal libraries, and more. The design and ideation were done using Figma, and then I implemented the frontend using React, connecting it to the Open Book API to retrieve and display book details.` },
    ];

  const info = [
    { label: 'Role', copy: `Full Stack Engineer
    (Comprehensive)`},
    { label: 'Tools', copy: 'Figma, React, Github' },
    { label: 'Duration', copy: '~2 Weeks' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='booknook-page'>
      <TopNav bgColor='#9BA8F2' textColor='#363636'isDarkBG={false}/>
      
      <div className='booknook-page-container'>

        <div className='hero-image-container'>
          <img src='/images/hero-image/booknook.png' alt='booknook'></img>
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
                    I started by focusing on the needs of users who are actively searching for jobs. I brainstormed user stories to capture the key functionalities that would address these needs. This involved identifying the core tasks that users would need to perform, such as adding job application details, tracking application status, and organizing their job search process.
                    </p>
                  </div>
                </div>
                <div className='ul-booknook'>
                  <h6 className='semibold'>USER STORIES</h6>
                  <ul>
                    <li>As a user, I want to discover new books easily, so I can find my next great read.</li>
                    <li>As a user, I want to keep track of books I want to read in the future, so I can easily access them later.</li>
                    <li>As a user, I want to organize my books into different categories, so I can manage my reading list efficiently.</li>
                  </ul>
                </div>
                <div className='ul-booknook'>
                  <h6 className='semibold'>KEY FEATURES</h6>
                  <ul>
                    <li>Browse Books: Users can explore a vast library of books with engaging book tiles, displaying cover images and brief descriptions, enticing users to delve deeper.</li>
                    <li>Search Functionality: A robust search bar enables users to find specific books quickly. They can search by title, author, or keywords, ensuring they always find the books they're looking for.</li>
                    <li>Book Summaries: Each book comes with a detailed summary, allowing users to get a glimpse of the content and style before deciding to read it.</li>
                    <li>Like and Library: Users can "like" books to add them to their personal library. This feature allows for easy access to favorite books and tracks reading progress.</li>
                    <li>User-Friendly Interface: The app boasts a sleek and intuitive interface, making book discovery and management a delightful experience. Navigation is seamless, ensuring users can focus on their reading journey.</li>
                  </ul>
                </div>
                
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
                  <BookNookLayoutBrand />

                  
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
                <div className='paragraph-group'>
                    <p>Using React, I created the frontend components and integrated them with the Open Book API to fetch and display book data. I focused on building features such as book tiles, search functionality and book summaries. Each feature was developed iteratively, ensuring that it met the requirements outlined in the user stories and design specifications.</p>
                    <p>I also implemented responsive design principles to ensure that the app was accessible and functional. This involved testing the app and making adjustments to the layout and styling as needed.</p>
                </div>
                <BookNookLayoutDesigns />
                
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

export default BookNookPage
