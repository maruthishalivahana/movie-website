import React from 'react'
import MovieDetailsCard from './MovieDetailsCard'

function Watchlist() {
    return (
        <>
            <table>
                <thead className='flex items-center justify-around'>
                    <th>
                        <td>name</td>
                        <td>rating</td>
                        <td>popularity</td>

                    </th>
                </thead>
            </table>
        </>
    )
}

export default Watchlist
