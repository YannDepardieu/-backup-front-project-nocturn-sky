import { useContext } from "react";

import { baseURL } from "../../../utils/axios";

import constellationContext from "../../../contexts/ConstellationContext";

import "./Constellation.scss";

const Constellation = ({ constellation, isFav }) => {
  const { setOpenedConstellation } = useContext(constellationContext);

  const decoratedConstellation = {
    ...constellation,
    favorite: isFav,
  };

  return (
    <li
      className="Constellations-Item"
      onClick={() => setOpenedConstellation(decoratedConstellation)}
    >
      <img
        className="Constellations-Item-Image"
        src={`${baseURL}${constellation.img_url}`}
        onError={({ currentTarget }) =>
          (currentTarget.src = "https://www.fillmurray.com/200/350")
        }
      />

      <strong className="Constellations-Item-Name">{constellation.name}</strong>
    </li>
  );
};

export default Constellation;
