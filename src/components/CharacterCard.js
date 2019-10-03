import React from "react";

export default function CharacterCard(props) {
  return (
    <div className='characterCard'>
      <img src={props.image} alt={`${props.name}`} />
      <h2>{props.name}</h2>
      <h3>Status: {props.status}</h3>
      <p>Location:</p>
      <p>{props.location}</p>
    </div>
  )
}
