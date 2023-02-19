import React from 'react';

//Importing Material UI Components
import { TextField, Autocomplete } from '@mui/material';

<<<<<<< HEAD
export default function FilterLocation({ locations, location, setLocation }) {
||||||| 422c730
export default function FilterLocation({ locations }) {
=======
export default function FilterLocation({ locations, setLocation }) {
>>>>>>> 512dda094800fa63031519dfc3fa3fb43494f6fe
  return (
    <Autocomplete
     disableClearable
<<<<<<< HEAD
     value={location}
     onChange={(event, newValue) => {
        setLocation(newValue);
     }}
||||||| 422c730
=======
     onChange={(event, newValue) => {
        setLocation(newValue);
     }}
>>>>>>> 512dda094800fa63031519dfc3fa3fb43494f6fe
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