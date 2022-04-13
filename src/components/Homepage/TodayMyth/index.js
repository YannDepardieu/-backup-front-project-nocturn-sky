import ArrowDown from '../../ArrowDown';

import './TodayMyth.scss';

const TodayMyth = () => {
  return (
    <section id="Myth" className="Section Myth">
      <h1 className="Title">Mythe du jour</h1>

      <div className="Block Myth-Block">
        <figure className="Myth-Picture">
          <img src="https://picsum.photos/200" alt="image constellation" />
          <figcaption className="Title Title--small">Orion</figcaption>
        </figure>

        <p className="Myth-Description">
          L'histoire du mythe Orion. lor Vitae numquam quibusdam quas tempora
          similique eligendi, molestiae iusto recusandae quasi, unde, enim qui
          ipsum?
        </p>
      </div>

      <ArrowDown href="#Map" />
    </section>
  );
};

export default TodayMyth;
