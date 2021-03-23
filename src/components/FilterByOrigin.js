import React from 'react';
import '../stylesheets/FilterByOrigin.scss';

const FilterByOrigin = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'origin',
      value: ev.target.value,
    });
  };
  const originList = props.origin.map((origin, index) => {
    return (
      <label key={index} className="originList">
        <input type="checkbox" name="origin" value={origin} onChange={handleChange} />
        {origin}
      </label>
    );
  });

  return (
    <>
      <label className="origin" htmlFor="origin">
        Origin:
      </label>
      {originList}
    </>
  );
};
export default FilterByOrigin;
