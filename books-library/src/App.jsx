import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import OurTeam from './pages/ourTeam/OurTeam.jsx'
import TopSelling from './pages/topSelling/TopSelling.jsx'
import RequestABook from './pages/requestABook/RequestABook.jsx'  
import OutletPaths from './components/OutletPaths.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<OutletPaths/>}>
          <Route path='/ourTeam' element={<OurTeam />}></Route>
          <Route path='/topSelling' element={<TopSelling />}></Route>
          <Route path='/requestABook' element={<RequestABook />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App