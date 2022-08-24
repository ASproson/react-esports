import "./App.css";
import ArtBanner from "./components/ArtBanner";
import Connect from "./components/Connect";
import HeroBanner from "./components/HeroBanner";
import LatestNews from "./components/LatestNews";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="">
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
    </div>
  );
}

export default App;
