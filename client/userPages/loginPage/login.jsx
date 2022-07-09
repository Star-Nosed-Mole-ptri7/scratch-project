import React from 'react'
import { Link } from "react-router-dom";
import LoginComponent from './components/loginComponent.jsx'
import './login.css'

const Login = (props) => {

    
    return (<>
      <div className='login-image'></div>
      <div className='login-div'>
      <LoginComponent/>
      <Link to="/SignUp">Click to sign up</Link>
    </div>
    </>);
}

  export default Login;