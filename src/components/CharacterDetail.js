import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
  let specieIcon;
  if (props.character.specie === 'Human') {
    specieIcon = <i className="fas fa-user"></i>;
  } else if (props.character.specie === 'Alien') {
    specieIcon = <i className="fab fa-reddit-alien"></i>;
  }

  let statusIcon;
  if (props.character.status === 'Alive') {
    statusIcon = <i className="fas fa-heartbeat animate__animated  animate__heartBeat animate__infinite"></i>;
  } else if (props.character.status === 'Dead') {
    statusIcon = <i className="fas fa-cross animate__animated  animate__flash animate__infinite"></i>;
  } else if (props.character.status === 'unknown') {
    statusIcon = <i className="fas fa-question animate__animated  animate__rotateIn animate__infinite"></i>;
  }

  return (
    <article className="containerDetail fade">
      <img className="containerDetail__image" src={props.character.image} alt="character photo" />
      <div className="containerDetail__description">
        <h3 className="containerDetail__description--name">{props.character.name}</h3>
        <h4>Status: {props.character.status}</h4>
        <h4>Species: {props.character.specie}</h4>
        <h4>Origin: {props.character.origin}</h4>
        <h4>Episodes: {props.character.episode.length}</h4>
        <div className="containerDetail__icons">
          <span className="containerDetail__icons--icon1">{specieIcon}</span>
          <span className="containerDetail__icons--icon2">{statusIcon}</span>
        </div>

        <Link className="containerDetail__btn" to="/">
          <h3> {'<'} go back </h3>
        </Link>
      </div>
    </article>
  );
};
export default CharacterDetail;
