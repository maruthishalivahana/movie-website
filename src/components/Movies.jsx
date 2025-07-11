import React from 'react'
import Banner from './Banner'
import Moviecard from './Moviecard'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Movies() {

    const API_KEY = "913bb054a3e666b34c09d1f50d7c5139"
    const [movies, setMovies] = useState([])
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            setMovies(res.data.results)
            // console.log(res.data.results)
        })
    }, [])

    return (
        <>
            <div>
                <Banner />
            </div>
            <h1 className='text-center text-3xl mt-15'> Trending Movies</h1>
            <div className='mt-10 flex items-center justify-around  flex-wrap '>
                {movies.map((movie) => {
                    return <Moviecard
                        key={movie.id}
                        original_title={movie.original_title}
                        overview={movie.overview}
                        backdrop_path={movie.backdrop_path}
                        release_date={movie.release_date}
                        popularity={movie.popularity}
                        vote_average={movie.vote_average}
                        poster_path={movie.poster_path} />
                })}

            </div>
        </>

    )
}

export default Movies
