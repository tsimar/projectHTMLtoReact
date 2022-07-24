import React from "react";
import "../style/style.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-container container">
        <p className="nav_container-p">web driver</p>
        <ul className="nav_container-link">
          <li>
            <a className="link-us" href="#work">
              oferta
            </a>
          </li>
          <li>
            <a className="link-us" href="#section-us">
              o nas
            </a>
          </li>
          <li>
            <button className="btn-contact" disabled>
              kontakt
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
