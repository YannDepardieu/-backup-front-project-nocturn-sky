import React, { createContext, useState } from "react";

const constellationContext = createContext();

export const ConstellationProvider = ({ children }) => {
  const [openedConstellation, setOpenedConstellation] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  const constellation = {
    favoriteList,
    setFavoriteList,
    openedConstellation,
    setOpenedConstellation,
  };

  return (
    <constellationContext.Provider value={constellation}>
      {children}
    </constellationContext.Provider>
  );
};

export default constellationContext;
