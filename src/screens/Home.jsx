import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Designs from '../sections/Designs'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Testimonials from '../sections/Testimonials'
import BrandMarquee from '../components/BrandMarquee'
import Blogs from '../sections/Blogs'
import Subscribes from '../components/Subscribes'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Designs/>
    <Skills/>
    <Projects/>
    <Testimonials/>
    <BrandMarquee/>
    <Blogs/>
    </>
  )
}

export default Home