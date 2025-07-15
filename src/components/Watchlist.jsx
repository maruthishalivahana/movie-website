import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'
function Watchlist() {
    return (
        <>
            <div>
                <div className='flex flex-col  w-[200px]   mt-10 ml-10 gap-10 mb-4 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnWaSc1MwpaaWOyERmiNNy_nqSn88hTLrIg&s" alt="" width={"200px"} height={"100px"} className='rounded-b-0 rounded-t-lg ' />
                    <div className=' flex flex-col  text-black -mt-10 border rounded-b-lg border-t-0 bg-white p-0.5'>
                        <p className=''> movie name :kubera</p>
                        <p>Release date :22-05-2005</p>
                    </div>

                </div>
                <button className='ml-10  w-[200px]  p-2 h-[40px] border rounded bg-red-500 text-white cursor-pointer'> remove movie</button>


            </div>
        </>
    )
}

export default Watchlist
