import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import authContext from "../../contexts/AuthContext";
import constellationContext from "../../contexts/ConstellationContext";
import { filterName } from "../../utils/filterName";
import {
  fetchSearchOptions,
  fetchFavConstellation,
  fetchContentEntity,
} from "../../utils/fetchApi";

import "./Header.scss";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);
  // const [favoriteList, setFavoriteList] = useState([]);
  const [constellations, setConstellations] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [searchBarOpen, setSearchBarOpen] = useState(false);
  const { isConnected, disconnectUser } = useContext(authContext);
  const { setOpenedConstellation, favoriteList, setFavoriteList } =
    useContext(constellationContext);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleSetConstellations = (constellationsData) => {
    setConstellations(constellationsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContentEntity("constellation", handleSetConstellations);
    fetchSearchOptions(setSearchOptions);
    fetchFavConstellation(setFavoriteList);
    return () => {
      setSearchValue("");
      setMenuOpened(false);
    };
  }, []);

  // useEffect(() => {
  //   fetchFavConstellation(setFavoriteList);
  // }, [searchBarOpen]);

  let options = [];

  if (searchOptions.length > 0 && searchValue.length > 0) {
    options = searchOptions.filter((option) =>
      filterName(option.name).includes(filterName(searchValue))
    );
  }

  const stopDefault = (event) => {
    event.preventDefault();
    // setSearchBarOpen(true);
  };

  const handleFavConstellation = (optionId) => {
    const foundConst = constellations.find(
      (constellation) => constellation.id === optionId
    );
    // console.log("ma constellation ", foundConst);
    // console.log("mes favoris", favoriteList);
    const isFav = favoriteList.find((favorite) => favorite.id === optionId)
      ? true
      : false;
    // console.log("is favorite ", isFav);
    const decoratedConstellation = {
      ...foundConst,
      favorite: isFav,
    };
    setOpenedConstellation(decoratedConstellation);
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
                viewBox="0 0 291.9 132.2"
              >
                <path
                  d="M44.9,71.1l-4.1-8.3l-4.1,8.3l-9.2,1.3l6.6,6.5L32.6,88l8.2-4.3L49,88l-1.6-9.1l6.6-6.5L44.9,71.1z M58,44.9
	c-2,0-3.6-0.6-4.7-1.7c-1.1-1.1-1.6-2.8-1.6-4.9V16.6h11v-4.1h-11v-8h-4.9v8h-6.5v4.1h6.5v21.9c0,3.4,0.9,6,2.8,7.8
	c1.8,1.8,4.5,2.8,7.9,2.8c1.4,0,2.8-0.2,4.2-0.6c1.4-0.4,2.5-1.1,3.5-1.9L63.4,43C62,44.2,60.2,44.9,58,44.9z M22.7,96.4l-5.4-10.9
	L12,96.4L0,98.1l8.7,8.4l-2,11.9l10.7-5.6l10.7,5.6l-2-11.9l8.7-8.4L22.7,96.4z M146.8,30.2c0-4.3,1.1-7.6,3.2-9.9
	c2.2-2.3,5.2-3.5,9-3.5c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0v-4.8c-3.5,0-6.5,0.7-8.9,2.2c-2,1.2-3.6,3-4.6,5.2v-7h-4.7v36.2h4.9
	V30.2z M85,28.2c-3.4,0-6.2,0.5-8.2,1.4c-2,0.9-3.5,2.2-4.4,3.7c-0.9,1.5-1.3,3.3-1.3,5.1c0,2.1,0.5,3.9,1.6,5.5
	c1.1,1.6,2.6,2.8,4.6,3.7c2,0.9,4.4,1.3,7.1,1.3c3.5,0,6.3-0.7,8.6-2.1c1.7-1,3-2.3,3.9-3.9v5.7h4.7V26.2c0-4.7-1.3-8.3-3.8-10.6
	c-2.6-2.3-6.2-3.5-10.9-3.5c-2.9,0-5.6,0.4-8.1,1.3C76,14.3,73.8,15.5,72,17l2.2,3.7c1.5-1.3,3.3-2.3,5.4-3.1
	c2.1-0.8,4.3-1.2,6.7-1.2c3.4,0,6,0.8,7.7,2.5c1.7,1.7,2.6,4,2.6,7.1v2.2H85z M96.5,37.8c-0.9,2.4-2.4,4.2-4.4,5.5
	c-2,1.3-4.4,1.9-7.1,1.9c-2.9,0-5.2-0.6-6.8-1.9c-1.6-1.2-2.4-2.9-2.4-5c0-1.8,0.7-3.4,2-4.6c1.4-1.2,3.8-1.9,7.3-1.9h11.4V37.8z
	 M21.5,66.8l-2-4l-2,4l-4.4,0.6l3.2,3.1l-0.7,4.4l3.9-2.1l3.9,2.1l-0.7-4.4l3.2-3.1L21.5,66.8z M25.4,43.6c-1.9,0.8-4.4,1.1-7.4,1.1
	c-3.2,0-6.2-0.6-9.1-1.7C6,42,3.7,40.6,2,38.9l-2,3.9c1.8,1.8,4.3,3.3,7.6,4.5c3.3,1.2,6.7,1.8,10.3,1.8c4.1,0,7.5-0.6,10.2-1.8
	c2.6-1.2,4.6-2.8,5.9-4.8c1.3-2,1.9-4.2,1.9-6.5c0-2.5-0.5-4.6-1.6-6.1C33.2,28.2,31.8,27,30,26c-1.8-0.9-3.7-1.7-5.8-2.3
	c-2.1-0.6-4.2-1.1-6.3-1.7c-2.1-0.5-4.1-1.1-5.8-1.7c-1.8-0.6-3.2-1.5-4.3-2.7c-1.1-1.1-1.6-2.7-1.6-4.6c0-1.7,0.4-3.1,1.3-4.5
	c0.9-1.3,2.3-2.4,4.2-3.1c1.9-0.8,4.3-1.2,7.2-1.2c2.2,0,4.4,0.3,6.7,1C28,6,30.2,7,32.2,8.3l1.7-4.1C32,2.9,29.7,1.9,27,1.1
	C24.4,0.4,21.7,0,19,0c-4.1,0-7.5,0.6-10.1,1.8C6.3,3,4.3,4.7,3.1,6.7c-1.3,2-1.9,4.2-1.9,6.6c0,2.6,0.5,4.7,1.6,6.2
	c1.1,1.6,2.5,2.9,4.3,3.8c1.8,1,3.7,1.7,5.8,2.3c2.1,0.6,4.2,1.1,6.3,1.6c2.1,0.5,4,1.1,5.8,1.8c1.7,0.7,3.2,1.6,4.2,2.7
	c1.1,1.2,1.6,2.7,1.6,4.6c0,1.6-0.4,3-1.3,4.3C28.7,41.9,27.3,42.9,25.4,43.6z M251.2,114.6c-2,0-3.6-0.6-4.7-1.7
	c-1.1-1.1-1.6-2.8-1.6-4.9V86.3h11v-4.1h-11v-8H240v8h-6.5v4.1h6.5v21.9c0,3.4,0.9,6,2.8,7.8c1.8,1.8,4.5,2.8,7.9,2.8
	c1.4,0,2.8-0.2,4.2-0.6c1.4-0.4,2.5-1.1,3.5-1.9l-1.7-3.5C255.2,114,253.4,114.6,251.2,114.6z M290.7,103.7c-0.9-1.2-2-2.2-3.4-2.8
	c-1.4-0.7-2.9-1.2-4.6-1.6c-1.7-0.4-3.4-0.7-5-1c-1.7-0.3-3.2-0.6-4.6-1.1c-1.4-0.4-2.5-1-3.4-1.8c-0.9-0.8-1.3-1.9-1.3-3.2
	c0-1.7,0.8-3.2,2.3-4.3c1.5-1.1,3.9-1.7,7.2-1.7c1.8,0,3.7,0.2,5.5,0.7c1.8,0.5,3.6,1.3,5.2,2.4l2.1-3.9c-1.5-1-3.5-1.8-5.8-2.5
	c-2.3-0.6-4.7-0.9-7-0.9c-3.1,0-5.7,0.4-7.8,1.3c-2.1,0.9-3.8,2.1-4.9,3.7c-1.1,1.6-1.7,3.3-1.7,5.3c0,2.1,0.4,3.7,1.3,5
	c0.9,1.2,2,2.2,3.3,2.9c1.4,0.7,2.9,1.3,4.6,1.6c1.7,0.4,3.4,0.7,5.1,1c1.7,0.3,3.2,0.6,4.6,1c1.4,0.4,2.5,1,3.3,1.7
	c0.9,0.8,1.3,1.8,1.3,3.1c0,1.8-0.8,3.2-2.3,4.3c-1.5,1.1-4,1.6-7.5,1.6c-2.5,0-4.9-0.4-7.2-1.2c-2.3-0.8-4.2-1.8-5.7-2.9l-2.2,3.9
	c1.5,1.3,3.6,2.4,6.3,3.2c2.7,0.9,5.5,1.3,8.5,1.3c3.2,0,5.9-0.4,8.1-1.3c2.2-0.9,3.9-2,5.1-3.6c1.2-1.5,1.8-3.4,1.8-5.5
	C291.9,106.5,291.5,104.9,290.7,103.7z M196.2,12.5l-13.7,30.8l-13.7-30.8h-5.1L180,48.6l-1.6,3.5c-1.1,2.3-2.2,3.8-3.3,4.7
	s-2.6,1.3-4.2,1.3c-1.3,0-2.5-0.2-3.6-0.7c-1.1-0.5-2.1-1.2-3-2l-2.3,3.7c1.1,1.1,2.4,1.9,4,2.5c1.5,0.6,3.2,0.8,4.9,0.8
	c1.7,0,3.3-0.3,4.8-0.9c1.4-0.6,2.7-1.6,4-2.9c1.2-1.4,2.3-3.2,3.3-5.6l18.1-40.6H196.2z M174.2,89.1c-1.5-2.2-3.3-4-5.7-5.2
	c-2.6-1.3-5.5-2-8.7-2c-3.5,0-6.6,0.7-9.3,2.2c-2.8,1.5-4.9,3.5-6.5,6.2c-1.6,2.6-2.4,5.7-2.4,9.1s0.8,6.5,2.4,9.2
	c1.6,2.7,3.8,4.8,6.5,6.2c2.8,1.5,5.9,2.2,9.3,2.2c3.2,0,6.1-0.7,8.7-2.1c2.2-1.2,4-2.8,5.5-4.9v4.6c0,4.5-1.1,7.8-3.2,10
	c-2.2,2.1-5.5,3.2-10.1,3.2c-2.8,0-5.5-0.4-8-1.3c-2.5-0.9-4.6-2.1-6.3-3.6l-2.5,3.7c1.9,1.8,4.3,3.2,7.4,4.1c3,1,6.2,1.4,9.5,1.4
	c6,0,10.5-1.5,13.6-4.4c3.1-2.9,4.6-7.5,4.6-13.8V82.3h-4.7V89.1z M172.4,106.4c-1.2,2-2.8,3.6-4.9,4.7c-2.1,1.1-4.4,1.7-7.1,1.7
	c-2.6,0-5-0.6-7.1-1.7c-2.1-1.1-3.7-2.7-4.9-4.7c-1.2-2-1.8-4.3-1.8-6.9s0.6-4.9,1.8-6.9c1.2-2,2.8-3.5,4.9-4.7
	c2.1-1.1,4.5-1.7,7.1-1.7c2.7,0,5,0.6,7.1,1.7c2.1,1.1,3.7,2.7,4.9,4.7c1.2,2,1.8,4.3,1.8,6.9S173.5,104.4,172.4,106.4z M218.8,83.6
	c-2.2-1.1-4.8-1.7-7.8-1.7c-3.5,0-6.5,0.7-9,2.2c-1.9,1.1-3.4,2.6-4.6,4.4V67.3h-4.9v51.2h4.9v-19c0-2.8,0.5-5.1,1.6-7.1
	c1-2,2.5-3.5,4.4-4.5c1.9-1,4.2-1.6,6.7-1.6c3.5,0,6.1,1,8,2.9c1.9,2,2.9,4.8,2.9,8.7v20.6h4.9v-21c0-3.5-0.6-6.4-1.9-8.7
	C222.8,86.5,221.1,84.7,218.8,83.6z M107,109.4L75.9,70.2h-4.2v48.3h5.1V79.3l31,39.2h4.2V70.2h-5V109.4z M131.9,16.8
	c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0v-4.8c-3.5,0-6.5,0.7-8.9,2.2c-2,1.2-3.6,3-4.6,5.2v-7h-4.7v36.2h4.9V30.2
	c0-4.3,1.1-7.6,3.2-9.9C125,18,128,16.8,131.9,16.8z M131.5,69.8l-2.3-4.7l-2.3,4.7l-5.2,0.8l3.8,3.7l-0.9,5.2l4.7-2.4l4.7,2.4
	l-0.9-5.2l3.8-3.7L131.5,69.8z M126.7,118.5h4.9V82.3h-4.9V118.5z"
                />
              </svg>
            </NavLink>
            <form onSubmit={stopDefault}>
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
                        onClick={() => {
                          setSearchValue("");
                          handleFavConstellation(option.id);
                        }}
                      >
                        {option.name}
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
                    {/* <li
                      className="Header-Menu-Item"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Mes constellations
                    </li> */}
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
    </>
  );
}

export default Header;
