import Hero from '../Hero';
import TodayMyth from '../TodayMyth';
import HomePageMap from '../Map';

import './styles.scss';

function HomePage() {
  return (
    <div className="home-page-container">
      <Hero />
      <TodayMyth />
      <HomePageMap/>
    </div>
  );
}

export default HomePage;
