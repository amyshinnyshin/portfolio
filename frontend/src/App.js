import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//CSS Styling
import './App.css';

//Pages
import HomePage from './pages/HomePage/HomePage'
import OrderDetailsNavPage from './pages/OrderDetailsNavPage/OrderDetailsNavPage'
import HarvestPage from './pages/HarvestPage/HarvestPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/work/order-details-navigation' element={<OrderDetailsNavPage/>}/>
        <Route path='/work/harvest' element={<HarvestPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
