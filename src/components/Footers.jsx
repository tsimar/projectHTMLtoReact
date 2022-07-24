import React from "react";
import "../style/style.css";

export const Footers = () => {
  return (
    <footer>
      <section className="footer-section container">
        <p className="footer-p">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div className="footer-div">
          <img
            className="footer-icon"
            src="https://img.icons8.com/ffffff/31/instagram-new--v1.png"
            alt="instagram"
          />
          <img
            className="footer-icon"
            src="https://img.icons8.com/ffffff/31/facebook.png"
            alt="facebook"
          />
        </div>
      </section>
    </footer>
  );
};
