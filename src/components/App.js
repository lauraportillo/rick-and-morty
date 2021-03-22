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
  const [specie, setSpecie] = useState('allSpecies');
  const [gender, setGender] = useState('allGenders');
  const [locations, setLocations] = useState([]);
  // const [page, setPage] = useState(1);

  //vida del componente y promesa
  useEffect(
    () => {
      console.log(getDataFromApi());
      getDataFromApi(/*page*/).then((data) => setCharacters(data));
    },
    [
      /*page*/
    ]
  );

  //definición de la función que maneja los cambios en los inputs e indentifica en qué input se está realizando el cambio.
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'specie') {
      setSpecie(inputChange.value);
    } else if (inputChange.key === 'gender') {
      setGender(inputChange.value);
    } else if (inputChange.key === 'location') {
      const indexLocation = locations.indexOf(inputChange.value);
      if (indexLocation === -1) {
        const newLocations = [...locations, inputChange.value];
        setLocations(newLocations);
      } else {
        const newLocations = locations.filter((location) => {
          return location !== inputChange.value;
        });
        setLocations(newLocations);
      }
    }
  };

  const handleReset = () => {
    //setCharacters([]);
    setName('');
    setSpecie('allSpecies');
    setGender('allGenders');
    setLocations([]);
  };

  //filtrar
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      if (specie === 'allSpecies') {
        return true;
      } else {
        return character.specie === specie;
      }
    })
    .filter((character) => {
      if (gender === 'allGenders') {
        return true;
      } else {
        return character.gender === gender;
      }
    })
    .filter((character) => {
      if (locations.length === 0) {
        return true;
      } else {
        return locations.includes(character.location);
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

  const uniqueLocations = [];

  for (const character of characters) {
    if (!uniqueLocations.includes(character.location)) {
      uniqueLocations.push(character.location);
    }
  }

  //pintar
  return (
    <div className="container">
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <Filters
              handleFilter={handleFilter}
              handleReset={handleReset}
              name={name}
              specie={specie}
              gender={gender}
              locations={uniqueLocations}
            />
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
