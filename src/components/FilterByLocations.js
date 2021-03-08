import React from 'react';
import '../stylesheets/FilterByLocations.scss';

const FilterByLocations = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'location',
      value: ev.target.value,
    });
  };
  const locationsList = props.locations.map((location, index) => {
    return (
      <label key={index} className="prueba">
        <input type="checkbox" name="location" value={location} onChange={handleChange} />
        {location}
      </label>
    );
  });

  return (
    <>
      <label className="prueba" htmlFor="location">
        Location:
      </label>
      {locationsList}
    </>
  );
};
export default FilterByLocations;
