import React from "react";
import "./TestimonialCard.css";

function testimonialCard({ text,name,brand }) {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard_details">
        <p>"{text}"</p>
      </div>
      <div className="testimonialCard_name">
        <h6> {name}</h6>
        <p>{brand}</p>
      </div>
    </div>
  );
}

export default testimonialCard;
