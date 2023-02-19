//Importing Hooks
import { useState } from 'react';

//Importing Material UI Components
import { Slider, Box } from '@mui/material';

export default function FilterPrice({ price, setPrice }) {

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <Box sx={{alignItems: 'center', justifyContent: 'center'}}>
      <Slider
          margintop={2}
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={500}
          max={3000}
        />
      <label>Price</label>
    </Box>
  )
}
