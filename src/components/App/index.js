// == Import
import './styles.scss';
import Constellations from '../Constellations/index'
import Myths from '../Myths/index'
import HomePage from '../HomePage';
import Header from '../Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// == Composant App
function App() {
  return (
    <Router>    
      <div className="app">
        <Header />
      
        {/*On Gère les routes dans un second temps, d'abord créer chaque composant*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Constellations" element={<Constellations />} />
          <Route path="/Myths" element={<Myths /> } />
          <Route path="*" element={(<div> 404 </div>)} />
        </Routes>
      </div> 
    </Router>

  );
}

// == Export
export default App;
