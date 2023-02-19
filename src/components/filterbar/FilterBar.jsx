import { useState } from 'react';

//Importing Custom Components
import FilterLocation from './FilterLocation.jsx';
import FilterDate from './FilterDate.jsx';
import FilterPrice from './FilterPrice.jsx';
import FilterType from './FilterType.jsx';

//Importing Hotel Data
import { data } from '../../constants/data.js';

export default function FilterBar({ setFilteredDataIds, setSubmit }) {

  //Handling Filter States
  const [location, setLocation] = useState('London, UK');
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  //To generate unique "Property Type" data for dropdown filtering
  const generateTypeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.type))];
  }

  //To generate unique "Location" data for autocomplete filtering
  const generateLocationDataForAutocomplete = () => {
    return [...new Set(data.map((item) => item.location))];
  }

  const formatDate = (date) => {
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // add leading zero if necessary
      const day = date.getDate().toString().padStart(2, '0'); // add leading zero if necessary
      return `${year}-${month}-${day}`;
    }
    return '';
  };
    
  //To handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);

    //Filtering the Data
    const filteredDataObjects = data.filter((item) => {

      //To filter by Location (Location filter is always applied)
      if(item.location === location){

        //If all filters are applied

        if(date !== null && price !== '' && type !== ''){
          const itemDate = new Date(item.date);
          if(item.type === type && item.price <= price && itemDate <= new Date(formatDate(date))){
              return item;
            }
        }

        //If Date and Price filter is applied

        else if(date !== null && price !== '' && type === ''){
          const itemDate = new Date(item.date);
          if(itemDate <= new Date(formatDate(date)) && item.price <= price){
            return item;
          }
        }

        //If Date and Property Type filter is applied

        else if(date !== null && type !== '' && price === ''){
          const itemDate = new Date(item.date);
          if (itemDate <= new Date(formatDate(date)) && item.type === type) {
            return item;
          }
        }

        //If Price and Property Type filter is applied

        else if(price !== '' && type !== '' && date === null){
          if (item.price <= price && item.type === type) {
            return item;
          }
        }

        //If only Property Type filter is applied

        else if(date === null && price === '' && type !== ''){
          if (item.type === type) {
            return item;
          }
        }

        //If only Price filter is applied

        else if(date === null && type === '' && price !== ''){
          if (item.price <= price) {
            return item;
          }
        }

        //If only Date filter is applied

        else if(price === '' && type === '' && date !== null){
          const itemDate = new Date(item.date);
          if (itemDate <= new Date(formatDate(date))) {
            return item;
          }
        }

        //If no filter is applied (Other Than Location)

        else if(date === null && price === '' && type === ''){
          return item;
        }

        //Handling invalid cases
        else{
          return null;
        }
      }
    });

    //To store id of filtered property
    let filteredDataIdsArray = [];
    filteredDataObjects.forEach(obj => filteredDataIdsArray.push(obj.id));

    //To update filteredDataIds state
    setFilteredDataIds(filteredDataIdsArray);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FilterLocation locations={generateLocationDataForAutocomplete()} location={location} setLocation={setLocation} />
      <FilterDate date={date} setDate={setDate} />
      <FilterPrice />
      <FilterType types={generateTypeDataForDropdown()} type={type} setType={setType} />
      <button type="submit">Search</button>
    </form>
  );
}