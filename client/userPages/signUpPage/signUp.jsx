import React from 'react'
import SignUpComponent from './components/signUpComponent.jsx';
import './signUp.css';

class SignUp extends React.Component {

    render() {
        return (<div className='signup-div'>
        <SignUpComponent/>
      </div>);
    }
  }

  export default SignUp;