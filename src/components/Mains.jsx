import React from "react";
import "../style/style.css";
import { NewService } from "./NewService";

export const Mains = () => {
  const urlFoto1 = "main_specialist-circle1";
  const urlFoto2 = "main_specialist-circle2";
  const name1 = "Jon Kelli [SCRUM-menedger]";
  const name2 = "Michal Zawodski [ React.js - senior ]";

  const services2 = "uslugi2";
  const services3 = "uslugi3";
  const services4 = "uslugi4";
  const services5 = "uslugi5";
  const services6 = "uslugi6";

  const text1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officia nam eum modi nulla amet laborum neque praesentium omnis cupiditate placeat hic quo ut corporis repudiandae sequi necessitatibus ex optio. Unde nesciunt dignissimos necessitatibus non recusandae exercitationem voluptates nostrum quos! Sapiente, totam dicta.";

  const text2 =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Reprehenderit possimus dolorum consectetur voluptate eaque, illo molestiae officiis? Nisi sint velit beatae, quas debitis quis modi corporis doloremque maiores nesciunt aliquid ducimus hic natus qui, nihil, nemo blanditiis. Similique, corporis corrupti veniam, aperiam quis incidunt vitae voluptatibus itaque quas nihil consequuntur.";

  const selectServices = [
    services2,
    services3,
    services4,
    services5,
    services6,
  ];

  const infPersons = [
    { foto: urlFoto1, name: name1, text: text1 },
    { foto: urlFoto2, name: name2, text: text2 },
  ];

  const selectText = (index, item) => {
    return index === infPersons.length - 1 ? (
      <p className="main_specialist_text2_wrapper-p">{item.text}</p>
    ) : (
      <p className="main-sect-specialist-text1-div-p">{item.text}</p>
    );
  };

  const nameClass = (index) => {
    return `main-sect-work-service${index + 2} service-with`;
  };

  return (
    <main>
      <section id="section-us" className="main-container container">
        <h1 className="main_specialist-h1">Nasi specjaliści</h1>

        {infPersons.map((item, index) => (
          <div key={index} className="main_specialist-text1">
            <div className={item.foto}></div>
            <div className="main_specialist-wrapper">
              <h4>{item.name}</h4>
              {selectText(index, item)}
            </div>
          </div>
        ))}
      </section>

      <section id="work" className="main-sect-work">
        <div className="main-sect-work-div container">
          <h2 className="main-sect-work-h2">Czym zajmuje się nasza firma?</h2>
          <NewService />
          {selectServices.map((item, index) => (
            <div key={index} className={nameClass(index)}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
