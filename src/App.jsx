import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watchlist from './components/Watchlist.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Movies from './components/Movies.jsx'
import MovieDetailsCard from './components/MovieDetailsCard.jsx'
import { WatchlistProvider } from '../WatchlistContext.jsx'
function App() {

    return (
        <>
            <Router>

                <WatchlistProvider >
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Movies />} />
                        <Route path='/watchlist' element={<Watchlist />} />
                        <Route path='/moviedetails' element={<MovieDetailsCard />} />
                    </Routes>
                </WatchlistProvider>

            </Router>
        </>
    )
}

export default App
