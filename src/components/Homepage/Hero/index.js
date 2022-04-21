import ArrowDown from "../../ArrowDown";

import "./Hero.scss";

const Hero = () => {
  return (
    <section id="Hero" className="Hero Section">
      <h1 className="Title Hero-Title">Starry Night</h1>

      <p className="Block Hero-Text">
        <strong className="Hero-Text-Intro">
          Trouvez les constellations visibles sur votre localisation et leur
          mythologie.
        </strong>
      </p>

      <ArrowDown href="#Myth" />
    </section>
  );
};

export default Hero;
