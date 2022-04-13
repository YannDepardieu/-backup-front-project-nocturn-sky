import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import authContext from "../../contexts/AuthContext";

import { BiUserCircle } from 'react-icons/bi';

import './Header.scss';

function Header () {
  const [menuOpened, setMenuOpened] = useState(false);
  const { isConnected } = useContext(authContext);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className="Header">
      <div className="Container">
        <div className="Header-Left">
          <NavLink to="/">
            <img className="Header-Logo" src="https://picsum.photos/60?random=1" />
          </NavLink>
          <label className="Header-Search" htmlFor="header-search">
            <input
              className="Input Input--dark"
              id="header-search"
              placeholder="Orion, andromède..."
            />
          </label>
        </div>

        <div className="Header-Right">
          <nav className="Header-Nav"> 
            <NavLink to="/Constellations">Constellations</NavLink>
            <NavLink to="/myths" >Myths</NavLink>
          </nav>
          <div className="Header-Menu">
            <BiUserCircle
              className="Header-Menu-Toggle"
              onClick={toggleMenu}
            />
            <ul
              className={
                classnames(
                  'Header-Menu-Container',
                  { 'Header-Menu-Container--opened': menuOpened }
                )
              }
            >
              {/* Liens visibles uniquement si l'utilisateur est déconnecté */}
              {!isConnected && (
                <>
                  <li className="Header-Menu-Item">
                    <NavLink to="/signup">S'inscrire</NavLink>
                  </li>
                  <li className="Header-Menu-Item">
                    <NavLink to="/login">Se connecter</NavLink>
                  </li>
                </>
              )}
              {/* Liens visibles uniquement si l'utilisateur est connecté */}
              {isConnected && (
                <>
                  <li className="Header-Menu-Item">
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
