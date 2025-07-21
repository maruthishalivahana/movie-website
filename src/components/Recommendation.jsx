import React, { use } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecommendationCard from './RecommendationCard';
function Recommendation() {
    // const movieId = 100;
    const API_KEY = "913bb054a3e666b34c09d1f50d7c5139";
    const [recommendations, setRecommendations] = useState([]);
    useEffect(() => {
        try {
            axios.get(`https://api.themoviedb.org/3/movie/500/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
                const data = (res.data.results)
                setRecommendations(() => {
                    data.filter((movie) => {
                        movie.vote_average > 8 && recommendations.push(movie)
                    })
                })
                recommendations.map((movies) => {
                    return (
                        <RecommendationCard
                            key={movies.id}
                            movie={movies}
                            original_title={movies.original_title}
                        // overview={movies.overview}
                        // backdrop_path={movies.backdrop_path}
                        // release_date={movies.release_date}
                        // popularity={movies.popularity}
                        // vote_average={movies.vote_average}
                        // poster_path={movies.poster_path}
                        />
                    )
                    console.log("title", movies.original_title)

                })
                // setRecommendations = data.filter((movie) => {
                //     movie.vote_average > 8 && recommendations.push(movie)

                // })
                // setRecommendations(topMovies);
                console.log("it is from set recommendation", recommendations);
                // console.log("title",)

                // console.log(topMovies);
                // this is the top 10 movies from the recommendatins
                // you can use this data to display the recommendations in your component
            })

        } catch (error) {
            console.error("Error fetching recommendations:", error.message, error.response ? error.response.data : '');
        }
    }, [])

    // Logic to fetch recommendations based on user's watchlist or preferences      
    return (
        <div>
        </div>
    )
}

export default Recommendation
