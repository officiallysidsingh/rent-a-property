import React from 'react';

//Importing Custom Components
import FilterLocation from './FilterLocation.jsx';
import FilterDate from './FilterDate.jsx';
import FilterPrice from './FilterPrice.jsx';
import FilterType from './FilterType.jsx';

//Importing Hotel Data
import { data } from '../../constants/data.js';

export default function FilterBar() {

    //To generate unique "Property Type" data for dropdown filtering
    const generateTypeDataForDropdown = () => {
        return [...new Set(data.map((item) => item.type))];
    }

    //To generate unique "Location" data for autocomplete filtering
    const generateLocationDataForAutocomplete = () => {
        return [...new Set(data.map((item) => item.location))];
    }
  return (
    <>
        <FilterLocation locations={generateLocationDataForAutocomplete()} />
        <FilterDate />
        <FilterPrice />
        <FilterType types={generateTypeDataForDropdown()} />
    </>
  );
}
