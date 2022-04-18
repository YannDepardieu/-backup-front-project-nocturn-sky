import React, { useState, useContext, useEffect } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Section Contact">
        <h3 className="Footer-Section-Title">Nous contacter</h3>
        <a className="Footer-Section-Link">envoyer un message</a>
      </div>
      <div className="Footer-Section Plan">
        <h3 className="Footer-Section-Title">Plan du site</h3>
        <ul>
          <li>
            <a className="Footer-Section-Link" href="/">
              accueil
            </a>
          </li>
          <li>
            <a className="Footer-Section-Link" href="/">
              carte interactive
            </a>
          </li>
          <li>
            <a className="Footer-Section-Link" href="/">
              constellations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
