import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '@googlemaps/js-api-loader';
import './item.css';

function Item() {
  const [itemState, setItemState] = useState({
    map: false,
    apibutton: true,
    listOfLocations: false
  });
  const location = useLocation();
  const apiOption = {
    apiKey: 'AIzaSyBE8FJunz2YQP30CAeIeEIG0QnOq4l5G2I'
  };

  useEffect(() => {
    console.log(location.state.itemData);
    const loader = new Loader(apiOption);
    let apib = document.getElementById('apibutton');
    apib.addEventListener('click', googleApi);
    // loader.load().then(() => {
    //   console.log('Maps JS API loaded');
    //   const map = initMap();
    loader.load().then((google) => {
      console.log('rendering map!');
      let geocoder = new google.maps.Geocoder();
      let rowland = { lat: 33.976124, lng: -117.90534 };
      let map = new google.maps.Map(document.getElementById('map'), {
        center: rowland,
        zoom: 8
      });

      let request = { location: rowland, radius: 500, query: 'recycling' };
      let service = new google.maps.places.PlacesService(map);
      // service.textSearch(request, test);
      document.getElementById('zipbutton').addEventListener('click', () => {
        geocoding(geocoder, map);
      });
    });
  });

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

  let data = locationArray(location.state.itemData);

  function test(results, status) {
    console.log('test');
    if (status == google.maps.places.PlacesServiceStatus.OK)
      console.log(results);
    else console.log('something went wrong');
  }

  function test2() {
    let request = { location: rowland, radius: 500, query: 'recycling' };
    let service = new google.maps.places.PlacesService(map);
    service.textSearch(request, test);
  }

  // function geocoding(geocoder, map){
  //     let address = document.getElementById('zipbox').value;
  //     geocoder.geocode({
  //         'address': address
  //     }).then (data => (console.log(data)))
  // }

  function googleApi() {
    setItemState({ map: true, apibutton: true });
    let data = arr(location.state.itemData);
    return data;
    // return arr(location.state.itemData);
  }

  const { apibutton, map } = itemState;
  return (
    <div>
      <div className="item-container">
        <div className="item-card">
          <div id="item-card_header">{data[0]}</div>
          <div id="item-card_content">
            {data[2]}
            <div>
              <div id="item-card_content">
                {recyclable(data[1])}
                <div>
                  <img
                    src="https://sanjoserecycles.org/wp-content/uploads/sites/8/2015/02/plastic-water-bottle-empty.jpg"
                    alt="plastic-bottle"
                    id="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="textbox" id="zipbox" placerholder="zipcode" />
      <button type="button">submit</button>
      {map ? <div id="map"></div> : null}
      {apibutton ? (
        <button id="apibutton">do you want to recycle</button>
      ) : null}
    </div>
  );
}

export default Item;
