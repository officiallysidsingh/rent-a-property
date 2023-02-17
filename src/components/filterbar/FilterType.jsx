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
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Property Type"
        onChange={handleChange}
      >
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}

        {types.map((type) => (
        <MenuItem key={type}>
          {type}
        </MenuItem>
        ))}
      </Select>
    </FormControl>

  //   <div className="col-sm-12 my-2">
  //   <label htmlFor="gender">Gender</label>
  //   <select
  //     className="form-control"
  //     id="gender"
  //     onChange={handleInput("gender")}
  //   >
  //     <option value="">Select</option>
  //     {types.map((type) => (
  //       <option value={type} key={type}>
  //         {type}
  //       </option>
  //     ))}
  //   </select>
  // </div>
  );
}
