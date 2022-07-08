import React, { useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
// import userController from '../../../server/controllers/userController.js'
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {item: ''};
//   }

//   handleChange = e => {
//     this.setState({ 
//       item: e.target.value
//     })
//   }
//   //PASS the item value to the items page once we redirect

//   onSearchItem = () => {
//     console.log(this.state.item)
//   }

//   render() {
//     return (
//       <div>
//         <form>
//          <label>
//            <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/>
//           </label>
//         </form>
//         <button onClick={this.onSearchItem}>Search</button>
//       </div>
//     )
//   }
// }


function Home(){
const navigate = useNavigate();

useEffect(() => {
  let buttonid = document.getElementById('buttonid');
  buttonid.addEventListener('click', searchBarGrabber)
}, [])

// function buttonHandler(){
//   let searchbar = document.getElementById('searchbar').value
//   console.log('button working!')
//   console.log(searchbar)

//   let queryResult;
//   //make the query to the the database
//   //database will return the object associated with the search result

//   //take that returned search result and pass it to /Item as a param, so /Item will have the value (search result from database) to render on that page.
//   navigate('/Item', {state: {test: 1}, replace: true})
//   // useNavigate('/Item', {state: {test: 1}, replace: true})
// }



function searchBarGrabber(){
  const query = `SELECT item_name, recycled, item_description, keyword FROM "recycled items" WHERE item_name = '${textboxvalue.toLowerCase()}`;
  userController.pool.query(query)
  .then(data => {
    console.log(data)
  })
    //save to state in the component to render)
  //react router redirect with useNavigate()
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