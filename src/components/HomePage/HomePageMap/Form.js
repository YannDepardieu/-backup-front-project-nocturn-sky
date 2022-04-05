import { useState } from 'react';

function Form() {
  const [ address, setAddress ] = useState('');
  const [ datetime, setDatetime ] = useState(new Date());
  const [ locationError, setLocationError ] = useState(null);

  const showLocation = (position) => {
    console.log(position);
  };

  const errorLocation = (error) => {
    console.error(error);
    setLocationError(error.message);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showLocation, errorLocation);
    }
    else {
      alert('Erreur');
    }
  };

  return (
    <div className="HomePage-InteractiveMap-Form">
      {locationError && (
        <p>
          <span onClick={() => setLocationError(null)}>Fermer</span>
          {locationError}
        </p>
      )}
      <div className="HomePage-InteractiveMap-Form-left">
        <input
          name="address"
          type="text"
          placeholder="1 rue Dupont, 75000 Paris"
          value={address}
          onChange={({ currentTarget }) => setAddress(currentTarget.value)}
        />
        <div className="HomePage-InteractiveMap-Form-row">
          <input
            name="datetime"
            type="datetime-local"
            value={datetime}
            onChange={({ currentTarget }) => setDatetime(currentTarget.value)}
          />
          <button onClick={getUserLocation}>Position actuelle</button>
        </div>
      </div>

      <div className="HomePage-InteractiveMap-Form-right">
        <button>Enregistrer ce lieu comme favori</button>
        <button>Enregistrer cet événement</button>
      </div>
    </div>
  );
}

export default Form;
