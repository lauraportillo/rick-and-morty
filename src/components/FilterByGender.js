import React from 'react';
import '../stylesheets/FilterByGender.scss';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'gender',
      value: ev.target.value,
    });
  };

  return (
    <>
      <select
        className="containerFilter__gender"
        name="gender"
        id="gender"
        onChange={handleChange}
        //estado sincronizado con el input
        value={props.gender}
      >
        <option value="all">All genders</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};
export default FilterByGender;
