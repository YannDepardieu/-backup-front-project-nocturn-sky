import { useEffect, useState } from "react";
import { fetchContentEntity } from "../../../utils/fetchApi";

import Myth from "../Myth";
import Loading from "../../Loading";

import "./List.scss";

const MythsList = () => {
  const [myths, setMyths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetMyths = (mythsData) => {
    setMyths(mythsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContentEntity("myth", handleSetMyths);
    setIsLoading(true);
  }, []);

  return (
    <ul className="Myths-List">
      {isLoading && <Loading />}
      {myths.map((myth, index) => (
        <Myth key={`Myths-Item--${index}`} myth={myth} />
      ))}
    </ul>
  );
};

export default MythsList;
