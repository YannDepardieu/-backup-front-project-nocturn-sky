import React, { createContext, useState } from "react";

const mythContext = createContext();

export const MythProvider = ({ children }) => {
  const [openedMyth, setOpenedMyth] = useState(null);

  const myth = {
    openedMyth,
    setOpenedMyth,
  };

  return <mythContext.Provider value={myth}>{children}</mythContext.Provider>;
};

export default mythContext;
