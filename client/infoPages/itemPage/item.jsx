import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '@googlemaps/js-api-loader';
import './item.css';

function Item() {
  const [itemState, setItemState] = useState({
    map: false,
    apibutton: true,
    listOfLocations: false,
  });
  const location = useLocation();
  const apiOption = {
    apiKey: ''
    // Google api key ^
  };

  useEffect(() => {
    console.log(location.state.itemData);
    const loader = new Loader(apiOption);
    let apib = document.getElementById('apibutton');
    apib.addEventListener('click', googleApi);
    apib.addEventListener('click', () => {
      apib.style.display = 'none';
    })
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
      service.textSearch(request, test);
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

  function googleApi() {
    setItemState({ map: true, apibutton: true, zipbox: true });
    let data = arr(location.state.itemData);
    return data;
  }

  const { apibutton, map } = itemState;
  return (
    // This is global div below
    <div>

      {/* Recycable or not text */}
      <div className="itemRecycle">
        {recyclable(data[1])}
      </div>
      {/* Recycable or not text */}


      {/* This is the className item container div below */}
      <div className="ItemContainer">

        {/* This is the ID img div below */}
        <div className="itemCard">
          {/* This displays the image of the item */}
          <img
            src={data[4]}
            alt="plastic-bottle"
            id="itemImg"
          />
          {/* This is the ID item card content div below */}
          <div id="itemCardContent">
            {data[2]}
            {/* This displays the description of the item */}
          </div>
        </div>
        {/* This is end of the ID img div above*/}


      </div>
      {/* End of className item Container div above */}


      {/*Start of map div below */}
      <div className="Map">
        {map ?
          (
            <div>

              {/* Below is the div for Map */}
              <div id="map">
              </div>
              {/* Above is the div for Map */}

              {/* Below is the div for Zipcode Text Box */}
              <div>
                <input type="textbox" id="zipbox" placerholder="zipcode" />
              </div>
              {/* Above is the div for Zipcode Text Box */}

              {/* Below is the div for Zipcode Text Box */}
              <div>
                <button id="listLocation">search</button>
              </div>
              {/* Above is the div for Zipcode Text Box */}

            </div>) : null}

        {/* Once apibutton is clicked, we will set the map to true rather than false and it will render the map zipcode box and remove the apibutton */}
        {apibutton ? (
          <button id="apibutton">do you want to recycle this item?</button>) : null}
      </div>
      {/* End of map div above */}


    </div>
    // End of the Global div above

  );
}

export default Item;
