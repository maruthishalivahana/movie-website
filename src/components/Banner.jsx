import React from 'react'
import banner from '../assets/banner.jpg'

function Banner() {
    return (
        <div className=' flex items-center justify-center relative '>
            <img src={banner} alt=""
                className='w-[80vw] bg-cover bg-center h-[450px] ml-15 mr-15 rounded-4xl mt-15' />
        </div>
    )
}

export default Banner
