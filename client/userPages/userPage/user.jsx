import React from 'react';
import { useLocation } from 'react-router-dom';
import './user.css';

const UserPage = (props) => {
  const { state } = useLocation();
  const user = state[0];
  return <div className='main'>
    <h1>'hi, {user.user_name}'</h1>
    <p>Your first name is {user.first_name}</p>
    <p>Your last name is {user.last_name}</p>
    <p>Your progress is {user.recycle_progress}</p>
  </div>;
};

export default UserPage;