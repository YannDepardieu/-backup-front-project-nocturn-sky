import { useEffect, useState } from 'react';
import { fetchContentEntity } from '../../utils/fetchApi';

import {
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import './styles.scss';

function Constellations() {
  const [constellations, setConstellations] = useState([]);
  const [openedConstellation, setOpenedConstellation] = useState(null);

  useEffect(() => {
    fetchContentEntity('constellation', setConstellations);
  }, []);

  return (
    <div className="constellations-page-container">
      <h1 className="Title">Liste des Constellations</h1>
      
      <ul className="constellations-container">
        {constellations.map((constellation, index) => (
          <li
            key={`constellations-item--${index}`}
            className="constellations-item"
            onClick={() => setOpenedConstellation(constellation)}
          >
            <img
              className="constellations-item-image"
              src={`https://picsum.photos/200?random=${index}`}
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
              <img src={`https://picsum.photos/200`} alt={openedConstellation.name} />
              <h2 className="Title Title--small">{openedConstellation.name}</h2>
              <em className="Subtitle">{openedConstellation.latin_name}</em>

              <div className="Constellation-Description">
                {Boolean(openedConstellation.story) && (
                  <p>{openedConstellation.story}</p>
                )}
                {Boolean(openedConstellation.spotting) && (
                  <p>{openedConstellation.spotting}</p>
                )}
                {Boolean(openedConstellation.myth) && (
                  <p>{openedConstellation.myth}</p>
                )}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Constellations;
