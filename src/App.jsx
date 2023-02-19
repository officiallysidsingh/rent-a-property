import React, { useState } from 'react';

//Importing Custom Components
import Navbar from './components/navbar/Navbar.jsx';
import FilterBar from './components/filterbar/FilterBar.jsx';
import HotelList from './views/HotelList.jsx';

//Importing Material UI Components
import { Container } from '@mui/material';

function App() {
  
  //Handling Whole App State
  const [filteredDataIds, setFilteredDataIds] = useState([]);
  const[submit, setSubmit] = useState(false);

  return (
    <>
      <Navbar />
      <Container>
        <FilterBar setFilteredDataIds={setFilteredDataIds} setSubmit={setSubmit} />
        <h1>{filteredDataIds}</h1>
        <HotelList filteredDataIds={filteredDataIds} submit={submit} />
      </Container>
    </>
  );
}

export default App;
