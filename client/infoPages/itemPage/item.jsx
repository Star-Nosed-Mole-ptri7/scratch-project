import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

function Item() {
  const { state } = useLocation();
  console.log(state)
  const location = useLocation();
  // const [itemState, useItemState] = useState({});
  useEffect(()=> {
    console.log(location)
  })

  return (
    <div></div>
  )
}

export default Item;