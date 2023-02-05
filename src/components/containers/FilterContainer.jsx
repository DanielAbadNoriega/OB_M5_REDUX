import { connect } from "react-redux";
import Filter from "../pure/Filter";
import { setVisibilityFilter } from "../../store/actions/actions";

const mapStateToProps = (state, ownProps) => {
  console.log("[ FilterContainer - mapStateToProps ] State: ", state);
  console.log("[ FilterContainer - mapStateToProps ] OwnProps: ", ownProps);
  return {
    active: ownProps.filter === state.filterState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
