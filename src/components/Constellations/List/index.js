import { useEffect, useState } from "react";
import {
  fetchContentEntity,
  fetchFavConstellation,
} from "../../../utils/fetchApi";

import Constellation from "../Constellation";
import Loading from "../../Loading";

import "./List.scss";

const ConstellationsList = () => {
  const [constellations, setConstellations] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetConstellations = (constellationsData) => {
    setConstellations(constellationsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContentEntity("constellation", handleSetConstellations);
    fetchFavConstellation(setFavoriteList);
    setIsLoading(true);
  }, []);

  return (
    <ul className="Constellations-List">
      {isLoading && <Loading />}
      {constellations.map((constellation, index) => (
        <Constellation
          key={`Constellations-Item--${index}`}
          constellation={constellation}
          isFav={
            favoriteList.find((favorite) => favorite.id === constellation.id)
              ? true
              : false
          }
        />
      ))}
    </ul>
  );
};

export default ConstellationsList;
