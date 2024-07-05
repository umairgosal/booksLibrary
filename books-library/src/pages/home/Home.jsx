
import Video from '../../components/Video.jsx'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import ToRead from '../../components/ToRead.jsx';
import Card from '../../components/Card.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import TestingAxios from '../../components/testing/testingAxios.jsx';
import React from 'react'
// import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import TestingUseReducer from '../../components/testing/testingUseReducer.jsx';

const Home = () => {
  return (
    <div>
        <Header />
        {/* <Outlet /> we put outlet in the parent element where we want the child element to render when it is triggered */}
        <Video />
        {/* <TestingUseReducer /> */}
        <SearchBar />
        {/* <Card /> */}
        <ToRead />
        {/* <TestingAxios /> */}
        <div className="divider divider-neutral"></div>
        <Footer />
    </div>
  )
}

export default Home