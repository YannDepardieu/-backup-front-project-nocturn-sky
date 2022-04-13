import ArrowDown from '../../ArrowDown';

import './Hero.scss';

const Hero = () => {
  return (        
    <section id="Hero" className="Hero Section">
      <h1 className="Title">Starry Night</h1>

      <p className="Block">
        Bienvenue... (description brève du site) ex. Vitae numquam quibusdam quas tempora similique eligendi, molestiae iusto recusandae quasi, unde, enim qui ipsum?
      </p>
      
      <ArrowDown href="#Myth" />
    </section>
  );
};

export default Hero;
