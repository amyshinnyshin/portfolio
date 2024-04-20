// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//CSS Styling
import './App.css';

//Pages
import HomePage from './pages/HomePage/HomePage'

//Components
import TopNav from './components/TopNav/TopNav'


function App() {
  return (
    <div className="App">
      <TopNav />
      <HomePage />
    </div>
  );
}

export default App;
