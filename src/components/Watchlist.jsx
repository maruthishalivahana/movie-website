import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'

function Watchlist() {
    return (
        <>
            <table className='w-full text-center mt-10  p-6'>
                <tr className=' border-2 border-black text-center ml-10 mr-10'>
                    <th className=''>poster</th>
                    <th>name</th>
                    <th>rating</th>
                    <th>popularity</th>
                </tr>
                <tr className='mt-20'>
                    <td className='ml-20'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnWaSc1MwpaaWOyERmiNNy_nqSn88hTLrIg&s" alt="" width={"100px"} height={"100px"} /></td>
                    <td>kubera</td>
                    <td>7.0</td>
                    <td>345</td>
                    <td>delete</td>
                </tr>

            </table>
        </>
    )
}

export default Watchlist
