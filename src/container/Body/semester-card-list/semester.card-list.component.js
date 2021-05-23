import React from "react";
import { Link } from 'react-router-dom';
import "./semester.card-list.styles.css";
import Card from '../semester-card/semester.card.component';

const cardlist = (props) => {
  return (
    <div className="card-list">
      {props.semester.map((semester) => (
        (semester.id == 1) ?
          <Link to = 'cse-semester1'>
            <Card 
              key={semester.id}
              semester={semester}
              click={props.clicked}
              />
          </Link> :
          <Card 
          key={semester.id}
          semester={semester}
          click={props.clicked}
          />
        
       
      ))}
    </div>
  );
};

export default cardlist;
