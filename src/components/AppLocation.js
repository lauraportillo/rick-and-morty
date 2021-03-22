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
  const [locations, setLocations] = useState([]);

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
      if (locations.length === 0) {
        return true;
      } else {
        return locations.includes(character.location);
      }
    })

    // ordenado alfabéticamente de la a a la z
    .sort((a, z) => a.name.localeCompare(z.name));

  const getLocations = () => {
    return characters.map((character) => character.location);
  };
  console.log(getLocations());

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

  // 1º

  const uniqueLocations = [];

  for (const character of characters) {
    if (!uniqueLocations.includes(character.location)) {
      uniqueLocations.push(character.location);
    }
  }

  console.log(uniqueLocations);

  // // 2º
  // const uniqueLocationsObject = {};

  // for (const character of characters) {
  //   uniqueLocationsObject[character.location] = true;
  // }

  // console.log(uniqueLocationsObject);
  // console.log(Object.keys(uniqueLocationsObject));

  // // 3º

  // const uniqueLocationsSet = new Set();

  // for (const character of characters) {
  //   uniqueLocationsSet.add(character.location);
  // }

  // console.log(uniqueLocationsSet);
  // console.log(Array.from(uniqueLocationsSet));

  //pintar
  return (
    <div className="container">
      <Header />
      <main className="containerMain">
        <Switch>
          <Route path="/" exact>
            <Filters handleFilter={handleFilter} name={name} specie={specie} locations={uniqueLocations} />
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

// const numbers = [1, 2, 1, 3];

// // 1º

// const newNumbers = [];

// for (const number of numbers) {
//   if (!newNumbers.includes(number)) {
//     newNumbers.push(number);
//   }
// }
