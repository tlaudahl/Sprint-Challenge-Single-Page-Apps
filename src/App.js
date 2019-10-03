import React, { useState } from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList'
import SearchField from "./components/SearchField.js";
import axios from 'axios';


export default function App() {
  const [characters, addCharacters] = useState([]);
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(response => addCharacters(response.data.results))
  .catch(error => console.log(error));

  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' render={() => <SearchField onSearch={onSearch} searchTerm={searchTerm} />} />
      <Route exact path='/characters' render={() => <CharacterList characterList={characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))} />} />
      <Route path='/character/:id' component={<CharacterList />} />
    </main>
  );
}
