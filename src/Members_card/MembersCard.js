import React from "react";
import "./MembersCard.css";
import img from ".././images/Ellipse 92.jpg";
function MembersCard({ profile, name, designation }) {
  return (
    <div className="members_card">
      <div className="members_card_img">
        <img src={profile ? profile : img} loading="lazy" alt="webcard" />
      </div>
      <div className="members_card_details">
        <h6>{name ? name : "Nemesis"}</h6>
        <p>{designation ? designation : "Nemesis"}</p>
      </div>
    </div>
  );
}

export default MembersCard;
