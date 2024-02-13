import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './screens/Home'
import BlogList from './screens/BlogList'
import Contact from './screens/Contact'
import Footer from './components/Footer'
import MagicCursor from './components/MagicCursor'
import Subscribes from './components/Subscribes'
import BlogDetail from './screens/BlogDetail'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/blogdetail' element={<BlogDetail />} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Subscribes />
      <Footer />
      <MagicCursor />
    </>
  )
}

export default App