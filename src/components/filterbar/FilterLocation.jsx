//Importing Material UI Components
import { TextField, Autocomplete } from '@mui/material';

export default function FilterLocation({ locations, location, setLocation }) {
  return (
    <Autocomplete
     disableClearable
     value={location}
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