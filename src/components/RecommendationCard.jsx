import React from 'react'
import logo from '../assets/react.svg'


function RecommendationCard(props) {
    return (
        <div className='w-[300px] flex flex-col items-center justify-around h-auto border mt-20  p-2 rounded-xl '>
            <img src={logo} alt="" className='w-[200px]' />
            <div className='w-[60px] h[50px] border p-4 relative  flex item-center left-25 bottom-5 rounded-4xl bg-amber-500 text-white'>8/10</div>
            <p className='strong m-4'>{props.original_title}</p>
            <p className='text-justify m-b-4'>Three-sentence summaries are a popular communication technique that encourages writers to distill their ideas into three impactful sentences. </p>
            <button className='border text-center p-2 w-40 rounded mt-10  bg-[#F2EFEF] border-[#CDCBCB] cursor-pointer'>view more</button>

        </div>
    )
}

export default RecommendationCard
