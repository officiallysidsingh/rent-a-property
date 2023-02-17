import React from 'react';

//Importing Custom Components
import FilterLocation from './Search.jsx';
import FilterDate from './FilterDate.jsx';
import FilterPrice from './FilterPrice.jsx';
import FilterType from './FilterType.jsx';

//Importing Hotel Data
import { data } from '../../constants/data.js';

export default function FilterBar() {

    const generateTypeDataForDropdown = () => {
        return [...new Set(data.map((item) => item.type))];
    }
  return (
    <>
        <FilterLocation data={data} />
        <FilterDate />
        <FilterPrice />
        <FilterType types={generateTypeDataForDropdown()} />
    </>
  );
}
