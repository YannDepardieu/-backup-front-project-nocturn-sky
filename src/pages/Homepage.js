import Hero from '../components/Homepage/Hero';
import TodayMyth from '../components/Homepage/TodayMyth';
import Map from '../components/Homepage/Map';

import './Homepage.scss';

const Homepage = () => {
  return (
    <main className="Main Homepage">
      <Hero />
      <TodayMyth />
      <Map />
    </main>
  );
}

export default Homepage;
