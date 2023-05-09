import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"
import {FaImdb} from "react-icons/fa"

const Header = () => {
  return (
    <div className='header'>
      <div className='nav_bar'> 
        
        
        <Link to = "/" className = "imdb-icon"><FaImdb className='icon'/></Link>
        <Link to = "/movies/popular" className = "text"> <h3>Popular</h3> </Link>
        <Link to = "/movies/top_rated" className = "text"><h3> Top Rated</h3> </Link>
        <Link to = "/movies/upcoming" className = "text"><h3> Upcoming</h3> </Link>
      </div>
    </div>
  )
}

export default Header;