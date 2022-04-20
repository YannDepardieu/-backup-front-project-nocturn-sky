import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import authContext from "../../contexts/AuthContext";
import { filterName } from "../../utils/filterName";
import { fetchSearchOptions, fetchConstellation } from "../../utils/fetchApi";

import {
  AiOutlineCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import "./Header.scss";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);
  const [submittedConstellation, setSubmittedConstellation] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { isConnected, disconnectUser } = useContext(authContext);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    fetchSearchOptions(setSearchOptions);
    return () => {
      setSearchValue("");
      setMenuOpened(false);
    };
  }, []);

  let options = [];

  if (searchOptions.length > 0 && searchValue.length > 0) {
    options = searchOptions.filter((option) =>
      filterName(option.name).includes(filterName(searchValue))
    );
  }

  const findConstellation = (event) => {
    event.preventDefault();
    fetchConstellation(options[0].id, setSubmittedConstellation);
    setIsOpen(true);
  };

  const handleIsOpen = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="Header">
        <div className="Container">
          <div className="Header-Left">
            <NavLink to="/">
              <svg
                className="Header-Logo"
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 291.4 131.9"
              >
                <path d="M44.9,71.1l-4.1-8.3-4.1,8.3-9.1,1.4,6.6,6.4L32.6,88l8.2-4.3L49,88l-1.6-9.1,6.7-6.4ZM58,44.9a5.9,5.9,0,0,1-4.6-1.8,6.8,6.8,0,0,1-1.7-4.9V16.6H62.8V12.5H51.7v-8H46.9v8H40.4v4.1h6.5V38.5q0,5.1,2.7,7.8c1.8,1.8,4.5,2.8,7.9,2.8a12.3,12.3,0,0,0,4.2-.7,8.1,8.1,0,0,0,3.4-1.9L63.4,43A8.1,8.1,0,0,1,58,44.9ZM21.5,66.8l-1.9-4-2,4-4.4.7,3.2,3-.7,4.4,3.9-2.1,3.9,2.1-.8-4.4,3.2-3Zm1.2,29.6L17.3,85.5,12,96.4,0,98.1l8.7,8.5L6.6,118.5l10.7-5.6L28,118.5l-2-11.9,8.7-8.5Zm2.7-52.8a20,20,0,0,1-7.5,1.2,24.8,24.8,0,0,1-9-1.7A19.3,19.3,0,0,1,2,38.9L0,42.8a19.3,19.3,0,0,0,7.6,4.6,32.7,32.7,0,0,0,10.3,1.7,24.5,24.5,0,0,0,10.2-1.8A13.1,13.1,0,0,0,34,42.5a11.8,11.8,0,0,0,1.9-6.6,10.5,10.5,0,0,0-1.6-6.1A12.2,12.2,0,0,0,30,26a32.3,32.3,0,0,0-5.7-2.3l-6.4-1.6c-2.1-.5-4-1.1-5.8-1.7a12.2,12.2,0,0,1-4.3-2.7,6.9,6.9,0,0,1-1.6-4.6A7.7,7.7,0,0,1,7.6,8.7a8.5,8.5,0,0,1,4.1-3.2,18.7,18.7,0,0,1,7.2-1.2,26.5,26.5,0,0,1,6.7,1,24.7,24.7,0,0,1,6.6,3l1.7-4A22,22,0,0,0,27,1.1,30.9,30.9,0,0,0,19,0,24.4,24.4,0,0,0,8.9,1.8,12.9,12.9,0,0,0,3.1,6.7a11.7,11.7,0,0,0-1.9,6.5,10.9,10.9,0,0,0,1.6,6.3,11.3,11.3,0,0,0,4.3,3.8,21.3,21.3,0,0,0,5.8,2.3l6.4,1.7A38.5,38.5,0,0,1,25,29a12.2,12.2,0,0,1,4.3,2.7,6.5,6.5,0,0,1,1.6,4.6,7.3,7.3,0,0,1-1.3,4.3A8.5,8.5,0,0,1,25.4,43.6ZM146.8,30.2c0-4.3,1-7.6,3.2-9.9a11.9,11.9,0,0,1,9-3.5h1.1V12.1a17.2,17.2,0,0,0-8.9,2.2,11.6,11.6,0,0,0-4.6,5.2v-7h-4.7V48.7h4.9ZM85,28.2a20.5,20.5,0,0,0-8.2,1.4,9.6,9.6,0,0,0-4.5,3.8A9.7,9.7,0,0,0,71,38.5,9.4,9.4,0,0,0,72.6,44a10.1,10.1,0,0,0,4.6,3.7,16.8,16.8,0,0,0,7,1.4,15.9,15.9,0,0,0,8.6-2.2A10.4,10.4,0,0,0,96.7,43v5.7h4.7V26.2c0-4.7-1.2-8.2-3.8-10.6s-6.2-3.5-10.9-3.5a27.5,27.5,0,0,0-8.1,1.3A20.8,20.8,0,0,0,72,17l2.2,3.7a15.6,15.6,0,0,1,5.4-3.1,18.4,18.4,0,0,1,6.6-1.2c3.5,0,6,.8,7.7,2.5s2.6,4,2.6,7.1v2.2Zm11.5,9.6a11,11,0,0,1-4.4,5.5A12.6,12.6,0,0,1,85,45.2a10.8,10.8,0,0,1-6.8-1.9,5.9,5.9,0,0,1-2.4-4.9,6.1,6.1,0,0,1,2.1-4.7q1.9-1.8,7.2-1.8H96.5Zm107.6,76.5a6.4,6.4,0,0,1-4.7-1.7,6.9,6.9,0,0,1-1.6-4.9V86h11V81.9h-11v-8h-4.9v8h-6.5V86h6.5v21.9c0,3.4.9,6,2.8,7.8s4.4,2.8,7.8,2.8a14.7,14.7,0,0,0,4.2-.6,8.7,8.7,0,0,0,3.5-2l-1.7-3.5A7.9,7.9,0,0,1,204.1,114.3Zm42.2-31a15.9,15.9,0,0,0-7.7-1.7,17.8,17.8,0,0,0-9.1,2.2,13.5,13.5,0,0,0-4.5,4.4V67h-4.9v51.2H225V99.1a15.5,15.5,0,0,1,1.5-7.1,11.5,11.5,0,0,1,4.5-4.5,14.1,14.1,0,0,1,6.7-1.5,10.9,10.9,0,0,1,8,2.9c1.9,2,2.9,4.9,2.9,8.7v20.6h4.9V97.1a17.5,17.5,0,0,0-1.9-8.7A11.9,11.9,0,0,0,246.3,83.3ZM106.5,109,75.4,69.9H71.2v48.3h5.1V79l31,39.2h4.3V69.9h-5.1Zm89.7-96.5L182.6,43.3,168.9,12.5h-5.1L180,48.6l-1.6,3.6a12.1,12.1,0,0,1-3.3,4.7,6.8,6.8,0,0,1-4.2,1.3,8.6,8.6,0,0,1-3.6-.7,12.1,12.1,0,0,1-3-2L162,59.1a9.7,9.7,0,0,0,4,2.5,12.7,12.7,0,0,0,4.8.8,12.1,12.1,0,0,0,4.8-.8,13.1,13.1,0,0,0,4-2.9,22.4,22.4,0,0,0,3.3-5.6l18.2-40.6Zm94,90.9a8.7,8.7,0,0,0-3.4-2.9,31.1,31.1,0,0,0-4.6-1.6l-5.1-1a28.5,28.5,0,0,1-4.6-1,10.1,10.1,0,0,1-3.4-1.9,4.1,4.1,0,0,1-1.3-3.2,5.1,5.1,0,0,1,2.3-4.3c1.6-1.1,4-1.7,7.3-1.7a21.3,21.3,0,0,1,5.5.7,18.7,18.7,0,0,1,5.2,2.4l2.1-3.9a19.5,19.5,0,0,0-5.8-2.5,28,28,0,0,0-7-.9,20.8,20.8,0,0,0-7.9,1.3,11.5,11.5,0,0,0-4.8,3.7,9.3,9.3,0,0,0-1.7,5.3,8.2,8.2,0,0,0,1.3,5,9.2,9.2,0,0,0,3.3,2.9,20.9,20.9,0,0,0,4.6,1.7l5.1.9,4.6,1a9.8,9.8,0,0,1,3.4,1.7,4.4,4.4,0,0,1,1.2,3.2,5,5,0,0,1-2.2,4.3c-1.6,1.1-4,1.6-7.5,1.6a21.8,21.8,0,0,1-7.2-1.2,19,19,0,0,1-5.7-2.9l-2.2,3.9a16.9,16.9,0,0,0,6.3,3.2,26.1,26.1,0,0,0,8.5,1.3,22.2,22.2,0,0,0,8.1-1.3,10.8,10.8,0,0,0,5.1-3.6,9,9,0,0,0,1.7-5.5A8.4,8.4,0,0,0,290.2,103.4ZM173.7,88.7a14.5,14.5,0,0,0-5.6-5.1,18,18,0,0,0-8.7-2,18.8,18.8,0,0,0-9.3,2.2,16.4,16.4,0,0,0-6.6,6.2,17.1,17.1,0,0,0-2.3,9.1,17.5,17.5,0,0,0,2.3,9.2,16.4,16.4,0,0,0,6.6,6.2,18.9,18.9,0,0,0,9.3,2.3,18.1,18.1,0,0,0,8.7-2.1,14.9,14.9,0,0,0,5.4-4.9v4.6c0,4.5-1.1,7.8-3.2,9.9s-5.6,3.2-10.2,3.2a23,23,0,0,1-7.9-1.3,19.8,19.8,0,0,1-6.4-3.6l-2.4,3.7a17.2,17.2,0,0,0,7.3,4.1,31.1,31.1,0,0,0,9.6,1.5c5.9,0,10.5-1.5,13.5-4.4s4.6-7.5,4.6-13.8V81.9h-4.7ZM171.9,106a13,13,0,0,1-4.9,4.7,14.1,14.1,0,0,1-7.1,1.7,13.8,13.8,0,0,1-7.1-1.7,12.3,12.3,0,0,1-4.9-4.7,13.3,13.3,0,0,1,4.9-18.5,14.9,14.9,0,0,1,7.1-1.6,15.1,15.1,0,0,1,7.1,1.6,13.8,13.8,0,0,1,4.9,4.7,14.1,14.1,0,0,1,0,13.8ZM132.4,16.9h.6V12.1a17.2,17.2,0,0,0-8.9,2.2,12.4,12.4,0,0,0-4.7,5.2v-7h-4.7V48.7h4.9V30.2q0-6.4,3.3-9.9c2.1-2.3,5.1-3.5,9-3.5Zm-6.1,101.3h4.8V81.9h-4.8Zm3.8-45.8-1.4-2.9-1.4,2.9-3.2.4,2.3,2.3-.5,3.1,2.8-1.5,2.8,1.5-.5-3.1,2.3-2.3Z" />
              </svg>
            </NavLink>
            <form onSubmit={findConstellation}>
              <label className="Header-Search" htmlFor="header-search">
                <input
                  autoComplete="off"
                  title="Recherchez une constellation par son nom"
                  className="Input Input--dark"
                  id="header-search"
                  placeholder="Orion, andromède..."
                  value={searchValue}
                  onChange={({ target }) => setSearchValue(target.value)}
                />
                {searchValue.length > 0 && (
                  <ul className="Header-Search-Options">
                    {options.map((option, index) => (
                      <li
                        className="Header-Search-Option"
                        key={`Header-Search-Option--${option.name}--${index}`}
                        onClick={() => setSearchValue(option.name)}
                      >
                        <a href="">{option.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            </form>
          </div>

          <div className="Header-Right">
            <nav className="Header-Nav">
              <NavLink to="/constellations">Constellations</NavLink>
              {/* <NavLink to="/myths" >Mythes</NavLink> */}
            </nav>
            <div className="Header-Menu">
              <BiUserCircle
                className={
                  isConnected
                    ? "Header-Menu-Toggle Connected"
                    : "Header-Menu-Toggle"
                }
                onClick={toggleMenu}
              />

              <ul
                className={classnames("Header-Menu-Container", {
                  "Header-Menu-Container--opened": menuOpened,
                })}
              >
                {/* Liens visibles uniquement si l'utilisateur est déconnecté */}
                {!isConnected && (
                  <>
                    <li className="Header-Menu-Item">
                      <NavLink to="/signup" onClick={closeMenu}>
                        S'inscrire
                      </NavLink>
                    </li>
                    <li className="Header-Menu-Item">
                      <NavLink to="/login" onClick={closeMenu}>
                        Se connecter
                      </NavLink>
                    </li>
                  </>
                )}
                {/* Liens visibles uniquement si l'utilisateur est connecté */}
                {isConnected && (
                  <>
                    <li
                      className="Header-Menu-Item"
                      onClick={() => {
                        disconnectUser();
                        closeMenu();
                      }}
                    >
                      Se déconnecter
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="Modal">
          <div className="Block Detail-Block">
            <a className="Detail-Modal-Close" onClick={handleIsOpen}>
              <AiOutlineCloseCircle />
            </a>
            <h3 className="Title Title--small Detail-Block-Title">
              Constellation {submittedConstellation.name}
            </h3>
            <div className="Detail-Block-Container">
              <figure className="Detail-Picture">
                <img
                  src={`http://54.38.188.38:5000/${submittedConstellation.img_url}`}
                  alt={submittedConstellation.name}
                />
                <figcaption className="Title Title--small Detail-Picture-Title">
                  {submittedConstellation.latin_name}
                </figcaption>
              </figure>
              <div className="Detail-Description">
                {submittedConstellation.myths &&
                  submittedConstellation.myths.map((e) => {
                    return (
                      <>
                        <h2 className="Detail-Description-Title"> Mythe :</h2>
                        <p className="Detail-Description-Text">
                          Selon le mythe d'origine {e.origin}, {e.legend}
                        </p>
                      </>
                    );
                  })}
                {Boolean(submittedConstellation.history) && (
                  <>
                    <h3 className="Detail-Description-Title">Histoire :</h3>
                    <p className="Detail-Description-Text">
                      {submittedConstellation.history}
                    </p>
                  </>
                )}
                {Boolean(submittedConstellation.spotting) && (
                  <>
                    <h3 className="Detail-Description-Title">Répérage :</h3>
                    <p className="Detail-Description-Text">
                      {submittedConstellation.spotting}
                    </p>
                  </>
                )}
              </div>
            </div>
            {/*   
            {isConnected && favorited && (
              <AiFillHeart
                onClick={() => setFavorited(!favorited)}
                className="Detail-Modal-Favorite Detail-Modal-Favorite--favorited"
              />
            )}
            {isConnected && !favorited && (
              <AiOutlineHeart
                onClick={() => setFavorited(!favorited)}
                className="Detail-Modal-Favorite"
              />
            )} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
