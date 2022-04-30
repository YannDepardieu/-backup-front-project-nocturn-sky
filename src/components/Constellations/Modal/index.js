import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";
import {
  AiOutlineCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import constellationContext from "../../../contexts/ConstellationContext";
import authContext from "../../../contexts/AuthContext";
import { baseURL } from "../../../utils/axios";
import {
  postFavConstellation,
  deleteFavConstellation,
  fetchFavConstellation,
} from "../../../utils/fetchApi";

import "./Modal.scss";

const ConstellationModal = () => {
  const [favorited, setFavorited] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const { isConnected } = useContext(authContext);
  const {
    openedConstellation,
    setOpenedConstellation,
    favoriteList,
    setFavoriteList,
  } = useContext(constellationContext);

  useEffect(() => {
    if (openedConstellation) {
      setFavorited(openedConstellation.favorite);

      setTimeout(() => {
        setIsOpened(true);
      }, 200);
    }
  }, [openedConstellation]);

  const handleFavs = () => {
    const favCopy = JSON.parse(JSON.stringify(favoriteList));
    const isFav = favoriteList.find(
      (fav) => fav.name === openedConstellation.name
    );

    if (isFav) {
      const filteredFav = favCopy.filter(
        (fav) => fav.name !== openedConstellation.name
      );
      setFavoriteList(filteredFav);
      deleteFavConstellation(openedConstellation.id);
    } else {
      favCopy.push(openedConstellation);
      setFavoriteList(favCopy);
      postFavConstellation(openedConstellation.id);
    }

    setTimeout(() => {
      fetchFavConstellation(setFavoriteList);
    }, 200);
  };

  // Si aucune constellation n'est ouverte (cliquée pour la modal),
  // on return null pour ne pas afficher la modal.
  if (!openedConstellation) {
    document.querySelector("html").classList.remove("no-scroll");
    return null;
  }

  const handleCloseConstellation = () => {
    setIsOpened(false);

    setTimeout(() => {
      setOpenedConstellation(null);
    }, 200);
  };

  document.querySelector("html").classList.add("no-scroll");

  return (
    <div
      className={classNames("Modal", { "Modal--opened": isOpened })}
      onClick={({ target, currentTarget }) => {
        if (currentTarget === target) {
          handleCloseConstellation();
        }
      }}
    >
      <div className="Block Detail-Block">
        <a className="Detail-Modal-Close" onClick={handleCloseConstellation}>
          <AiOutlineCloseCircle />
        </a>
        <h3 className="Title Title--small Detail-Block-Title">
          Constellation {openedConstellation.name}
        </h3>
        <div className="Detail-Block-Container">
          <figure className="Detail-Picture">
            <img
              src={`${baseURL}${openedConstellation.img_url}`}
              alt={openedConstellation.name}
            />
            <figcaption className="Title Title--small Detail-Picture-Title">
              {openedConstellation.latin_name}
            </figcaption>
          </figure>
          <div className="Detail-Description">
            {openedConstellation.myths !== null &&
              openedConstellation.myths.map((e) => {
                return (
                  <React.Fragment key={e.id}>
                    <h2 className="Detail-Description-Title"> Mythe :</h2>
                    <p className="Detail-Description-Text">
                      Selon le mythe d'origine {e.origin}, {e.legend}
                    </p>
                  </React.Fragment>
                );
              })}
            {Boolean(openedConstellation.history) && (
              <>
                <h3 className="Detail-Description-Title">Histoire :</h3>
                <p className="Detail-Description-Text">
                  {openedConstellation.history}
                </p>
              </>
            )}
            {Boolean(openedConstellation.spotting) && (
              <>
                <h3 className="Detail-Description-Title">Répérage :</h3>
                <p className="Detail-Description-Text">
                  {openedConstellation.spotting}
                </p>
              </>
            )}
          </div>
        </div>

        {isConnected &&
          (favoriteList.find((fav) => fav.name === openedConstellation.name) ? (
            <AiFillHeart
              onClick={() => {
                handleFavs();
              }}
              className="Detail-Modal-Favorite Detail-Modal-Favorite--favorited"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                handleFavs();
              }}
              className="Detail-Modal-Favorite"
            />
          ))}
      </div>
    </div>
  );
};

export default ConstellationModal;
