import React, { useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let buttonId = document.getElementById('buttonid');
    const body = document.querySelector('body');
    buttonId.addEventListener('click', searcher)
    body.addEventListener('keydown', function(event) {
      console.log('pressed button')
      if (event.code === "Enter"){
        return searcher()
      }
    });
  }, [])


  function searcher() {
    let searchbar = document.getElementById('searchbar').value
    console.log(searchbar)
    axios.get(`/api/search/${searchbar}`)
      .then(data => {
        navigate('/Item', { state: { itemData: data.data.rows[0], replace: true } })
      })
  }

  //CHECK FUNCTION



  return (
    <div>
      <div className="banner">
      </div>
      <div className="SearchComponent">
      <input type="text" id="searchbar" placeholder="Search" />
      <button id="buttonid" >submit</button>
      </div>
    </div>
  )
}

export default Home;