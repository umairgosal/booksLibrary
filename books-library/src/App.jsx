import Component from './components/Component.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ToRead from './components/ToRead.jsx';
import CardList from './components/CardList.jsx';
import SearchBar from './components/SearchBar.jsx';


function App() {

  return (
    <>
    <Header />
    <Component />
    <SearchBar />
    <ToRead />
    <CardList />
    <Footer />
    </>
  );
}

export default App
