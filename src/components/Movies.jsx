import React from 'react'
import Banner from './Banner'
import { useParams } from 'react-router-dom'
import { useWatchlist } from '../../WatchlistContext.jsx'
import Moviecard from './Moviecard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RecommendationCard from './RecommendationCard.jsx'


function Movies() {

    const API_KEY = "913bb054a3e666b34c09d1f50d7c5139"
    const { id } = useParams();
    const [movies, setMovies] = useState([])
    const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            setMovies(res.data.results)
            console.log(res.data.results)
        })
    }, [])


    // for fetching recommnedations data 

    useEffect(() => {
        try {
            axios.get(`https://api.themoviedb.org/3/movie/500/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
                const data = res.data.results;
                const topMovies = data.filter((moviee) => moviee.vote_average > 7.8);
                setRecommendations(topMovies)
            })

        } catch (error) {
            console.error("Error fetching recommendations:", error.message, error.response ? error.response.data : '');
        }
    }, [])
    // console.log(recommendations)
    return (
        <>
            <div>
                <Banner />
            </div>
            <h1 className='text-3xl text-center mt-10'> Top Recommndations</h1>
            <div className=' flex items-center gap-4 justify-evenly flex-wrap '>
                {recommendations.map((cinima) => {
                    return (<RecommendationCard
                        key={cinima.id}
                        original_title={cinima.original_title}
                        poster_path={cinima.poster_path}
                        overview={cinima.overview}
                        vote_average={cinima.vote_average} />)
                    console.log(cinima.original_title)
                })}
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
