import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import wallpaper1 from "../../assets/wallpaperflare.com_wallpaper(2).jpg"

const OurTeam = () => {
  return (
    <>
    <div className='relative'>
      <img className='opacity-25' src={wallpaper1} alt="imagess" />
      <div className='absolute top-72 mr-36 ml-36'>
        <h1 className='text-center hover:text-blue-600'>Our Team</h1><br /><br /><br />
        <p className='hover:text-blue-400'>At the heart of our company lies a dedicated and passionate team, committed to delivering exceptional service and innovation. Our team comprises a diverse group of professionals, each bringing unique skills and expertise to the table. From seasoned developers and creative designers to strategic marketers and customer support specialists, every member plays a crucial role in our collective success.
          <br /><br />
          Our developers are the backbone of our technological advancements, tirelessly working to create seamless and efficient solutions. The design team breathes life into our vision with their creative flair, ensuring our products are not only functional but also aesthetically pleasing. Our marketers strategically position our brand in the market, driving growth and expanding our reach. Meanwhile, our customer support team ensures that our clients receive unparalleled assistance, fostering strong and lasting relationships.
          <br /><br />
          Collaboration and innovation are at the core of our team’s ethos. We believe in fostering an inclusive and dynamic work environment where ideas flourish and every voice is heard. Together, we strive to exceed expectations and set new standards in our industry. Our team is not just a group of individuals; we are a family united by a common goal – to deliver excellence in everything we do.
        </p>
      </div>   
    </div>

    </>
  )
}

export default OurTeam