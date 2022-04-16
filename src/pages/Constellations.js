import { ConstellationProvider } from "../contexts/ConstellationContext";

import ConstellationsList from "../components/Constellations/List";
import ConstellationModal from "../components/Constellations/Modal";

import "./Constellations.scss";

const Constellations = () => {
  return (
    <ConstellationProvider>
      <main className="Main Constellations">
        <h1 className="Title Page-Title">Constellations</h1>
        <ConstellationsList />
        <ConstellationModal />
      </main>
    </ConstellationProvider>
  );
};

export default Constellations;
