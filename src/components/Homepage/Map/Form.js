// import { useState, useContext } from "react";
import { Component, useContext } from "react";
import authContext from "../../../contexts/AuthContext";
import { getAddress } from "../../../utils/fetchApi";
import InteractiveMap from "./InteractiveMap";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      latitude: 0,
      longitude: 0,
      datetime: new Date(),
      errorMssg: "",
    };
  }
  // const { isConnected } = useContext(authContext);
  // const { inputContent, setInputContent } = useContext(MapFormContext);

  // const [address, setAddress] = useState("");
  // const [datetime, setDatetime] = useState(new Date());
  // const [locationError, setLocationError] = useState(null);
  // const [userCoords, setUserCoords] = useState({});

  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (userPosition) => {
          this.setState({
            latitude: userPosition.coords.latitude,
            longitude: userPosition.coords.longitude,
            map: true,
          });
          // setUserCoords(userPosition.coords);
          // setInputContent(userPosition.coords);
        },
        (error) => {
          console.log(error);
          this.setState({ errorMssg: error.message });
          // setLocationError(error.message);
        }
      );
    } else {
      this.setState({
        errorMssg: "Votre navigateur ne permet pas de partager votre position.",
      });
      // setLocationError(
      //   "Votre navigateur ne permet pas de partager votre position."
      // );
    }
  };
  // selectDateTime = (e) => {
  //   this.setState({ datetime: e.target.value });
  //   // setDatetime(e.target.value);
  //   // setInputContent(e.target.value);
  // };

  apiLocation = async () => {
    const result = await getAddress(this.state.address);
    this.setState({
      latitude: result.latitude,
      longitude: result.longitude,
      map: true,
    });
    // console.log(this.state.latitude, this.state.longitude);
    // setInputContent(result);
  };

  // console.log("Form inputContent", inputContent);
  render() {
    return (
      <div className="Map-Form-Container">
        <div className="Block Map-Form">
          {/* {!this.state.errorMssg ? 
            <p>
              <span onClick={() => this.setState({ errorMssg: null })}>
                Fermer
              </span>
              {this.state.errorMssg}
            </p>
          } */}
          <div className="Map-Form-left">
            <input
              title="Saisissez votre adresse complète"
              className="Input"
              name="address"
              type="text"
              placeholder="1 rue Dupont, 75000 Paris, FRANCE"
              value={this.address}
              onChange={({ currentTarget }) => {
                this.setState({ address: currentTarget.value, map: true });
                // setAddress(currentTarget.value);
                // console.log(currentTarget.value);
              }}
            />
            <button
              title="Cherchez les constellations visibles depuis votre adresse"
              className="Button"
              onClick={this.apiLocation}
            >
              Chercher
            </button>
            <div className="Map-Form-row">
              <input
                title="Changez la date et l'heure pour montrer les constellations visibles"
                className="Input"
                name="datetime"
                type="datetime-local"
                value={this.datetime}
                // onChange={({ currentTarget }) => {
                //   setDatetime(currentTarget.value);
                //   console.log(`date : ${currentTarget.value}`);
                // }}
                onChange={({ currentTarget }) => {
                  this.setState({ datetime: currentTarget.value });
                }}
              />
              <button
                title="Regardez les constellations visibles depuis votre position actuelle"
                className="Button"
                onClick={this.getUserLocation}
              >
                Position actuelle
              </button>
            </div>
          </div>
          {/* {isConnected && (
            <div className="Map-Form-right">
              <button className="Button">
                Enregistrer ce lieu comme favori
              </button>
              <button className="Button">Enregistrer un événement</button>
            </div>
          )} */}
        </div>
        {/* {console.log(
          "states sents to map",
          this.state.latitude,
          this.state.longitude,
          this.state.datetime
        )} */}
        <InteractiveMap
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          datetime={this.state.datetime}
        />
      </div>
    );
  }
}

export default Form;
