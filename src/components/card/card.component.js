import React from "react";

import "./card.styles.css";

const Card = (props) => (
  <div className="card-container" clicked={""}>
    <img
      alt="semester"
      src={
        "https://t3.ftcdn.net/jpg/02/04/76/36/240_F_204763655_EiqtbOniqvm8TCFM5cuFPGmCIC0LQEJV.jpg"
      }
      // src={`https://robohash.org/${props.semester.id}?set=set2&size=180x180`}
    />
    <h3 className="semester-heading">Semester</h3>
    <h2>{props.semester.id}</h2>
  </div>
);

export default Card;
