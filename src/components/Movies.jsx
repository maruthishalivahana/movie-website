import React from 'react'
import Banner from './Banner'
import Moviecard from './Moviecard'

function Movies() {
    return (
        <>
            <div>
                <Banner />
            </div>
            <h1 className='text-center text-3xl mt-15'> Trending Movies</h1>
            <div className='mt-10 flex'>
                <Moviecard />
                <Moviecard />
                <Moviecard />
            </div>
        </>

    )
}

export default Movies
