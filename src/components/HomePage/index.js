import Hero from '../Hero';
import TodayMyth from '../TodayMyth';
import HomePageMap from '../Map';
import Header from '../Header';

import './styles.scss';

function HomePage() {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />
      <TodayMyth />
      <HomePageMap/>
    </div>
  );
}

export default HomePage;
