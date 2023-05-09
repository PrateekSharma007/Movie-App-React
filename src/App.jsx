import React from 'react';
// import "./App.css"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headers/Header';
import Home from './Pages/home/Home';
import Movie from './pages/movieDetail/movie';
import MovieList from './components/movieList/movieList';
function App() {
  return (
    
    <div className="main">
      
      <Router>
      <Header /> 

        <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
     
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
       // 
      // </Routes>
