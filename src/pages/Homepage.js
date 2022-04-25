import Hero from "../components/Homepage/Hero";
import TodayMyth from "../components/Homepage/TodayMyth";
import Map from "../components/Homepage/Map";
import ConstellationModal from "../components/Constellations/Modal";
// import FavsConstellations from "../components/Modal/FavsConstellations";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <main className="Main Homepage">
      <Hero />
      <TodayMyth />
      <Map />
      <ConstellationModal />
      {/* <FavsConstellations /> */}
    </main>
  );
};

export default Homepage;
