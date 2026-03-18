

import React from 'react'
import Navbar from '../Navbar'
import Header from './Header'
import Contact from './Contact'
import Footer from '../Footer'
import Services from './Services'

const Home = () => {
  return (
    <>
        <Navbar/>

        <section id="home">
          <Header/>
        </section>

        <section id="services">
          <Services/>
        </section>

        <section id="contact">
          <Contact/>
        </section>

        <Footer/>
    </>
  )
}

export default Home