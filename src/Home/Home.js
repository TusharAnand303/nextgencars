import React from 'react'
import About from '../About/About'
import Carlist from '../Carlist/Carlist'
import { Features } from '../Features/Features'
import Footer from '../Footer/Footer'
import Footer2 from '../Footer/Footer2'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import './Home.css'

function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Header/>
    <About/>
    <Carlist/>
    {/* <Features/> */}
    {/* <Footer2/> */}
    <Footer/>
    </>
  )
}

export default Home
