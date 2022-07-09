import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '@googlemaps/js-api-loader';
import './item.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

function Item() {
  const [itemState, setItemState] = useState({ map: false, apibutton: true, listOfLocations: false, coords: {} })
  const location = useLocation();
  const apiOption = {
    apiKey: 'AIzaSyB-lCoXh1Mzf3YnbUW-ZxNSuL-u4oPynUA'
  };
  let displayArr = [];
  let displayValue;

  useEffect(() => {
    console.log(location.state.itemData);
    let apib = document.getElementById('apibutton');
    let zipbutton = document.getElementById('zipboxSubmit');
    zipbutton.addEventListener('click', zipcodeRequest)
  });



  //function to convert user input zipcode -> coords to generate map.
  function zipcodeRequest() {
    console.log('inside zipcode')
    let geocoder = new google.maps.Geocoder();
    let address = document.getElementById('zipbox').value;
    let coords = { lat: 1, lng: 1 };
    geocoder.geocode({
      'address': address
    }).then(data => {
      coords = { lat: data.results[0].geometry.location.lat(), lng: data.results[0].geometry.location.lng() }
      console.log('right before setting new state')
      setItemState({ map: false, apibutton: true, listOfLocations: false, coords: { lat: data.results[0].geometry.location.lat(), lng: data.results[0].geometry.location.lng() } })
      //AFTER GRABBING ZIPCODE/CONVERTING TO COORDS, CALL THE MAP FUNCTION TO GENERATE THE MAP.
      generateMap(coords);
    })
  }

  //function to generate the map, and will call the search locations function.
  function generateMap(coords) {
    console.log('inside generateMap')
    const loader = new Loader(apiOption);
    setItemState(prevState => ({ map: true, apibutton: true, listOfLocations: false, coords: prevState.coords }))
    loader.load().then((google) => {
      console.log('rendering map!');
      let location = coords;
      console.log(location)
      let map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
      });
      //call search location function
      searchLocations(map, location)
    });
  }


  //function to bring up a list of 20 locations based on the user inputed zip code searching with "query"
  function searchLocations(map, area) {
    let request = { location: area, radius: 500, query: location.state.itemData.keyword }
    let service = new google.maps.places.PlacesService(map);
    service.textSearch(request, locationSorter);
    //calls a function to organize the returned data
  }

  //sorts and organizes the data returned from search location.
  function locationSorter(results, status) {
    setItemState(prevState => ({ map: true, apibutton: true, listOfLocations: true, coords: prevState.coords }))
    console.log('test');
    if (status == google.maps.places.PlacesServiceStatus.OK)
      console.log(results);
    for (let i = 0; i < results.length - 10; i++) {
      displayArr.push(results[i].formatted_address)
    }
    // console.log(sortedData)
    console.log(displayArr)
    return;
  }


  function recyclable(boolean) {
    console.log(boolean);
    if (boolean === true) {
      return 'You can recycle this item!';
    } else {
      return 'You cannot recycle this item >:(';
    }
  }

  function locationArray(locationDataFromApi) {
    console.log('inside arr fun');
    // let locationData = location.state.itemData
    let arr = [];
    for (let key in locationDataFromApi) {
      arr.push(locationDataFromApi[key]);
    }
    console.log(arr);
    return arr;
  }

  displayValue = locationArray(location.state.itemData)


  const { apibutton, map, listOfLocations } = itemState;
  return (
    <div>
      {/* Global */}

      <div className="itemRecycle">
        {recyclable(displayValue[1])}
        </div>
      <div className="ItemContainer">
        <div className="itemCard">
        <img
            src={displayValue[4]}
            alt="plastic-bottle"
            id="itemImg"
          />
          <div id="itemCardContent">
            {displayValue[2]}
            <div>
            </div>
          </div>
        </div>
      </div>





      <div className="box">
      <input type="textbox" id="zipbox" placerholder="zipcode" />
      <button type="button" id='zipboxSubmit'>search</button>
      </div>
      <div className="Map">
      {map ? (<div id="map"></div>) : (null)}
      {/* {listOfLocations ? (<div>{displayArr}</div>) : (null)} */}
      <div>{displayArr}</div>
      </div>
      {/* {apibutton ? (
        <button id="apibutton">do you want to recycle</button>
      ) : null} */}
    </div>
  );
}

export default Item;
