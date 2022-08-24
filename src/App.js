import './App.css';
import ArtBanner from './components/ArtBanner';
import Connect from './components/Connect';
import HeroBanner from './components/HeroBanner';
import LatestNews from './components/LatestNews';
import NavBar from './components/NavBar';
import Socials from './components/Socials';

function App() {
  return (
    <div className="">
      <NavBar />
      <HeroBanner />
      <LatestNews />
      <ArtBanner />
      <Connect />
      <Socials />
      
    </div>
  );
}

export default App;
