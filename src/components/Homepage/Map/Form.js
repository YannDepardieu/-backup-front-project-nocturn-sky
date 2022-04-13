import { useState } from 'react';

const Form = () => {
  const [ address, setAddress ] = useState('');
  const [ datetime, setDatetime ] = useState(new Date());
  const [ locationError, setLocationError ] = useState(null);
  const [ userCoords, setUserCoords ] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => setUserCoords(userPosition.coords),
        () => setLocationError(error.message)
      );
    }
    else {
      setLocationError('Votre navigateur ne permet pas de partager votre position.');
    }
  };

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
          className="Input"
          name="address"
          type="text"
          placeholder="1 rue Dupont, 75000 Paris"
          value={address}
          onChange={({ currentTarget }) => setAddress(currentTarget.value)}
        />
        <div className="Map-Form-row">
          <input
            className="Input"
            name="datetime"
            type="datetime-local"
            value={datetime}
            onChange={({ currentTarget }) => setDatetime(currentTarget.value)}
          />
          <button
            className="Button"
            onClick={getUserLocation}
          >
            Position actuelle
          </button>
        </div>
      </div>

      <div className="Map-Form-right">
        <button
          className="Button"
        >
          Enregistrer ce lieu comme favori
        </button>
        <button
          className="Button"
        >
          Enregistrer cet événement
        </button>
      </div>
    </div>
  );
}

export default Form;
