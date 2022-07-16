import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Home = () => {

  // Need API Request Here

  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countryOptions = [
    {
      value: 'USA',
      label: 'USA'
    },
    {
      value: 'Canada',
      label: 'Canada'
    },
    {
      value: 'UK',
      label: 'UK'
    },
    {
      value: 'Europe',
      label: 'Europe'
    },
    {
      value: 'Africa',
      label: 'Africa'
    },
    {
      value: 'LatinAmerica',
      label: 'Latin America'
    },
    {
      value: 'MiddleEast',
      label: 'Middle East'
    }
  ]

  return (
    <div>
      <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
      >
        <h1>Home Energy Carbon Footprint Comparison</h1>
        <TextField 
        id="outlined-basic" 
        label="Required" 
        variant="outlined" 
        helperText="Please input your monthly KWH usage"
        placeholder='monthly KWH usage'/>
        </Box>
        <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={countryOptions}
        onChange={handleChange}
        helperText="Please select your country"
        placeholder='country'
        >
          {countryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}


export default Home;