import React from 'react';
import Cookies from 'js-cookie';
import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: Cookies.get('session_id')
    };
  }

  componentDidMount() {
    const body = {
      session_id: Cookies.get('session_id')
    };
    fetch('/api/checkSession', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          this.setState({userName: data[0].user_name});
        }
      })
      .catch(e => console.log('err: ', e));
  }

  render() {
    if (this.state.userName) {
      return (
        <ul>
          <div className="navbarText">
            <li><a className="active" href="/">Home  </a></li> 
            <li style={{float: 'right'}}><a className="active" href="/User">{this.state.userName}</a></li>
            <li style={{float: 'right'}}><a className="active" href="/About">About</a></li>
            <li style={{float: 'right'}}><a className="active" href="/FAQs">FAQS</a></li>
            <li style={{float: 'right'}}><a className="active" href="/Volunteer">Volunteer</a></li>
            <li style={{float: 'right'}}><a className="active" href="/Education">Education</a></li>
            <li style={{float: 'right'}}><a className="active" href="/Articles">Articles</a></li>
            </div>
        </ul>
      );
    }
    return (
      <ul>
        <div className="navbarText">
          <li><a className="active" href="/">Home  </a></li> 
          <li style={{float: 'right'}}><a className="active" href="/Login">Login | SignUp</a></li>
          <li style={{float: 'right'}}><a className="active" href="/About">About</a></li>
          <li style={{float: 'right'}}><a className="active" href="/FAQs">FAQS</a></li>
          <li style={{float: 'right'}}><a className="active" href="/Volunteer">Volunteer</a></li>
          <li style={{float: 'right'}}><a className="active" href="/Education">Education</a></li>
          <li style={{float: 'right'}}><a className="active" href="/Articles">Articles</a></li>
          </div>
      </ul>
    );
  }
}

  export default Navbar;