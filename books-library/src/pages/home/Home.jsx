
import Video from '../../components/Video.jsx'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import ToRead from '../../components/ToRead.jsx';
import Card from '../../components/Card.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import React, { lazy, Suspense, useState} from 'react'
import TestingUseReducer from '../../components/testing/testingUseReducer.jsx';

// function delayForDemo(promise){
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000)
//   }).then(()=> promise)
// }

// const VideoView = lazy(()=> delayForDemo(import('../../components/Video.jsx')))

const Home = () => {
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div>
        <Header />
        {/* <Outlet /> we put outlet in the parent element where we want the child element to render when it is triggered */}
        {/* {showPreview && 
            <Suspense>
              <VideoView/>
            </Suspense>
        } */}
        <Video />
        <SearchBar />
        <ToRead />
        <div className="divider divider-neutral"></div>
        <Footer />
        
    </div>
  )
}

export default Home