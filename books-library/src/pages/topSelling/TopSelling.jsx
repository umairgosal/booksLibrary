import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import wallpaper2 from '../../assets/wallpaperflare.com_wallpaper(4).jpg'

const TopSelling = () => {
  return (
    <>
    <div>
      <img src={wallpaper2} alt="" />
    </div>
    </>
  )
}

export default TopSelling