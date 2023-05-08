import React, { useEffect, useState } from 'react'
import "./home.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => { 
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=131b33dfa2795142725b813646451780")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
  return (
    <div>
        HOME PAGE IS RENDERED
    </div>
  )
}

export default Home