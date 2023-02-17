import React from 'react';

//Importing Material UI Components
import { TextField, Stack, Autocomplete } from '@mui/material';

export default function FilterLocation({ locations }) {
  return (
    <Autocomplete
     freeSolo
     id="free-solo-2-demo"
     disableClearable
     options={locations.map((option) => option)}
     renderInput={(params) => (
            <TextField
                {...params}
                label="Search input"
                InputProps={{...params.InputProps, type: 'search',}}/>
        )}
    />
  );
}