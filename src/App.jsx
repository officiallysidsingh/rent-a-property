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
      <Container maxWidth="lg" sx={{paddingBottom: '4vh', paddingTop: '2vh'}}>
        <h1>Search properties to rent</h1>
      </Container>

      <Container maxWidth="lg" sx={{background: '#ffffff', paddingBottom: '2vh', borderRadius: '10px', boxShadow: '1px 12px 23px -12px rgba(0,0,0,0.75)' }}>
        <FilterBar setFilteredDataIds={setFilteredDataIds} setSubmit={setSubmit} />
      </Container>
      <Container maxWidth="md">
        <HotelList filteredDataIds={filteredDataIds} submit={submit} />
      </Container>
      
    </>
  );
}

export default App;
