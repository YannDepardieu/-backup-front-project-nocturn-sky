import Form from "./Form";
import InteractiveMap from "./InteractiveMap";
import "./Map.scss";

const Map = () => {
  return (
    <section id="Map" className="Map Section">
      <h1 className="Section-Title">Map</h1>
      <Form />
      <InteractiveMap />
    </section>
  );
};

export default Map;
