import React from 'react';

//Importing Custom Components
import FilterLocation from './FilterLocation.jsx';
import FilterDate from './FilterDate.jsx';
import FilterPrice from './FilterPrice.jsx';
import FilterType from './FilterType.jsx';

//Importing Hotel Data
import { data } from '../../constants/data.js';

export default function FilterBar() {

  //Handling Filter States
  const [location, setLocation] = React.useState('');
  const [date, setDate] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [type, setType] = React.useState('');

  //To generate unique "Property Type" data for dropdown filtering
  const generateTypeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.type))];
  }

  //To generate unique "Location" data for autocomplete filtering
  const generateLocationDataForAutocomplete = () => {
    return [...new Set(data.map((item) => item.location))];
  }

  //To store id of filtered property
    
  //To handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const locationFilter = location;
    const dateFilter = date;
    const priceFilter = price;
    const typeFilter = type;


    const filteredLocationData = data.filter((item) => {
      return (
        item.location === locationFilter
      );
    });

    // const filteredDateData = data.filter((item) => {
    //   return(
    //     new Date(item.date) < new Date(dateFilter)
    //   );
    // });

    // const filteredPriceData = data.filter((item) => {
    //   return(
    //     item.price <= priceFilter
    //   );
    // });

    const filteredTypeData = data.filter((item) => {
      return(
        item.type === typeFilter
      );
    });

    console.log(filteredLocationData);
    // console.log(filteredDateData);
    // console.log(filteredPriceData);
    console.log(filteredTypeData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FilterLocation locations={generateLocationDataForAutocomplete()} setLocation={setLocation} />
      <FilterDate />
      <FilterPrice />
      <FilterType types={generateTypeDataForDropdown()} />
      <button type="submit">Search</button>
    </form>
  );
}