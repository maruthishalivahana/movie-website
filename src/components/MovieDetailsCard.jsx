import React from 'react'
import moviecard from './Moviecard'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function MovieDetailsCard(props) {
    return (
        <>
            <div className='flex mt-10 ml-20 gap-11 justify-evenly items-center flex-wrap'>
                <div>
                    <img src="https://static.moviecrow.com/movies/4993-kubera/247501-247498-ku5-px214.jpg" alt="" />
                </div>

                <div>

                    <p className='bg-black p-4 rounded-2xl text-white w-[300px] text-center '>{props.original_title}</p>
                    <div className='bg-black flex flex-col text-white p-4 mt-10 w[400px] rounded-2xl'>
                        <p className='text-2xl mt-5 text-center mb-4 underline '>OVERVIEW</p>
                        <p className='text-lg w-3xl '>{props.overview}</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='releaseDate bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>RELEASE DATE</p>
                            <p>22-05-2025</p>
                        </div>
                        <div className='popularity bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>POPULARITY</p>
                            <p>1345</p>
                        </div>


                        <div className='rating bg-black p-2  mt-10 rounded-2xl text-white w-[200px] text-center'>
                            <p>RATING</p>
                            <p>7.5/10</p>
                        </div>
                    </div>
                    <button className='p-4 bg-black text-white mt-10 w-[400px]'>Add To Watchlist</button>
                </div>
            </div>
        </>

    )
}

export default MovieDetailsCard
