import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Movies from './components/Movies.jsx'
import Watchlist from './components/Watchlist.jsx'
import MovieDetailsCard from './components/MovieDetailsCard.jsx'
function App() {
    const [watchlist, setwatchlist] = useState([])
    const handleAddToWatchlist = (movie) => {
        const newwatchlist = ([...watchlist, movie])
        setwatchlist(newwatchlist)
        console.log(newwatchlist)
    }
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/watchlist' element={<Watchlist />} />
                    <Route path='/moviedetails' element={<MovieDetailsCard handleAddToWatchlist={handleAddToWatchlist} />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
