import React, { useEffect, useState } from 'react'
import "./home.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => { 
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=131b33dfa2795142725b813646451780")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
  return (
    <div>
        <div className='poster'>
            <Carousel 
            showThumbs = {false} 
            autoPlay = {true} 
            transitionTime={3}
            infiniteLoop = {true} 
            showStatus = {false} 
            >

            {
                popularMovies.map(movie => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                    </div>
                    <div className="posterImageoverlay">
                        <div className="posterImagetitle">{movie ? movie.original_title: ""}</div>
                        <div className="posterImageruntime">
                            {movie ? movie.release_date : ""}
                            <span className="posterImagerating">
                                {movie ? movie.vote_average :""}
                               
                            </span>
                        </div>
                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                    </div>
                </Link>
                ))
            }

            </Carousel>

        </div>
    </div>
  )
}

export default Home