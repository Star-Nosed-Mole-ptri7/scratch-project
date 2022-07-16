import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Bike = () => {

  // Need API Request Here

  const [bikeType, setBikeType] = React.useState('');

  const handleChange = (event) => {
    setBikeType(event.target.value);
  };

  const bikeOptions = [
    {
      value: 'SmallMotorBike',
      label: 'Small Motor Bike'
    },
    {
      value: 'MediumMotorBike',
      label: 'Medium Motor Bike'
    },
    {
      value: 'LargeMotorBike',
      label: 'Large Motor Bike'
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
        <h1>Motor Bike Carbon Footprint Comparison</h1>
        <TextField 
        id="outlined-basic" 
        label="Required" 
        variant="outlined" 
        helperText="Please input your weekly driving distance in kilometers"
        placeholder='weekly mileage (km)'/>
        </Box>
        <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={bikeType}
        onChange={handleChange}
        helperText="Please select your motor bike type"
        placeholder='motor bike type'
        >
          {bikeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}


export default Bike;