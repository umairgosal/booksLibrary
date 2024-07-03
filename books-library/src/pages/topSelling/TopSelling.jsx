import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const TopSelling = () => {
  return (
    <>
    <Navbar />
    <div>topSelling</div>
    
    <Footer></Footer>
    </>
  )
}

export default TopSelling