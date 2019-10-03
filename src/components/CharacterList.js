import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  console.log(props);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

  return (
    <section className="character-list">
      {props.characterList.map(character => {
        return <CharacterCard name={character.name} status={character.status} image={character.image} location={character.location.name} key={character.id}/>
      })}
    </section>
  );
}
