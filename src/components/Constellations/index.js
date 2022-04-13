import { useState } from 'react';
//import Hero from '../Hero';
//import TodayMyth from '../TodayMyth';
//import HomePageMap from '../Map';
import {NavLink} from "react-router-dom";
import {
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import constellations from '../../data/constellations';

import './styles.scss';

function Constellations() {
  const [openedConstellation, setOpenedConstellation] = useState(null);

  return (
    <div className="constellations-page-container">
      <h2>Liste des Constellations</h2>       
      
      <ul className="constellations-container">
        {constellations.map((constellation, index) => (          
          <li
            key={`constellations-item--${index}`}
            className="constellations-item"
            onClick={() => setOpenedConstellation(constellation)}
          >
            <img
              className="constellations-item-image"
              src={constellation.image}
            />
    
            <strong className="constellations-item-name">
              {constellation.name}
            </strong>
           
          </li>
        ))}
      </ul>

      {
        openedConstellation && (
          <div
            className="constellations-modal"
            onClick={({ target, currentTarget }) => {
              if (currentTarget === target) {
                setOpenedConstellation(null);
              }
            }}
          >
            <div className="constellations-modal-container">
              <AiOutlineCloseCircle
                className="constellations-modal-close"
                onClick={() => setOpenedConstellation(null)}
              />
              <img src={openedConstellation.image} alt="" />
              <em className="constellations-item-text">
              {openedConstellation.text}
            </em>
              
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Constellations;
