import React from 'react'
import './GridLayout.css'

const HarvestGridLayout = () => {
  return (
    <div className='harvest-grid-layout'>

        <img src='/images/harvest/selection-options.png' alt='selection-options'/>
        <img src='/images/harvest/search.png' alt='search-feature'/>
        
        <img src='/images/harvest/cart-feature.png' alt='cart-feature'/>
        <img src='/images/harvest/add-to-cart.png' alt='add-to-cart-options'/>
        
        <img className='full-width' src='/images/harvest/hi-fi.png' alt='hi-fi'/>
        
    </div>
  )
}

const HiveGridLayout = () => {
  return (
    <div className='hive-grid-layout'>

      <img className='full-width' src='/images/hive/hive-interaction.gif' alt='hive-interaction'/>
        
      <img src='/images/hive/adding-comment.png' alt='adding-comments'/>
      <img src='/images/hive/editing-deleting-comment.png' alt='editing-deleting-comments'/>
      
      <img className='full-width' src='/images/hive/kanban-board.png' alt='hive-kanban'/>
        
    </div>
  )
}

const BookNookLayoutBrand = () => {
  return (
    <div className='row-grid-layout'>

      <img className='full-width' src='/images/booknook/booknook-logo.png' alt='booknook-logo'/>
      <img className='full-width' src='/images/booknook/hi-fi.png' alt='booknook-hi-fi'/>
        
    </div>
  )
}

const BookNookLayoutDesigns = () => {
  return (
    <div className='row-grid-layout'>

      <img src='/images/booknook/dropdown.png' alt='dropdown'/>
      <img src='/images/booknook/book-selection.png' alt='book-selection'/>
      <img className='full-width' src='/images/booknook/booknook-gif.gif' alt='booknook-gif'/>
        
    </div>
  )
}

const NomadLayoutDesigns = () => {
  return (
    <div className='design-grid-layout'>

      <div className='full-width'>
        <div className='sidebar-and-img-container'>
          <div className='sidebar'>
            <div className='sidebar-description'>
              <div className='descriptive-header'>
                <h6 className='semibold'>MVP</h6>
                <h5 className='descriptive'>a model with RESTful routes and full CRUD</h5>
              </div>
              <p>Users can effortlessly create, edit/update, read and delete a travel plan to personalize their travel itinerary with ease.</p>
            </div>
          </div>
          <div className='centered-asset purple-bg'>
            <img src='/images/nomad/mvp.png' alt='mvp-design'/>
          </div>
          
          
        
        </div>
      </div>

      <div className='full-width'>
        <div className='sidebar-and-img-container'>
          <div className='centered-asset yellow-bg'>
            <img src='/images/nomad/stretch-goal.png' alt='stretch-goals'/>
          </div>
          
          <div className='sidebar'>
            <div className='sidebar-description'>
              <div className='descriptive-header'>
                <h6 className='semibold'>STRETCH GOALS</h6>
                <h5 className='descriptive'>real-time insights with APIs</h5>
              </div>
              <p>By integrating weather API and Google Maps, users can gain instant access to live updates, ensuring they stay informed about weather conditions and navigate with precision.</p>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  )
}

const NomadLayoutDev = () => {
  return (
    <div className='row-grid-layout nomad'>

      <img className='full-width' src='/images/nomad/hi-fi.png' alt='nomad-hi-fi'/>
      <img className='full-width' src='/images/nomad/nomad-gif.gif' alt='booknook-hi-fi'/>
        
    </div>
  )
}

const PestControlLayout = () => {
  return (
    <div className='pest-control-grid-layout'>

      <img className='full-width' src='/images/pest-control/logo.png' alt='logo'/>
        
      <img src='/images/pest-control/pest.png' alt='pests'/>
      <img src='/images/pest-control/tools.png' alt='tools'/>
      
      <img className='full-width' src='/images/pest-control/hi-fi.png' alt='hive-kanban'/>
        
    </div>
  )
}

const ODNavProblemLayout = () => {
  return (
    <div className='design-grid-layout'>

      <div className='full-width'>
        <div className='sidebar-and-img-container'>
          <div className='sidebar'>
            <div className='sidebar-description'>
              <div className='descriptive-header'>
                <h6 className='semibold'>PROBLEM</h6>
                <h5 className='descriptive'>lack of hierarchy between orders and shipments</h5>
              </div>
              <p>Horizontal tabs makes it difficult for users to understand the relationship between different levels of information and navigate the Order Details effectively.</p>
            </div>
          </div>
          <div className='centered-asset blue-bg'>
            <img src='/images/od-nav/horizontal-tabs.png' alt='horizontal-tabs'/>
          </div>
        
          
        
        </div>
      </div>

      <div className='full-width'>
        <div className='sidebar-and-img-container'>
          <div className='left-asset lime-bg'>
            <img src='/images/od-nav/more-tab.png' alt='more-tabs'/>
          </div>

      
          <div className='sidebar'>
            <div className='sidebar-description'>
              <div className='descriptive-header'>
                <h6 className='semibold'>PROBLEM</h6>
                <h5 className='descriptive'>limited visibility of tabs</h5>
              </div>
              <p>Horizontal tabs can become crowded, especially on smaller screens. Tabs that are not currently in view can be less noticeable and user maybe overlook them.</p>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  )
}

const ODDesignLayout = () => {
  return (
    <div className='od-nav-grid-layout'>

      <img src='/images/od-nav/tooltip.png' alt='tooltip'/>
      <img src='/images/od-nav/expanded.png' alt='one-menu'/>

      <img className='full-width' src='/images/od-nav/explorations.png' alt='explorations'/>
      
      <img className='full-width' src='/images/od-nav/vertical-menu.png' alt='vertical-menu'/>
        
    </div>
  )
}



export { HarvestGridLayout, HiveGridLayout, BookNookLayoutBrand, BookNookLayoutDesigns, NomadLayoutDesigns, NomadLayoutDev, PestControlLayout, ODNavProblemLayout, ODDesignLayout }
