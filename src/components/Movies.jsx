import React from 'react'
import Banner from './Banner'
import { useParams } from 'react-router-dom'
import { useWatchlist } from '../../WatchlistContext.jsx'
import Moviecard from './Moviecard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RecommendationCard from './RecommendationCard.jsx'
import Recommendation from './Recommendation.jsx'

function Movies() {

    const API_KEY = "913bb054a3e666b34c09d1f50d7c5139"
    const { id } = useParams();
    const [movies, setMovies] = useState([])
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            setMovies(res.data.results)
            console.log(res.data.results)
        })
    }, [])

    return (
        <>
            <div>
                <Banner />
            </div>
            <h1 className='text-3xl text-center mt-10'> Top Recommndations</h1>
            <div className=' flex items-center gap-10 justify-evenly'>
                <Recommendation />
            </div>
            <h1 className='text-center text-3xl mt-15'> Trending Movies</h1>
            <div className='mt-10 flex items-center justify-around  flex-wrap '>
                {movies.map((movie) => {
                    return <Moviecard
                        key={movie.id}
                        movie={movie}
                        original_title={movie.original_title}
                        overview={movie.overview}
                        backdrop_path={movie.backdrop_path}
                        release_date={movie.release_date}
                        popularity={movie.popularity}
                        vote_average={movie.vote_average}
                        poster_path={movie.poster_path}
                        id={movie.id} />

                })}

            </div>
        </>

    )
}

export default Movies
