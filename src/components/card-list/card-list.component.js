import React from "react";

import "./card-list.styles.css";
import Card from '../card/card.component';

const cardlist = (props) => {
  return (
    <div className="card-list">
      {props.semester.map((semester) => (
        <Card 
            key={semester.id}
            semester={semester}
            click={props.clicked}/>
      ))}
    </div>
  );
};

export default cardlist;
