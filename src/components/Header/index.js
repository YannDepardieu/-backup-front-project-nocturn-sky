import {NavLink} from "react-router-dom";
//import Navbar from "./HeaderMenu/Navbar";
import './styles.scss';
//import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import { BiUserCircle } from 'react-icons/bi';

function Header () {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header className="Header">
      <div className="container">
        <div className="Header-Left">
          <img className="Header-Logo" src="https://picsum.photos/60?random=1" />
          <label className="Header-Search" htmlFor="header-search">
            <input className="Header-Search-Input" id="header-search"/>
            <span className="Header-Search-Label">Recherche</span>
          </label>
        </div>

        <div className="Header-Right">
          <nav className="Header-Nav"> 
            <NavLink to="/constellation" >Constellation</NavLink>
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
              <li className="Header-Menu-Item"><a href="">S'inscrire</a></li>
              <li className="Header-Menu-Item"><a href="">Se déconnecter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
