import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  let specieIcon;
  if (props.character.specie === 'Human') {
    specieIcon = <i className="fas fa-user"></i>;
  } else if (props.character.specie === 'Alien') {
    specieIcon = <i className="fab fa-reddit-alien"></i>;
  }

  let statusIcon;
  if (props.character.status === 'Alive') {
    statusIcon = <i className="fas fa-heartbeat"></i>;
  } else if (props.character.status === 'Dead') {
    statusIcon = <i className="fas fa-cross"></i>;
  } else if (props.character.status === 'unknown') {
    statusIcon = <i className="fas fa-question"></i>;
  }

  return (
    <article>
      <img src={props.character.image} alt="character photo" />
      <h3>{props.character.name}</h3>
      <h4>Status: {props.character.status}</h4>
      <h4>Species: {props.character.specie}</h4>
      <h4>Origin: {props.character.origin}</h4>
      <h4>Episodes: {props.character.episode.length}</h4>
      <span className="icons">{specieIcon}</span>
      <span className="icons">{statusIcon}</span>
      <Link to="/">
        <h3> {'<'} Back </h3>
      </Link>
    </article>
  );
};
export default CharacterDetail;

// dead <i class="fas fa-skull-crossbones"></i>  <i class="fas fa-heart-broken"></i> <i class="fas fa-cross"></i>
// humano <i class="fab fa-creative-commons-by"></i>   <i className="fas fa-user"></i>
// vivo <i class="fas fa-heart"></i>  <i class="fas fa-heartbeat"></i>
//alien <i class="fas fa-ghost"></i> <i className="fab fa-reddit-alien"></i>
// <i className="fas fa-male"></i>
