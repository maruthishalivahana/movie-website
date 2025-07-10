import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'

function Watchlist() {
    return (
        <>
            {/* <table className='w-full text-center mt-10  p-2'>
                <tr className=' border-2 border-black text-center ml-10 mr-10 flex items-center gap-20'>
                    <th className=' p-4'>poster</th>
                    <th>name</th>
                    <th>rating</th>
                    <th>popularity</th>
                </tr>
                <tr className='mt-20 flex items-center'>
                    <td className='ml-20'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnWaSc1MwpaaWOyERmiNNy_nqSn88hTLrIg&s" alt="" width={"100px"} height={"100px"} /></td>
                    <td>kubera</td>
                    <td>7.0</td>
                    <td>345</td>
                    <td className='text-red-600'>delete</td>
                </tr>

            </table> */}

            <div className='flex  items-center  mt-10 ml-10 gap-10'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnWaSc1MwpaaWOyERmiNNy_nqSn88hTLrIg&s" alt="" width={"100px"} height={"100px"} />
                <div className='flex flex-col items-center gap-2'>
                    <div className=' bg-black gap-5  text-white w-[400px] h-[60px] items-center flex justify-center rounded'>
                        <p className=''>kubera</p>
                    </div>

                    <div className='flex gap-5 items-center '>
                        <div className=' bg-black text-white w-[100px] h-[60px] items-center flex  rounded justify-center'>
                            <p className=''>7.5</p>
                        </div>
                        <div className=' bg-black text-white w-[100px] h-[60px] items-center flex  rounded justify-center'>
                            <p className=''>123</p>
                        </div>
                        <div className=' bg-black text-white w-[100px] h-[60px] items-center flex  rounded justify-center'>
                            <p className=''>22-05-2025</p>
                        </div>
                    </div>




                </div>
            </div>
            <div>
                <button>remove movie</button>
            </div>


        </>
    )
}

export default Watchlist
