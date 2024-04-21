
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//CSS Styling
import './App.css';

//Pages
import HomePage from './pages/HomePage/HomePage';
import OrderDetailsNavPage from './pages/OrderDetailsNavPage/OrderDetailsNavPage';
import HarvestPage from './pages/HarvestPage/HarvestPage';

import BookNookPage from './pages/BookNookPage/BookNookPage';
import HivePage from './pages/HivePage/HivePage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import OrderDetailsEdPage from './pages/OrderDetailsEdPage/OrderDetailsEdPage';
import NomadPage from './pages/NomadPage/NomadPage';
import PestControlPage from './pages/PestControlPage/PestControlPage';
import OrderPlanningPage from './pages/OrderPlanningPage/OrderPlanningPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/work/order-details-navigation' element={<OrderDetailsNavPage />} />
        <Route path='/work/onboarding' element={<OnboardingPage />} />
        <Route path='/work/order-details-education-&-adoption' element={<OrderDetailsEdPage />} />
        <Route path='/work/harvest' element={<HarvestPage/>}/>
        <Route path='/work/order-planning' element={<OrderPlanningPage />}/>
        
        
        <Route path='/work/pest-control' element={<PestControlPage />}/>
        <Route path='/work/nomad' element={<NomadPage />}/>
        <Route path='/work/booknook' element={<BookNookPage/>}/>
        <Route path='/work/hive' element={<HivePage/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;
