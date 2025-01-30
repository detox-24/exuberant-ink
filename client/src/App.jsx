import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Subscribe from './pages/subscribe'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import React from 'react'
import Header from './component/header'
import SignIn from './pages/signin'
import SignUp from './pages/signup.jsx'
import Footer from './component/footer'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/"element={<Home />}/>
      <Route path = "/about"element={<About />}/>
      <Route path = "/dashboard"element={<Dashboard />}/>
      <Route path = "/subscribe"element={<Subscribe />}/>
      <Route path = "/signin"element = {<SignIn />}/>
      <Route path = "/signup"element = {<SignUp />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
