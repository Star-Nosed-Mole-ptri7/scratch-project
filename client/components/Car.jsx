import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Car = () => {

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

  // Sets state with inputed car type and # miles weekly
  const [carType, setCarType] = React.useState('');
  const [mileValue, setMileValue] = React.useState('');

  // Function that handles onChange event (as you type)
  const handleChange1 = (event) => {
    setMileValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setCarType(event.target.value);
  }

  // Function that will submit the data to the API Request
  const handleSubmit = () => {
    // Need API Request Here
    console.log('Mile Value', mileValue);
    console.log('Car Type', carType);
  }

  return (
    <div>
      <Box
        component="form"
        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off" >
        <h1>Car Carbon Footprint Comparison</h1>
        <TextField 
        id="outlined-basic" 
        label="Required" 
        variant="outlined" 
        helperText="Please input your weekly driving distance in kilometers"
        value={mileValue}
        onChange={handleChange1}
        placeholder='weekly mileage (km)'/>
        
        </Box>
        <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={carType}
        onChange={handleChange2}
        helperText="Please select your vehicle"
        placeholder='vehicle type'
        >
          {carOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onSubmit={handleSubmit()}>Submit</Button>
        </Stack>
    </div>
  );
}


export default Car;