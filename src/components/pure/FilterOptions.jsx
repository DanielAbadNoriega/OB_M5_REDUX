import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
  return (
    <div className='filters'>
      {/* FILTER CONTAINERS */}
      <FilterContainer filter="SHOW_ALL" patata="patata_all">
        ALL
      </FilterContainer>

      <FilterContainer filter="SHOW_ACTIVE" patata="patata_active">
        ACTIVE
      </FilterContainer>

      <FilterContainer filter="SHOW_COMPLETED" patata="patata_completed">
        COMPLETED
      </FilterContainer>


    </div>
  );
};

export default FilterOptions;
