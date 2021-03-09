import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
import Footer from './Footer';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('all');
  const [gender, setGender] = useState('all');

  //vida del componente y promesa
  useEffect(() => {
    console.log(getDataFromApi());
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //definición de la función que maneja los cambios en los inputs e indentifica en qué input se está realizando el cambio.
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
      console.log(specie);
    } else if (inputChange.key === 'gender') {
      setGender(inputChange.value);
    }
  };

  //filtrar
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      if (specie === 'all') {
        return true;
      } else {
        return character.specie === specie;
      }
    })
    .filter((character) => {
      if (gender === 'all') {
        return true;
      } else {
        return character.gender === gender;
      }
    })
    // ordenado alfabéticamente de la a a la z
    .sort((a, z) => a.name.localeCompare(z.name));

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
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <Filters handleFilter={handleFilter} name={name} specie={specie} specie={gender} />
            <CharacterList characters={filterCharacters} />
          </Route>

          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
