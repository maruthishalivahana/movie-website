import React from 'react'
import banner from '../assets/banner.jpg'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import MovieDetailsCard from './MovieDetailsCard';
function Moviecard(props) {

    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/moviedetails/${props.id}`);
        return <MovieDetailsCard />
    }
    return (
        <>

            <div className='flex  justify-around flex-col  w-[200px] h-[350px]  rounded bg-amber-50 mt-15 ml-10 mb-10 mr-10'>
                <img style={{ backgroundImage: `url(https://image.tmdb.org/t/p/oiginal/${props.backdrop_path})` }} alt={props.original_title}
                    className='w-[200px] h-[400px] rounded' />
                <p className=' relative bottom-[50px] top-0.3  text-center text-amber-50 bg-gray-800 h-10' >{props.original_title}</p>
                <button path="/moviedetails" className='text center bg-black p-2 text-white rounded-2xl cursor-pointer' onClick={handleViewDetails}>view details</button>
            </div>
        </>
    )
}

export default Moviecard
