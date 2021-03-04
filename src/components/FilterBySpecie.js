import React from 'react';

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value,
    });
  };
  return (
    <>
      <select className="containerFilter__specie" name="specie" id="specie" onChange={handleChange}>
        <option value="all">All species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecie;
