import Hero from '../components/Homepage/Hero';
import TodayMyth from '../components/Homepage/TodayMyth';
import HomePageMap from '../components/Homepage/Map';

import './Homepage.scss';

const Homepage = () => {
  return (
    <main className="Main Homepage">
      <Hero />
      <TodayMyth />
      <HomePageMap/>
    </main>
  );
}

export default Homepage;
