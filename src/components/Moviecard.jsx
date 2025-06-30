import React from 'react'

function Moviecard() {
    return (
        <>

            <div className='flex  justify-around flex-col  w-[200px] h-[350px]  rounded bg-amber-50 mt-15 ml-20 mb-10'>
                <img src="https://assetscdn1.paytm.com/images/cinema/Kingdom%20(1)-2ca3f7c0-2722-11f0-b928-13aed40177fa.jpg?format=webp&imwidth=300" alt=""
                    className='w-[200px] h-[400px] ' />
                <p className=' relative bottom-[50px] top-0.3  text-center text-amber-50 bg-black h-10'>Kingdom</p>
            </div>
        </>
    )
}

export default Moviecard
