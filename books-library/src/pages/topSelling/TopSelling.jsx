import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// '../../assets/wallpaperflare.com_wallpaper(4).jpg'
import {wallpaper2, manufacturing, reconstruction, intelligent, richdad, shahab, tauba, rules} from '../../assets/index'

const articles = [
  {id: 1, title: 'Manufacturing Consent', img:manufacturing},
  {id: 2, title: 'Reconstitution of Islamic Thoughts', img:reconstruction},
  {id: 3, title: 'The intelligent Investor', img:intelligent},
  {id: 4, title: 'Rich Dad Poor Dad', img:richdad},
  {id: 6, title: 'Tauba tun Nashooh', img:tauba},
  {id: 7, title: '40 Rules of Love', img:rules},
]
console.log(articles)
const TopSelling = () => {
  return (
    <>
    <div className='relative'>
      <img className='opacity-25' src={wallpaper2} alt="" />
      <div className='absolute top-32 mr-36 ml-36'>
        <h1 className='text-center hover:text-blue-600'>Top Selling</h1><br /><br /><br />
        <div className='grid grid-cols-6'>
        {
          articles?.map((book)=>{
            return(
            <div id={book.id} className='card bg-red-500 w-96 shadow-xl hover:cursor-pointer hover:bg-blue-600'>
              <figure>
                <img src={book.img} alt="" />
              </figure>
              <h3>{book.title}</h3>
            </div>
            )
          })
        }
        </div>
      </div> 
    </div>    
    </>
  )
}

export default TopSelling