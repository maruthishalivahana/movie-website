import React from 'react'
import Logo from '../assets/react.svg'
import { Link } from "react-router";


function Navbar() {
    return (
        <>
            <div className='flex items-center border-b-2 p-4 space-x-8 text-2xl'>
                <img src={Logo} alt="website logo" />

                <Link to='/' className='text-blue-500'>Home</Link>
                <Link to='/watchlist' className=' text-blue-500'>Watchlist</Link>

            </div>
        </>

    )
}

export default Navbar
