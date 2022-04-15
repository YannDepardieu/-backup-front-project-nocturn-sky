import React, { useState, useEffect } from "react";
import ArrowDown from "../../ArrowDown";
import { baseURL } from "../../../utils/axios";
import { fetchRandomMyth } from "../../../utils/fetchApi";

import "./TodayMyth.scss";

const TodayMyth = () => {
  const [randomMyth, setRandomMyth] = useState([]);

  useEffect(() => {
    fetchRandomMyth(setRandomMyth);
  }, []);

  const data = { ...randomMyth[0] };
  const constellation = { ...data.constellation };

  return (
    <section id="Myth" className="Section Myth">
      <h2 className="Title Myth-Title">Retrouvez les mythes</h2>

      <div className="Block Myth-Block">
        <figure className="Myth-Picture">
          <img
            src={`${baseURL}${constellation.img_url} `}
            alt={`Constellation ${constellation.name} `}
          />
          <figcaption className="Title Title--small">
            {constellation.name}
          </figcaption>
        </figure>
        <div className="Myth-Description">
          <h3 className="Myth-Description-Title">Mythe :</h3>
          <p className="Myth-Description-Text">
            D'origine {data.origin}, {data.legend}
          </p>
          <h3 className="Myth-Description-Title">Histoire :</h3>
          <p className="Myth-Description-Text">{constellation.story}</p>
          <h3 className="Myth-Description-Title">Répérage :</h3>
          <p className="Myth-Description-Text">{constellation.spotting}</p>
        </div>
      </div>

      <ArrowDown href="#Map" />
    </section>
  );
};

export default TodayMyth;
