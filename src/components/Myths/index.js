import { useState } from 'react';
//import Hero from '../Hero';
//import TodayMyth from '../TodayMyth';
//import HomePageMap from '../Map';
import {NavLink} from "react-router-dom";
import {
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import myths from '../../data/myths';

import './styles.scss';

function Myths() {
  const [openedMyths, setOpenedMyths] = useState(null);

  return (
    <div className="myths-page-container">
      <h2>Liste des Myths</h2>       
      
      <ul className="myths-container">
        {myths.map((myths, index) => (          
          <li
            key={`myths-item--${index}`}
            className="myths-item"
            onClick={() => setOpenedMyths(myths)}
          >
            <img
              className="myths-item-image"
              src={myths.image}
            />
    
            <strong className="myths-item-name">
              {myths.name}
            </strong>
          </li>
        ))}
      </ul>

      {
        openedMyths && (
          <div
            className="myths-modal"
            onClick={({ target, currentTarget }) => {
              if (currentTarget === target) {
                setOpenedMyths(null);
              }
            }}
          >
            <div className="myths-modal-container">
              <AiOutlineCloseCircle
                className="myths-modal-close"
                onClick={() => setOpenedMyths(null)}
              />
              <img src={openedMyths.image} alt="" />
              
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Myths;
