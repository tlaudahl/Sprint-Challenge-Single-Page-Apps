import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from 'react-router-dom';
import CharacterPage from "./components/CharacterPage.js";
import Navigation from './components/Navigation';
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <div className='navContainer'>
        <Navigation />
        <Route path='/characters' component={SearchForm} />
      </div>
      <Header />
      <Route path='/' exact component={WelcomePage} />
      <Route exact path='/characters' component={CharacterPage} />
    </main>
  );
}
