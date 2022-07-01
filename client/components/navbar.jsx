import React from 'react';

class Navbar extends React.Component {

    render() {
      return (
    <ul>
        <li><a className="active" href="/">Home  </a></li> 
        <li style={{float: 'right'}}><a className="active" href="/Login">Login | SignUp</a></li>
        <li style={{float: 'right'}}><a className="active" href="/About">About</a></li>
        <li style={{float: 'right'}}><a className="active" href="/FAQS">FAQS</a></li>
        <li style={{float: 'right'}}><a className="active" href="/Volunteer">Volunteer</a></li>
        <li style={{float: 'right'}}><a className="active" href="/Education">Education</a></li>
    </ul>
      );
    }
  }

  export default Navbar;