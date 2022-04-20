import React, { createContext, useState } from "react";
// import authContext from "./AuthContext";

export const MapFormContext = createContext();

const MapFormProvider = (props) => {
  const [inputContent, setInputContent] = useState();
  return (
    <MapFormContext.Provider value={{ inputContent, setInputContent }}>
      {props.children}
    </MapFormContext.Provider>
  );
};

export default MapFormProvider;
