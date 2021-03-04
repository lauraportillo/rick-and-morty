import FilterByName from './FilterByName';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="containerFilter">
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
    </form>
  );
};
export default Filters;
