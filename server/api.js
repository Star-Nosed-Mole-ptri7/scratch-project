/*  CARBON API -- 20 requests per month

// EXAMPLE OF API REQUEST // 

curl --request POST
  --url https://app.trycarbonapi.com/api/carTravel
  --header 'Authorization: Bearer API_KEY'
  --data '{
      "distance": 50,
      "vehicle": SmallDieselCar
      }'

// EXAMPLE RESPONSE // 

{ "carbonEquivalent" : 8.6, "success" : true }

// HTTP REQUEST PARAMETERS // 

distance --> the distance in km
vehice --> type of car given the options below

vehicle options:
  -SmallDieselCar, MediumDieselCar, LargeDieselCar
  -MediumHybridCar, LargeHybridCar
  -MediumLPGCar, LargeLPGCar
  -SmallPetrolCan
  -LargePetrolVan
  -SmallDieselVan
  -MediumDieselVan
  -LargeDieselVan
  -LPGVan
  -CNGVan
  -SmallPetrolCar, MediumPetrolCar, LargePetrolCar
*/