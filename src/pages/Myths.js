import { MythProvider } from "../contexts/MythContext";

import MythsList from "../components/Myths/List";
import MythModal from "../components/Myths/Modal";

import "./Myths.scss";

const Myths = () => {
  return (
    <MythProvider>
      <main className="Main Myths">
        <h1 className="Title Myths-Title">Mythes</h1>
        <MythsList />
        <MythsModal />
      </main>
    </MythProvider>
  );
};

export default Myths;

{
  /* <div className="myths-page-container">
      <h2 className="Title">Liste des Myths</h2>

      <ul className="myths-container">
        {myths.map((myth, index) => () )} </ul> */
}
