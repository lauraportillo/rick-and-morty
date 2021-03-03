import FilterByName from './FilterByName';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="containerFilter">
      <FilterByName handleFilter={props.handleFilter} />
    </form>
  );
};
export default Filters;
