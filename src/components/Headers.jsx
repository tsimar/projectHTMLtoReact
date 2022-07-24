import React from "react";
import "../style/style.css";

export const Headers = () => {
  return (
    <header className="head-sect">
      <div className="container">
        <h1 className="head-h1">Nasza firma pomorzet wejść do swijatu IT.</h1>
        <p className="head-p">Nie wierz nam na słowo - sprawdż</p>
        <button className="head-btn">
          <a href="#work"> oferta</a>
        </button>
      </div>
    </header>
  );
};
