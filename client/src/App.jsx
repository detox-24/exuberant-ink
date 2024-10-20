import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Subscribe from './pages/subscribe'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import React from 'react'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/"element={<Home />}/>
      <Route path = "/about"element={<About />}/>
      <Route path = "/dashboard"element={<Dashboard/>}/>
      <Route path = "/subscribe"element={<Subscribe />}/>


    </Routes>
    
    </BrowserRouter>
  )
}
