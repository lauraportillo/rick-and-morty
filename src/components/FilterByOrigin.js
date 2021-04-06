import React from 'react';
import '../stylesheets/FilterByOrigin.scss';

const FilterByOrigin = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'origin',
      value: ev.target.value,
    });
  };
  const originsList = props.origins.map((origin, index) => {
    return (
      <label key={index} className="originList">
        <input type="checkbox" name="origin" value={origin} onChange={handleChange} />
        {origin}
      </label>
    );
  });

  return (
    <div className="containerList">
      <label className="origin" htmlFor="origin">
        Origin:
      </label>
      {originsList}
    </div>
  );
};
export default FilterByOrigin;
