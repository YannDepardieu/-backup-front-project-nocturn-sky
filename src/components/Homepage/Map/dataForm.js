import React, { useContext } from "react";
import { MapFormContext } from "../../../contexts/MapFormContext";
// import InteractiveMap from "./InteractiveMap";

export default function DataForm() {
  const { inputContent, setInputContent } = useContext(MapFormContext);
  return (
    <div>
      'hello'
      {console.log(inputContent)}
    </div>
  );
}
