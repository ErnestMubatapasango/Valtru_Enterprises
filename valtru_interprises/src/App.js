import React from 'react';
import './App.css';
import Navbar from './Navbar'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        
         <Routes>
          <Route path='/' exact  element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
         </Routes>
            
          
      </Router>
    
    </div>
  );
}

export default App;
