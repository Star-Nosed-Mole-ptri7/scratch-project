import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

class Volunteer extends React.Component {
  constructor(props) {
    if (Cookies.get('loggedIn') !== 'true') {
      return <Navigate to='/' />;
    }
    super(props);
  }

  render() {
    return <h2>"Volunteer Works!!!"</h2>
  }
}

export default Volunteer;