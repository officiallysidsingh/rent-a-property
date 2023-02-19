import { useState, useEffect } from 'react';

//Importing Custom Components
import Cards from '../components/cards/Cards.jsx';

//Importing Data
import {data} from '../constants/data.js';

export default function HotelList({ filteredDataIds, submit }) {

  const [filteredCardsData, setFilteredCardsData] = useState([]);
  const [result, setResult] = useState('');

  
  useEffect(() => {
    if(submit === true){
      if (filteredDataIds.length > 0) {
        const filteredData = data.filter((item) => filteredDataIds.includes(item.id));
        setFilteredCardsData(filteredData);
      }
    }
  }, [submit]);
  
  return (
      <>
      {submit && filteredDataIds.length > 0 ? (
        <Cards details={filteredCardsData} />
        ) : submit && filteredDataIds.length === 0 ? (
        <h1>No Result Found</h1>
        ) : (<Cards details={data} />)}
      </>
  );
}
