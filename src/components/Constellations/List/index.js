import { useEffect, useState } from 'react';
import { fetchContentEntity } from '../../../utils/fetchApi';

import Constellation from '../Constellation';
import Loading from '../../Loading';

import './List.scss';

const ConstellationsList = () => {
  const [constellations, setConstellations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetConstellations = (constellationsData) => {
    setConstellations(constellationsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContentEntity('constellation', handleSetConstellations);
    setIsLoading(true);
  }, []);

  return (
    <ul className="Constellations-List">
      {isLoading && <Loading />}
      {constellations.map((constellation, index) => (
        <Constellation
          key={`Constellations-Item--${index}`}
          constellation={constellation}
        />
      ))}
    </ul>
  );
};

export default ConstellationsList;
