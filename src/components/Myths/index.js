import { useEffect, useState } from "react";
import { fetchContentEntity } from "../../utils/fetchApi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// import myths from '../../data/myths';

import "./styles.scss";

function Myths() {
  const [myths, setMyths] = useState([]);
  const [openedMyth, setOpenedMyth] = useState(null);

  useEffect(() => {
    fetchContentEntity("myth", setMyths);
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

            <strong className="myths-item-name">{myth.name}</strong>
          </li>
        ))}
      </ul>

      {openedMyth && (
        <div
          className="myths-modal"
          onClick={({ target, currentTarget }) => {
            if (currentTarget === target) {
              setOpenedMyth(null);
            }
          }}
        >
          <div className="myths-modal-container">
            <AiOutlineCloseCircle
              className="myths-modal-close"
              onClick={() => setOpenedMyth(null)}
            />
            <img src={openedMyth.image} alt={openedMyth.name} />
            <h2 className="Title Title--small">{openedMyth.name}</h2>

            <div className="Myth-Description">
              {Boolean(openedMyth.story) && <p>{openedMyth.story}</p>}
              {Boolean(openedMyth.spotting) && <p>{openedMyth.spotting}</p>}
              {Boolean(openedMyth.legend) && <p>{openedMyth.legend}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myths;
