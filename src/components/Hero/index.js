import ArrowDown from "../ArrowDown";

function Hero() {
    return (        
      <section id="Hero" className="Hero Section">
        <div className="home-page-title-container">
          <h1 className="home-page-title">Starry Night</h1>
        </div>
        
        <div className="home-page-welcome-container">
          <p className="home-page-welcome">
            Bienvenue... (description brève du site) ex. Vitae numquam quibusdam quas tempora similique eligendi, molestiae iusto recusandae quasi, unde, enim qui ipsum?
          </p>
        </div>
        
        <ArrowDown href="#Myth" />
      </section>
    );
};

export default Hero;
