import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../style.css'; //test this
import { Link } from 'react-router-dom';
import Home from './Home.jsx';
import Car from './Car.jsx';
import Bike from './Bike.jsx';


const CarbonOptions = () => {
  const [compareValue, setComparison] = React.useState('');

  // Sets state with comparison option
  const handleChange = (event, newCompare) => {
    setComparison(newCompare);
  };

  const renderBox = () => {
    if (compareValue == "car"){
      return (
        <Car />
      )
    }

    if (compareValue == "bike"){
      return (
        <Bike />
      )
    }

    if (compareValue == "home"){
      return (
        <Home />
      )
    }
  }

  return (
    <div>
      <ToggleButtonGroup
      color="primary"
      value={compareValue}
      exclusive
      onChange={handleChange}
      >
        <ToggleButton value="car">Car Travel</ToggleButton>
        <ToggleButton value="bike">Motor Bike</ToggleButton>
        <ToggleButton value="home">Home Energy</ToggleButton>
      </ToggleButtonGroup>
      {renderBox()}
    </div>
  );
}


export default CarbonOptions;