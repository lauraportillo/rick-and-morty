import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByGender from './FilterByGender';
import FilterByLocations from './FilterByLocations';
import ResetButton from './ResetButton';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="containerFilter">
      <h3 className="containerFilter__title">Look for your favorite RickMortCharacter!</h3>
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <FilterBySpecie handleFilter={props.handleFilter} specie={props.specie} />
      <FilterByGender handleFilter={props.handleFilter} gender={props.gender} />
      <FilterByLocations handleFilter={props.handleFilter} locations={props.locations} />
      <ResetButton handleReset={props.handleReset} />
    </form>
  );
};
export default Filters;
