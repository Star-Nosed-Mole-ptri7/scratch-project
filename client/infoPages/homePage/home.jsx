import React, { useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home(){
const navigate = useNavigate();

useEffect(() => {
  let buttonid = document.getElementById('buttonid');
  buttonid.addEventListener('click', searcher)
}, [])


function searcher(){
  let searchbar = document.getElementById('searchbar').value
  console.log(searchbar)
  axios.get(`/api/search/${searchbar}`)
  .then(data => {
    navigate('/Item', {state: {itemData: data.data.rows[0], replace: true}})
  })
}

//CHECK FUNCTION



  return (
    <div>
      <input type = "text" id = "searchbar" placeholder = "Search"/>
      <button id = "buttonid" >submit</button>
    </div>
  )
}

export default Home;