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
function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/watchlist' element={<Watchlist />} />
                    <Route path='/moviedetails' element={<MovieDetailsCard />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
