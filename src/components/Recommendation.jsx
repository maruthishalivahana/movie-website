import React, { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function Recommendation() {
    // const movieId = 100;
    const API_KEY = "913bb054a3e666b34c09d1f50d7c5139";
    useEffect(() => {
        try {
            axios.get(`https://api.themoviedb.org/3/movie/500/recommendations?api_key=${API_KEY}&language=en-US&page=1`, {
                // headers: {
                //     accept: 'application/json',
                //     Authorization: `Bearer ${API_KEY}`
                // }
            }).then((res) => {
                const data = (res.data.results)
                const topMovies = []

                //  logic for filtering top movies by using for loop 

                /* for (let i = 0; i < data.length; i++) {
                     if (data[i].vote_average > 8) {
                         topMovies.push(data[i]);
 
                     }
 
                 }*/

                data.filter((movie) => {
                    movie.vote_average > 8 && topMovies.push(movie)

                })
                console.log(topMovies);
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
