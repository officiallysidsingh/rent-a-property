import React from 'react';

//Importing Material UI Components
import { TextField, Autocomplete } from '@mui/material';

export default function FilterLocation({ locations, setLocation }) {
  return (
    <Autocomplete
     disableClearable
     onChange={(event, newValue) => {
        setLocation(newValue);
     }}
     options={locations.map((option) => option)}
     renderInput={(params) => (
            <TextField
                {...params}
                label="Location"
                InputProps={{...params.InputProps, type: 'search',}}/>
        )}
    />
  );
}