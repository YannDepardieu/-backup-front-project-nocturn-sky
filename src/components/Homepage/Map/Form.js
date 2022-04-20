// import { useState, useContext } from "react";
import { useState, useContext } from "react";
import authContext from "../../../contexts/AuthContext";
import { getAddress } from "../../../utils/fetchApi";
import InteractiveMap from "./InteractiveMap";

const Form = () => {
  const { isConnected } = useContext(authContext);

  const [address, setAddress] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [locationError, setLocationError] = useState(null);
  const [userCoords, setUserCoords] = useState({});

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          setUserCoords({
            latitude: userPosition.coords.latitude,
            longitude: userPosition.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
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
    setUserCoords({
      latitude: result.latitude,
      longitude: result.longitude,
    });
  };

  return (
    <div className="Map-Form-Container">
      <div className="Block Map-Form">
        <div className="Map-Form-left">
          <input
            autoComplete="off"
            title="Saisissez votre adresse complète"
            className="Input"
            name="address"
            type="text"
            placeholder="1 rue Dupont, 75000 Paris, FRANCE"
            value={address}
            onChange={({ currentTarget }) => {
              setAddress(currentTarget.value);
            }}
          />
          <button
            title="Cherchez les constellations visibles depuis votre adresse"
            className="Button"
            onClick={apiLocation}
          >
            Chercher
          </button>
          <div className="Map-Form-row">
            <input
              title="Changez la date et l'heure pour montrer les constellations visibles"
              className="Input"
              name="datetime"
              type="datetime-local"
              value={datetime}
              onChange={({ currentTarget }) => {
                setDatetime(currentTarget.value);
              }}
            />
            <button
              title="Regardez les constellations visibles depuis votre position actuelle"
              className="Button"
              onClick={getUserLocation}
            >
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
      <InteractiveMap
        latitude={userCoords.latitude}
        longitude={userCoords.longitude}
        datetime={datetime}
      />
    </div>
  );
};

export default Form;
