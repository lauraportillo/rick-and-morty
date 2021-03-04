import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
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

  //definición de la función que maneja los cambios en los inputs e indentifica en qué input se está realizando el cambio.
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  //filtrar
  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  // cada usuario tiene que tener su enlace
  const renderCharacterDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const characterFound = characters.find((character) => character.id === id);

    if (characterFound) {
      return <CharacterDetail character={characterFound} />;
    } else {
      return <CharacterNotFound />;
    }
  };

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
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filterCharacters} />
        <Switch>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
