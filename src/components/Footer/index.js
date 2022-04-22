import React, { useState, useContext, useEffect } from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Sections">
        <div className="Footer-Sections-Section Description">
          <h3 className="Footer-Sections-Section-Title">Notre quête</h3>
          <p className="Footer-Sections-Section-Content">
            Aider à partager des histoires au tour des étoiles pour apprécier
            les qualités d'un beau ciel nocture à l'heure où la pollution
            lumineuse devient un fléau.
          </p>
        </div>
        <div className="Footer-Sections-Section Plan">
          <h3 className="Footer-Sections-Section-Title">Plan du site</h3>
          <ul>
            <li>
              <a className="Footer-Sections-Section-Link" href="/">
                accueil
              </a>
            </li>
            <li>
              <a className="Footer-Sections-Section-Link" href="#Map">
                carte interactive
              </a>
            </li>
            <li>
              <a
                className="Footer-Sections-Section-Link"
                href="/constellations"
              >
                constellations
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="Footer-Bottom">
        Cette application a été dévéloppée grâce à la librairie
        <a target="_blank" href="https://github.com/ofrohn/d3-celestial">
          {" "}
          D3-Celestial
        </a>{" "}
        d'
        <a target="_blank" href="https://twitter.com/olaffrohn">
          Olaf Frohn
        </a>
      </p>
    </div>
  );
}

export default Footer;
