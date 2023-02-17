import React from 'react';

//Importing Custom Components
import Navbar from './components/navbar/Navbar.jsx';
import FilterBar from './components/filterbar/FilterBar.jsx';
import HotelList from './views/HotelList.jsx';

function App() {
  return (
    <>
      <Navbar />
      <FilterBar />
      <HotelList />

    </>
  );
}

export default App;
