import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterType({ types, type, setType }) {
  

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Property Type</InputLabel>
        <Select
          value={type}
          label="Property Type"
          onChange={handleChange}
        >
          {types.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem> ))}
        </Select>
      </FormControl>
    </Box>
  );
}