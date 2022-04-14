import { useContext } from "react";
import { baseURL } from "../../../utils/axios";

import mythContext from "../../../contexts/MythContext";

import "./Myth.scss";

const Myths = ({ myth }) => {
  const { setOpenedMyth } = useContext(mythContext);

  return (
    <li className="Myths-Item" onClick={() => setOpenedMyth(myth)}>
      <img
        className="Myths-Item-Image"
        src={`${baseURL}${myth.img_url}`}
        onError={({ currentTarget }) =>
          (currentTarget.src = "https://www.fillmurray.com/200/350")
        }
      />

      <strong className="Myths-Item-Name">{myth.name}</strong>
    </li>
  );
};

export default Myths;
