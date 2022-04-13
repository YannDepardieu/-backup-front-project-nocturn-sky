import { useEffect, useState } from 'react';
import { fetchContentEntity } from '../../utils/fetchApi';
//import Hero from '../Hero';
//import TodayMyth from '../TodayMyth';
//import HomePageMap from '../Map';
// import {NavLink} from "react-router-dom";
import {
  AiOutlineCloseCircle,
} from 'react-icons/ai';

// import myths from '../../data/myths';

import './styles.scss';

function Myths() {
  const [myths, setMyths] = useState([]);
  const [openedMyth, setOpenedMyth] = useState(null);

  useEffect(()=> {
    fetchContentEntity('myth', setMyths);
  }, []);
  return (
    <div className="myths-page-container">
      <h2 className="Title">Liste des Myths</h2>       
      
      <ul className="myths-container">
        {myths.map((myth, index) => (          
          <li
            key={`myths-item--${index}`}
            className="myths-item"
            onClick={() => setOpenedMyth(myth)}
          >
            <img
              className="myths-item-image"
              /* Changer par image name !!! */
              src={`https://picsum.photos/200?=${index}`}
            />
    
            <strong className="myths-item-name">
              {myth.name}
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
              <img src={openedMyths.image} alt={openedMyth.name} />
              <div className='Myth-Description'>

              </div>
              
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Myths;
