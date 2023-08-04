import "./App.css";
import ArtBanner from "./components/ArtBanner";
import Connect from "./components/Connect";
import HeroBanner from "./components/HeroBanner";
import LatestNews from "./components/LatestNews";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <LatestNews />
      <ArtBanner />
      <div className="md:flex justify-center md:-mt-[50px]">
        <Connect />
        <div className="md:-mt-[100px]">
          <Socials />
        </div>
      </div>
      <div className="Stencil overflow-hidden h-[140px] -mt-[80px]">
        <h1 className="text-[140px] md:text-[155px] xl:text-[175px] uppercase whitespace-nowrap -ml-[50px] font-valorant opacity-5 text-center">
          champions are made
        </h1>
      </div>
    </>
  );
}

export default App;
