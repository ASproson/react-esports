import './App.css';
import ArtBanner from './components/ArtBanner';
import HeroBanner from './components/HeroBanner';
import LatestNews from './components/LatestNews';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="">
      <NavBar />
      <HeroBanner />
      <LatestNews />
      <ArtBanner />

    </div>
  );
}

export default App;
