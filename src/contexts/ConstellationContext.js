import React, { createContext, useState } from 'react';

const constellationContext = createContext();

export const ConstellationProvider = ({ children }) => {
  const [openedConstellation, setOpenedConstellation] = useState(null);

  const constellation = {
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
