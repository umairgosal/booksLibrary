import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const RequestABook = () => {
  return (
    <>
    <Navbar />
    <div>requestbook</div>
    <Outlet />
    </>
  )
}

export default RequestABook