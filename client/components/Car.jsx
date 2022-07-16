import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Car = () => {

  // Need API Request Here

  const [carType, setCarType] = React.useState('');

  const handleChange = (event) => {
    setCarType(event.target.value);
  };

  const carOptions = [
    {
      value: 'SmallDieselCar',
      label: 'Small Diesel Car'
    },
    {
      value: 'MediumDieselCar',
      label: 'Medium Diesel Car'
    },
    {
      value: 'LargeDieselCar',
      label: 'Large Diesel Car'
    },
    {
      value: 'MediumHybridCar',
      label: 'Medium Hybrid Car'
    },
    {
      value: 'LargeHybridCar',
      label: 'Large Hybrid Car'
    },
    {
      value: 'MediumLPGCar',
      label: 'Medium LPG Car'
    },
    {
      value: 'LargeLPGCar',
      label: 'Large LPG Car'
    },
    {
      value: 'SmallPetrolCan',
      label: 'Small Petrol Can'
    },
    {
      value: 'LargePetrolVan',
      label: 'Large Petrol Van'
    },
    {
      value: 'SmallDieselVan',
      label: 'Small Diesel Van'
    },
    {
      value: 'MediumDieselVan',
      label: 'Medium Diesel Van'
    },
    {
      value: 'LargeDieselVan',
      label: 'Large Diesel Van'
    },
    {
      value: 'LPGVan',
      label: 'LPG Van'
    },
    {
      value: 'CNGVan',
      label: 'CNG Van'
    },
    {
      value: 'SmallPetrolCar',
      label: 'Small Petrol Car'
    },
    {
      value: 'MediumPetrolCar',
      label: 'Medium Petrol Car'
    },
    {
      value: 'LargePetrolCar',
      label: 'Large Petrol Car'
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
        <h1>Car Carbon Footprint Comparison</h1>
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
        value={carType}
        onChange={handleChange}
        helperText="Please select your vehicle"
        placeholder='vehicle type'
        >
          {carOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}


export default Car;