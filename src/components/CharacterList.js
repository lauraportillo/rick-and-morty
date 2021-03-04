import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const renderCharacters = () => {
    if (props.characters.length === 0) {
      return (
        <section>
          <h2>Character not found</h2>
        </section>
      );
      // } else if (props.character.specie === 'human') {
      //   return 'Human';
      // } else if (props.character.specie === 'alien') {
      //   return 'Alien';
    } else {
      return props.characters.map((character) => {
        return (
          <li key={character.id} className="containerRender__list--card">
            <Link to={`./character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </li>
        );
      });
    }
  };

  return (
    <section className="containerRender">
      <ul className="containerRender__list"> {renderCharacters()} </ul>
    </section>
  );
};
export default CharacterList;
