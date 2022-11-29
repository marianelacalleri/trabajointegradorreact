import React from "react";
import data from "../data.json";
import "../css/styles.css";

const Card = () => {
  return data.map((e => 
    <div className="container-skills">
      <div className="first-set animate__animated animate__pulse">
        <img src={e.imagen} alt="html5" loading="lazy" className="icon icon-card"/>
        <h5> {e.nombre} </h5>
        <p> {e.descripcion} </p>
      </div>
    </div>
  ));
}

export default Card; 
