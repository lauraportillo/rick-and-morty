import React from 'react';
import '../stylesheets/FilterBySpecie.scss';

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value,
    });
  };

  return (
    <>
      <select
        className="containerFilter__specie"
        name="specie"
        id="specie"
        onChange={handleChange}
        //estado sincronizado con el input
        value={props.specie}
      >
        <option value="all">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecie;
