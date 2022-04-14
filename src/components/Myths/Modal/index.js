import React, { useContext, useState } from "react";
import {
  AiOutlineCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import mythContext from "../../../contexts/MythContext";
import authContext from "../../../contexts/AuthContext";
import { baseURL } from "../../../utils/axios";

import "./Modal.scss";

const MythModal = () => {
  const [favorited, setFavorited] = useState(false);

  const { isConnected } = useContext(authContext);
  const { openedMyth, setOpenedMyth } = useContext(mythContext);

  // Si aucune constellation n'est ouverte (cliquée pour la modal),
  // on return null pour ne pas afficher la modal.
  if (!openedMyth) {
    return null;
  }

  return (
    <div
      className="Constellations-Modal"
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          setOpenedConstellation(null);
        }
      }}
    >
      <div className="Block">
        <AiOutlineCloseCircle
          className="Constellations-Modal-Close"
          onClick={() => setOpenedConstellation(null)}
        />

        <div className="Constellations-Modal-Details">
          <img
            src={`${baseURL}/img/${openedConstellation.latin_name
              .toLowerCase()
              .slice(0, 3)}.png`}
            onError={({ currentTarget }) =>
              (currentTarget.src = "https://www.fillmurray.com/200/350")
            }
            alt={openedConstellation.name}
            className="Constellations-Modal-Details-Image"
          />
          <h2 className="Title Title--small">{openedConstellation.name}</h2>
          <em className="Subtitle">{openedConstellation.latin_name}</em>
        </div>

        <div className="Constellations-Modal-Description">
          {Boolean(openedConstellation.story) && (
            <>
              <strong className="Subtitle">Son histoire</strong>
              <p className="Constellations-Modal-Description-Paragraph">
                {openedConstellation.story}
              </p>
            </>
          )}
          {Boolean(openedConstellation.spotting) && (
            <>
              <strong className="Subtitle">Sa découverte</strong>
              <p className="Constellations-Modal-Description-Paragraph">
                {openedConstellation.spotting}
              </p>
            </>
          )}
          {Boolean(openedConstellation.myth) && (
            <>
              <strong className="Subtitle">Son mythe</strong>
              <p className="Constellations-Modal-Description-Paragraph">
                {openedConstellation.myth}
              </p>
            </>
          )}
        </div>

        {isConnected && favorited && (
          <AiFillHeart
            onClick={() => setFavorited(!favorited)}
            className="Constellations-Modal-Favorite Constellations-Modal-Favorite--favorited"
          />
        )}
        {isConnected && !favorited && (
          <AiOutlineHeart
            onClick={() => setFavorited(!favorited)}
            className="Constellations-Modal-Favorite"
          />
        )}
      </div>
    </div>
  );
};

export default ConstellationModal;
