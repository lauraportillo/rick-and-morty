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
      <label key={index} className="locationList">
        <input type="checkbox" name="location" value={location} onChange={handleChange} />
        {location}
      </label>
    );
  });

  return (
    <div className="containerList">
      <label className="location" htmlFor="location">
        Location:
      </label>
      {locationsList}
    </div>
  );
};
export default FilterByLocations;
