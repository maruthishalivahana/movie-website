import React from 'react'
import logo from '../assets/react.svg'


function RecommendationCard(props) {
    return (
        <div className='w-[300px] flex flex-col items-center justify-around h-auto border mt-20  p-2 rounded-xl cursor-pointer hover:scale-110 transition-all ease-in  '>
            <img src={`https://image.tmdb.org/t/p/w200/${props.poster_path}`} alt="" className='w-[200px] h-[200px]' />
            <div className='w-[60px] h[50px] border p-4 relative  flex item-center left-25 bottom-5 rounded-4xl bg-amber-500 text-white'>{Math.ceil(props.vote_average)}/10</div>
            <p className='strong m-4 text-blue-600 text-2xl'>{props.original_title}</p>
            <p className='text-justify m-b-4  line-clamp-4'>{props.overview} </p>
            <button className='border text-center p-2 w-40 rounded mt-10  bg-[#F2EFEF] border-[#51acfa] cursor-pointer'>view more</button>

        </div>
    )
}

export default RecommendationCard
