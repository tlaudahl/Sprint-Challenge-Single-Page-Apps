import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from 'react-router-dom';
import CharacterPage from "./components/CharacterPage.js";
import Navigation from './components/Navigation';

export default function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <Route path='/' exact component={WelcomePage} />
      <Route path='/characters' component={CharacterPage} />
    </main>
  );
}
