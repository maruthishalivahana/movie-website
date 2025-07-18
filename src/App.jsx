
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Watchlist from './components/Watchlist.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Movies from './components/Movies.jsx'
import MovieDetailsCard from './components/MovieDetailsCard.jsx'
import { WatchlistProvider } from '../WatchlistContext.jsx'
import Recommendation from './components/Recommendation.jsx';

function App() {

    return (
        <>
            <Router>

                <WatchlistProvider >
                    <ToastContainer />
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Movies />} />
                        <Route path='/watchlist' element={<Watchlist />} />
                        <Route path='/moviedetails' element={<MovieDetailsCard />} />
                    </Routes>
                </WatchlistProvider>
                <Recommendation />

            </Router>
        </>
    )
}

export default App
