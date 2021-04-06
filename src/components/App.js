// React
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Services
import getDataFromApi from '../services/getDataFromApi';
import counters from '../services/counters';
// Components
import Header from './Header';
import Filters from './Filters';
import ChangePage from './ChangePage';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterNotFound from './CharacterNotFound';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //estados
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('allSpecies');
  const [gender, setGender] = useState('allGenders');
  const [origins, setOrigins] = useState([]);
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  //vida del componente y promesa
  useEffect(() => {
    getDataFromApi(page).then((data) => setCharacters(data));
  }, [page]);

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
    } else if (inputChange.key === 'origin') {
      const indexOrigin = origins.indexOf(inputChange.value);
      if (indexOrigin === -1) {
        const newOrigins = [...origins, inputChange.value];
        setOrigins(newOrigins);
      } else {
        const newOrigins = origins.filter((origin) => {
          return origin !== inputChange.value;
        });
        setOrigins(newOrigins);
      }
    }
  };

  const handleReset = () => {
    setName('');
    setSpecie('allSpecies');
    setGender('allGenders');
    setLocations([]);
    setOrigins([]);
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
    .filter((character) => {
      if (origins.length === 0) {
        return true;
      } else {
        return origins.includes(character.origin);
      }
    })

    // ordenado alfabéticamente de la a a la z
    .sort((a, z) => a.name.localeCompare(z.name));

  // extraer origins no repetidos a un nuevo array
  const uniqueOrigins = [];
  for (const character of characters) {
    if (!uniqueOrigins.includes(character.origin)) {
      uniqueOrigins.push(character.origin);
    }
  }

  // extraer locations no repetidas a un nuevo array
  const uniqueLocations = [];
  for (const character of characters) {
    if (!uniqueLocations.includes(character.location)) {
      uniqueLocations.push(character.location);
    }
  }

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
  // handler functions to navigate through pages
  const handleLess = () => {
    counters.less(page, setPage);
  };
  const handleMore = () => {
    counters.more(page, setPage);
  };

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
              origins={uniqueOrigins}
              locations={uniqueLocations}
            />
            <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />
            <CharacterList characters={filterCharacters} />
            <ChangePage handleLess={handleLess} handleMore={handleMore} page={page} />
          </Route>

          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
