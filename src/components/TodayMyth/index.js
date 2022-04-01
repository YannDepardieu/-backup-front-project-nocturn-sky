import './styles.scss';

function TodayMyth() {
  return (
    <div className="myth-page-container">

      <div className="myth-page-title-container">
       <h1 className="myth-page-title"> Mythe du jour </h1>
      </div>

      <div className="myth-page-paragraph-container">

        <div className="myth-page-picture">
         <img src="" alt="image constellation" />
        </div>

        <h2  className="myth-page-paragraph-title">Orion</h2>
        <p className="myth-page-paragraph" >L'histoire du mythe Orion. lor Vitae numquam quibusdam quas tempora similique eligendi, molestiae iusto recusandae quasi, unde, enim qui ipsum?</p>
      
      </div>

      <div className="container-arrow">
       {/* <p>Déscendre</p> */}
       <svg id="more-arrows">
          <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
          <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
          <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
       </svg>
      </div>
    </div>
  );
}

export default TodayMyth;
