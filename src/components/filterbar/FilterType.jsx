import React from 'react';

//Importing Material UI Components
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FilterType({ types }) {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Property Type"
        onChange={handleChange}
      >
        {types.map((option) => (
          <MenuItem key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
