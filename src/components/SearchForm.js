import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import CharacterList from './CharacterList'
import axios from 'axios';
export default function SearchForm() {
  const [search, setSearch] = useState([]);
  const submitSearch = (event) => {
    event.preventDefault();
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${event.target[0].value}`)
    .then(res => {
      setSearch(res.data.results)
    })
    .catch(err => console.log(err));
    return <CharacterList search={event.target[0].value} />
  }
  return (
    <form onSubmit={submitSearch}>
    <section className="search-form">
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
      />
      <Button variant='outlined' type='submit'>Search</Button>
    </section>
    </form>
  );
}
