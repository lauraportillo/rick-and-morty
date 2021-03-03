import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //buscamos el el array del estado cada personaje
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul> {characterElements} </ul>
    </section>
  );
};
export default CharacterList;
