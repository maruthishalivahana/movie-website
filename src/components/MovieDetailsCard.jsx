import React from 'react'
import moviecard from './Moviecard'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function MovieDetailsCard(props) {

    const { state } = useLocation();

    const {
        original_title,
        overview,
        release_date,
        popularity,
        vote_average,
        poster_path
    } = state || {};
    return (
        <>
            <div className='flex mt-10 ml-20 gap-11 justify-evenly items-center flex-wrap'>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" className='h-[400px] rounded' />
                </div>

                <div>

                    <p className='bg-black p-4 rounded-2xl text-white w-[300px] text-center '>{original_title}</p>
                    <div className='bg-black flex flex-col text-white p-4 mt-10 w[400px] rounded-2xl'>
                        <p className='text-2xl mt-5 text-center mb-4 underline '>OVERVIEW</p>
                        <p className='text-lg w-3xl '>{overview}</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='releaseDate bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>RELEASE DATE</p>
                            <p>{release_date}</p>
                        </div>
                        <div className='popularity bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>POPULARITY</p>
                            <p>{Math.round(popularity)}</p>
                        </div>


                        <div className='rating bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>RATING</p>
                            <p>{Math.round(vote_average)}/10</p>
                        </div>
                    </div>
                    <button className='p-4 bg-black text-white mt-10 w-[400px]'>Add To Watchlist</button>
                </div>
            </div>
        </>

    )
}

export default MovieDetailsCard
