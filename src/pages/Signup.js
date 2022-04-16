import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../utils/fetchApi";
import { filterError } from "../utils/filterError";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");

  const onSuccess = () => {
    setEmail("");
    setPassword("");
    setPasswordConf("");
    setErrorMessage("");
    setLastname("");
    setFirstname("");

    navigate("/login");
  };

  const onFail = (error) => {
    const errorFiltered = filterError(error);
    if (typeof errorFiltered !== typeof "") {
      setErrorMessage("L'inscription a échoué");
    } else {
      setErrorMessage(errorFiltered);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConf) {
      setErrorMessage("Les mots de passe ne se correspondent pas");
      return;
    }

    signup(email, password, firstname, lastname, onSuccess, onFail);
  };

  return (
    <main className="Main Signup">
      <h1 className="Title Page-Title">Inscription</h1>

      <form onSubmit={handleSubmit} className="Form Block Block--small">
        {errorMessage.length > 0 && <p className="Error">{errorMessage}</p>}

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="lastname">
            Nom
          </label>
          <input
            className="Input"
            id="lastname"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
            type="text"
            placeholder="Dumas"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="firstname">
            Prénom
          </label>
          <input
            className="Input"
            id="firstname"
            value={firstname}
            onChange={({ target }) => setFirstname(target.value)}
            type="text"
            placeholder="Alexandre"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Adresse email
          </label>
          <input
            className="Input"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="spaceman@universe.com"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="Input"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="passwordconf">
            Confirmation du mot de passe
          </label>
          <input
            className="Input"
            id="passwordconf"
            value={passwordConf}
            onChange={({ target }) => setPasswordConf(target.value)}
            type="password"
            placeholder="********"
            required
          />
        </fieldset>

        <button type="submit" className="Button">
          S'inscrire
        </button>
      </form>
    </main>
  );
};

export default Signup;
