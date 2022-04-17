import { useState, useContext } from "react";
import authContext from "../../../contexts/AuthContext";
import { MapFormContext } from "../../../contexts/MapFormContext";
import { getAddress } from "../../../utils/fetchApi";

const Form = () => {
  const { isConnected } = useContext(authContext);
  const { inputContent, setInputContent } = useContext(MapFormContext);

  const [address, setAddress] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [locationError, setLocationError] = useState(null);
  const [userCoords, setUserCoords] = useState({});

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          setUserCoords(userPosition.coords);
          setInputContent(userPosition.coords);
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError(
        "Votre navigateur ne permet pas de partager votre position."
      );
    }
  };

  const apiLocation = async () => {
    const result = await getAddress(address);
    setInputContent(result);
  };

  const selectDateTime = (e) => {
    setDatetime(e.target.value);
    setInputContent(e.target.value);
  };

  console.log("Form inputContent", inputContent);

  return (
    <div className="Block Map-Form">
      {locationError && (
        <p>
          <span onClick={() => setLocationError(null)}>Fermer</span>
          {locationError}
        </p>
      )}
      <div className="Map-Form-left">
        <input
          title="Adresse"
          className="Input"
          name="address"
          type="text"
          placeholder="1 rue Dupont, 75000 Paris, FRANCE"
          value={address}
          onChange={({ currentTarget }) => {
            setAddress(currentTarget.value);
            console.log(currentTarget.value);
          }}
        />
        <button className="Button" onClick={apiLocation}>
          Chercher
        </button>
        <div className="Map-Form-row">
          <input
            className="Input"
            name="datetime"
            type="datetime-local"
            value={datetime}
            // onChange={({ currentTarget }) => {
            //   setDatetime(currentTarget.value);
            //   console.log(`date : ${currentTarget.value}`);
            // }}
            onChange={selectDateTime}
          />
          <button className="Button" onClick={getUserLocation}>
            Position actuelle
          </button>
        </div>
      </div>
      {isConnected && (
        <div className="Map-Form-right">
          <button className="Button">Enregistrer ce lieu comme favori</button>
          <button className="Button">Enregistrer un événement</button>
        </div>
      )}
    </div>
  );
};

export default Form;
