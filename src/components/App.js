import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/App.scss';

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');

  //vida del componente y promesa
  useEffect(() => {
    console.log(getDataFromApi());
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //pintar
  return (
    <div className="container">
      <header className="containerHeader">
        <img
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Rick and Morty Logo"
        />
      </header>
      <main>
        <section className="containerFilter"></section>
        <section className="containerRender">
          <CharacterList characters={characters} />
        </section>
      </main>
    </div>
  );
};

export default App;
