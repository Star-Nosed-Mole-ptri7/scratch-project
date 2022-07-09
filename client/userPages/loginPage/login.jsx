import React from 'react'
import { Link } from "react-router-dom";
import LoginComponent from './components/loginComponent.jsx'

class Login extends React.Component {

    render() {
        return (
          <div>
            <LoginComponent/>
            <Link to="/SignUp">Click to sign up</Link>
          </div>
      );
    }
  }

  export default Login;