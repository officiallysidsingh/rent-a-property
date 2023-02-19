import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

//Importing Custom Components
import Cards from '../components/cards/Cards.jsx';

//Importing Data
import {data} from '../constants/data.js';

export default function HotelList({ filteredDataIds, submit }) {

  const [filteredCardsData, setFilteredCardsData] = useState([]);

  
  useEffect(() => {
    if(submit === true){
      if (filteredDataIds.length > 0) {
        const filteredData = data.filter((item) => filteredDataIds.includes(item.id));
        setFilteredCardsData(filteredData);
      }
    }
  }, [filteredDataIds, submit]);
  
  return (
      <Grid container item xs={12} alignItems="center" justify="center" sx={{flexDirection: { xs: "column", sm: "column", md: "row"}, paddingTop: '2vh'}}>

      {submit && filteredDataIds.length > 0 ? (
        <Cards details={filteredCardsData} />
        ) : submit && filteredDataIds.length === 0 ? (
        <h1>No Result Found</h1>
        ) : (<Cards details={data} />)}
        
      </Grid>
  );
}
