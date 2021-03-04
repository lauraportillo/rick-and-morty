import React from 'react';

const CharacterDetail = (props) => {
  return (
    <article>
      <img src={props.character.image} alt="character photo" />
      <h3>{props.character.name}</h3>
      <h4>Status: {props.character.status}</h4>
      <h4>Species: {props.character.specie}</h4>
      <h4>Origin: {props.character.origin}</h4>
      <h4>Episodes: {props.character.episode.length}</h4>
    </article>
  );
};
export default CharacterDetail;
