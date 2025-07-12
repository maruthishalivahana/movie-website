import React, { Children, use } from 'react'
import banner from '../assets/banner.jpg'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios';
import MovieDetailsCard from './MovieDetailsCard';
function Moviecard(props) {
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/moviedetails`, {
            state: {
                ...props
            }
        });

    }
    return (
        <>

            <div className='flex  justify-around flex-col  w-[200px] h-[250px]  rounded bg-amber-50 mt-15 ml-10 mb-10 mr-10'>
                <div className=' hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.poster_path}`} alt={props.original_title}
                        className='w-[200px] h-[200px] rounded' />
                    <p className=' relative bottom-[50px] top-0.3  text-center text-amber-50 bg-gray-800 h-10' >{props.original_title}</p>
                </div>
                <div className='flex flex-col  gap-4'>
                    <button path="/moviedetails" className='text center bg-black p-2 text-white rounded-2xl cursor-pointer' onClick={handleViewDetails}>view details</button>
                    {/* <button className='text center bg-black p-2 text-white rounded-2xl cursor-pointer'>Add To Watchlist</button> */}
                </div>
            </div>
        </>
    )
}

export default Moviecard
