import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import FilterByGender from './FilterByGender';
import FilterByOrigin from './FilterByOrigin';
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
      <FilterByName handleFilter={props.handleFilter} name={props.name} className="containerFilter__byName" />
      <div className="containerFilter__box">
        <FilterBySpecie
          handleFilter={props.handleFilter}
          specie={props.specie}
          className="containerFilter__box--specie"
        />
        <FilterByGender
          handleFilter={props.handleFilter}
          gender={props.gender}
          className="containerFilter__box--gender"
        />
        <ResetButton handleReset={props.handleReset} className="containerFilter__box--reset" />
        <FilterByOrigin
          handleFilter={props.handleFilter}
          origins={props.origins}
          className="containerFilter__box--origins"
        />
        {/* <FilterByLocations handleFilter={props.handleFilter} locations={props.locations} /> */}
      </div>
    </form>
  );
};
export default Filters;
