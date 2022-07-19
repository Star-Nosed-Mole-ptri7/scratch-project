require("dotenv").config();
const fetch = require('node-fetch');

const apiController = {};

apiController.carStat = (req, res, next) => {
  const { mileValue, carType } = req.body;
  const data = { 'distance': mileValue, 'vehicle': carType };

  console.log('Mile Value', mileValue);
  console.log('Car Type', carType);
  try{
  fetch('https://app.trycarbonapi.com/api/carTravel', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    console.log(data.carbonEquivalent);
    next();
  })
  .catch((error) => {
    console.log('Error:', error);
  });
}catch(error){
  console.log('error', error)
}
}

apiController.bikeStat = (req, res, next) => {
  console.log('Mile Value', mileValue);
  console.log('Country', bikeType);

  const { mileValue, bikeType } = req.body;
  const data = { 'distance': mileValue, 'type': bikeType };

  fetch('https://app.trycarbonapi.com/api/motorBike', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    console.log(data.carbonEquivalent);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

apiController.homeStat = (req, res, next) => {
  console.log('KWH', KWH);
  console.log('Country', country);

  const { KWH, country } = req.body;
  const data = { 'consumption': KWH, 'location': country };

  fetch('https://app.trycarbonapi.com/api/traditionalHydro', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', //do I need this?
      'Authorization': `Bearer ${process.env.API_KEY}`,
    },
    body: JSON.stringify(data), //does it require JSON?
  })
  .then(response => response.json()) // JSON?
  .then(data => {
    console.log('Success:', data);
    console.log(data.carbonEquivalent); //data.carbon?
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

module.exports = apiController;