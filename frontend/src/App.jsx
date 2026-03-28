import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import SeatLayout from './pages/SeatLayout'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Favourite from './pages/Favourite'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'



const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar/>}

      


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/movie/:id/:date' element={<SeatLayout/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes> 
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
