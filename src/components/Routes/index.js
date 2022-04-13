import { BrowserRouter as Router, Routes as RoutesContainer, Route } from 'react-router-dom';

import Header from '../Header';
import Homepage from '../../pages/Homepage';

const Routes = () => {
  return (
    <Router>
      <Header />

      {/*On Gère les routes dans un second temps, d'abord créer chaque composant*/}
      <RoutesContainer>
        <Route path="/" element={<Homepage />} />
        {/*}
        <Route path="/Constellations" element={<Constellations />} />
        <Route path="/Myths" element={<Myths /> } />
        {*/}
        <Route element={(<div>404</div>)} />
      </RoutesContainer>
    </Router>
  );
};

export default Routes;
