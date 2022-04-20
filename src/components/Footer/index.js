import React, { useState, useContext, useEffect } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Section Description">
        <h3 className="Footer-Section-Title">Notre quête</h3>
        <p className="Footer-Section-Content">
          Aider à partager des histoires au tour des étoiles pour apprécier les
          qualités d'un beau ciel nocture à l'heure où la pollution lumineuse
          devient un fléau.
        </p>
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
            <a className="Footer-Section-Link" href="#Map">
              carte interactive
            </a>
          </li>
          <li>
            <a className="Footer-Section-Link" href="/constellations">
              constellations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
