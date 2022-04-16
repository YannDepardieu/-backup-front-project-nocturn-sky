import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import authContext from "../../contexts/AuthContext";
import { filterName } from "../../utils/filterName";
import { fetchSearchOptions } from "../../utils/fetchApi";

import "./Header.scss";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);
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
  }, []);

  let options = [];

  if (searchOptions.length > 0 && searchValue.length > 0) {
    options = searchOptions.filter((option) =>
      filterName(option.name).includes(filterName(searchValue))
    );
  }

  return (
    <header className="Header">
      <div className="Container">
        <div className="Header-Left">
          <NavLink to="/">
            <img
              className="Header-Logo"
              src="https://picsum.photos/60?random=1"
            />
          </NavLink>
          <label className="Header-Search" htmlFor="header-search">
            <input
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
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </label>
        </div>

        <div className="Header-Right">
          <nav className="Header-Nav">
            <NavLink to="/constellations">Constellations</NavLink>
            {/* <NavLink to="/myths" >Mythes</NavLink> */}
          </nav>
          <div className="Header-Menu">
            <BiUserCircle className="Header-Menu-Toggle" onClick={toggleMenu} />
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
  );
}

export default Header;
