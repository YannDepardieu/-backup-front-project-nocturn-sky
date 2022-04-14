import { useContext } from 'react';

import constellationContext from '../../../contexts/ConstellationContext';

import './Constellation.scss';

const Constellation = ({ constellation }) => {
  const { setOpenedConstellation } = useContext(constellationContext);

  return (
    <li
      className="Constellations-Item"
      onClick={() => setOpenedConstellation(constellation)}
    >
      <img
        className="Constellations-Item-Image"
        src={`https://picsum.photos/200`}
      />

      <strong className="Constellations-Item-Name">
        {constellation.name}
      </strong>
    </li>
  )
};

export default Constellation;
