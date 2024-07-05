import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import wallpaper1 from "../../assets/wallpaperflare.com_wallpaper(2).jpg"

const OurTeam = () => {
  return (
    <>
    <div>
      <img src={wallpaper1} alt="imagess" />
    </div>

    </>
  )
}

export default OurTeam