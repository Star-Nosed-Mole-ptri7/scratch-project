import React from 'react';
import '../style.css'; //test this
import { Link } from 'react-router-dom';
import CarbonOptions from './CarbonOptions.jsx';

const carbonFootprint = () => {

  return (
    <div>
      {/* add Dashboard here */}
      <CarbonOptions />
      {/* add Social posts here */}
    </div>
  )
}

export default carbonFootprint;