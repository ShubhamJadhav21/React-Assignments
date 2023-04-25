import React from "react";
import './ProfileCard.css';
export default function ProfileCard(props) {
  console.log(props)
    
  return (
    <div className={props.externalClassname}>
      < img src={props.src} />  

      

      <h3 className={props.Designation}>{props.designation}</h3>
      
      <h1 className={props.Name}>{props.name}</h1>
    
      <p className={props.Des}>{props.jobdescr}</p>
      <button className={props.Btn} onClick={props.onClick}>{props.btn}</button>

    </div>
  );
}
