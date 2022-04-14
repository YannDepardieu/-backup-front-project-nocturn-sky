import React from 'react';
import { BrowserRouter as Router, Routes as RoutesContainer, Route } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import Header from '../Header';
import Homepage from '../../pages/Homepage';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Constellations from '../../pages/Constellations';

const Routes = () => {

  return (
    <Router>
      <Header />

      {/*On Gère les routes dans un second temps, d'abord créer chaque composant*/}
      <RoutesContainer>
        <Route path="/" element={<Homepage />} />
        <Route path="/constellations" element={<Constellations />} />

        {/* Routes protégées par un login */}
        <Route element={<AuthenticatedRoute redirectPath="/login" />}>
        </Route>

        {/* Routes uniquement accessibles si non connecté */}
        <Route element={<UnauthenticatedRoute redirectPath="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/*}
        <Route path="/Myths" element={<Myths /> } />
        {*/}
        <Route element={(<div>404</div>)} />
      </RoutesContainer>
    </Router>
  );
};

export default Routes;
