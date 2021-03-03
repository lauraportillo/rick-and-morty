import React from 'react';

const CharacterCard = (props) => {
  return (
    <>
      <img src={props.character.image} alt="character photo" />
      <h3>{props.character.name}</h3>
      <h4>{props.character.specie}</h4>
    </>
  );
};
export default CharacterCard;
