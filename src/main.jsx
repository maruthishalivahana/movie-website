import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Movies from './components/Movies.jsx'
import Watchlist from './components/Watchlist.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Movies />} className='text-blue-500'>Home</Route>
      <Route path='/watchlist' element={<Watchlist />} className=' text-blue-500'>Watchlist</Route>
    </Routes>
  </Router>
)
