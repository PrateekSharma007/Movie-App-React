import React from 'react';
// import "./App.css"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headers/Header';
import Home from './Pages/home/Home';


function App() {
  return (
    
    <div className="main">
      
      <Router>
      <Header /> 
        <Routes>
          <Route index element = {<Home />} /> 
          <Route path="/movie/:id" element={<Home />}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App



  // <Navbar />
      // <Routes>
      //   <Route path="/" element={<Home />}/>
      //   <Route path="/about" element={<About />} />
      // </Routes>
