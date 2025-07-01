import React from 'react'
import banner from '../assets/banner.jpg'
function Moviecard() {
    return (
        <>

            <div className='flex  justify-around flex-col  w-[200px] h-[350px]  rounded bg-amber-50 mt-15 ml-10 mb-10 mr-10'>
                <img src={banner} alt=""
                    className='w-[200px] h-[400px] rounded' />
                <p className=' relative bottom-[50px] top-0.3  text-center text-amber-50 bg-black h-10'>Kingdom</p>
            </div>
        </>
    )
}

export default Moviecard
