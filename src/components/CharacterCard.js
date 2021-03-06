import React from 'react';
import '../stylesheets/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <article className="card">
      <img className="card__image" src={props.character.image} alt="character photo" />
      <h3 className="card__title">{props.character.name}</h3>
      <h4 className="card__subtitle">{props.character.specie}</h4>
    </article>
  );
};
export default CharacterCard;
