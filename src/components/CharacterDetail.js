import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <article>
      <img src={props.character.image} alt="character photo" />
      <h3>{props.character.name}</h3>
      <h4>Status: {props.character.status}</h4>
      <h4>Species: {props.character.specie}</h4>
      <h4>Origin: {props.character.origin}</h4>
      <h4>Episodes: {props.character.episode.length}</h4>
      <Link to="/">
        <h3> {'<'} Back </h3>
      </Link>
    </article>
  );
};
export default CharacterDetail;
