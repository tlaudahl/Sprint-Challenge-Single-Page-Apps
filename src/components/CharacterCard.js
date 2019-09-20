import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p># of Episodes: {props.episode}</p>
      <p>Species: {props.species}</p>
      <p>Location: {props.location.name}</p>
    </div>
  )
}
