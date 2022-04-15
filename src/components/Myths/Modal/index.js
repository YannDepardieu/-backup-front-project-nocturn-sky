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
      className="Myths-Modal"
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          setOpenedMyth(null);
        }
      }}
    >
      <div className="Block">
        <AiOutlineCloseCircle
          className="Myths-Modal-Close"
          onClick={() => setOpenedMyth(null)}
        />

        <div className="Myths-Modal-Details">
          <img
            src={`${baseURL}/img/${openedMyth.latin_name
              .toLowerCase()
              .slice(0, 3)}.png`}
            onError={({ currentTarget }) =>
              (currentTarget.src = "https://www.fillmurray.com/200/350")
            }
            alt={openedMyth.name}
            className="Myths-Modal-Details-Image"
          />
          <h2 className="Title Title--small">{openedMyth.name}</h2>
          <em className="Subtitle">{openedMyth.latin_name}</em>
        </div>

        <div className="Myths-Modal-Description">
          {Boolean(openedMyth.story) && (
            <>
              <strong className="Subtitle">Son histoire</strong>
              <p className="Myths-Modal-Description-Paragraph">
                {openedMyth.story}
              </p>
            </>
          )}
          {Boolean(openedMyth.spotting) && (
            <>
              <strong className="Subtitle">Sa découverte</strong>
              <p className="Myths-Modal-Description-Paragraph">
                {openedMyth.spotting}
              </p>
            </>
          )}
          {Boolean(openedMyth.myth) && (
            <>
              <strong className="Subtitle">Son mythe</strong>
              <p className="Myths-Modal-Description-Paragraph">
                {openedMyth.myth}
              </p>
            </>
          )}
        </div>

        {isConnected && favorited && (
          <AiFillHeart
            onClick={() => setFavorited(!favorited)}
            className="Myths-Modal-Favorite Myths-Modal-Favorite--favorited"
          />
        )}
        {isConnected && !favorited && (
          <AiOutlineHeart
            onClick={() => setFavorited(!favorited)}
            className="Myths-Modal-Favorite"
          />
        )}
      </div>
    </div>
  );
};

export default MythModal;
