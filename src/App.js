import './App.css';
import Banner from './components/Banner';
import FindPlaceCard from './components/FindPlace-Card';
import Footer from './components/Footer';
import FooterCard from './components/FooterCard';
import Golobenav from './components/Golobenav';
import RecentSearch from './components/Recent-Search';
import SelectedPlace from './components/Selected-Place-Ad';
import TravelPlaces from './components/TravelPlaces';

function App() {
  return (
    <>
      <div className="App">
        <Golobenav />
        <Banner />
        <div className='mw-1170px px-3 pb-5 text-start m-auto'>
          <FindPlaceCard />
          <RecentSearch />
          <TravelPlaces />
          <SelectedPlace />
          <FooterCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
