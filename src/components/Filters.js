import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByLocations from './FilterByLocations';
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
      <FilterByLocations handleFilter={props.handleFilter} locations={props.locations} />
    </form>
  );
};
export default Filters;
