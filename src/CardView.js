import React from "react";
import "./CardView.css";
import icon from "./icon.jpg";

export default function CardView() {
  return (
    <div className="container">
      <img src={icon} alt="icon" className="card-image" />
      <p className="card-name">Name</p>
      <i>LinkedIn</i>
      <i>Github</i>
    </div>
  );
}
