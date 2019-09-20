import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, addCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return addCharacter(res.data.results)
    })
    .catch(err => console.log('Data was not returned', err));
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return <CharacterCard name={character.name} episode={character.episode.length} species={character.species} location={character.location} image={character.image} />
      })}
    </section>
  );
}
