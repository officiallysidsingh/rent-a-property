import React from 'react';

//Importing Custom Components
import Cards from '../components/cards/Cards.jsx';

//Importing Material UI Components
import { Container } from '@mui/material';

//Importing Data
import {data} from '../constants/data.js';


export default function HotelList() {
  return (
    <Container maxWidth="lg">
        <Cards details={data}/>
    </Container>
  );
}
