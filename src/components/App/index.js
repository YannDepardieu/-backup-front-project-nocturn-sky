// == Import
import './styles.scss';
import HomePage from '../HomePage';
import TodayMyth from '../TodayMyth'
//import { Routes, Route } from 'react-router-dom';

// == Composant App
function App() {
  return (
    <div className="app">
      <HomePage /> 
     {/*  <TodayMyth /> */}

    
      {/*On Gère les routes dans un second temps, d'abord créer chaque composant 
      <Routes>
        <Route path="/" element={<PageRepos />} />
        <Route path="/" element={<PageFaq />} />
        <Route path="*" element={(<div> 404 </div>)} />
      </Routes> */}
    </div>
  );
}

// == Export
export default App;
