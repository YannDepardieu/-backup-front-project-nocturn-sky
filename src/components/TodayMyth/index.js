import "./styles.scss";

import ArrowDown from "../ArrowDown";

function TodayMyth() {
  return (
    <section id="Myth" className="myth-page-container Section">
      <div className="myth-page-title-container">
        <h1 className="myth-page-title">Mythe du jour</h1>
      </div>

      <div className="myth-page-paragraph-container">
        <div className="myth-page-picture">
          <img src="" alt="image constellation" />
          <h2 className="myth-page-paragraph-title">Orion</h2>
        </div>

        <p className="myth-page-paragraph">
          L'histoire du mythe Orion. lor Vitae numquam quibusdam quas tempora
          similique eligendi, molestiae iusto recusandae quasi, unde, enim qui
          ipsum?
        </p>
      </div>

      <ArrowDown href="#Map" />
    </section>
  );
}

export default TodayMyth;
