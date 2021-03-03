import React from 'react';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        className="containerFilter__name"
        type="text"
        name="name"
        id="name"
        placeholder="Character name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
