import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignUpComponent() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const navigate = useNavigate();

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const updateLastName = (e) => {
    setLastName(e.target.value);
  }

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updatePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      password: password
    };
    fetch('/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        fetch('/api/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ user_name: userName, password: password })
        })
          .then((res) => res.json())
          .then((data) => navigate('/User', { state: data }))
          .catch(e => console.log('err: ', e));
        }
      )
      .catch(e => console.log('err: ', e));
  }

  return (<form onSubmit={(e) => handleSubmit(e)}>
    <input
      name="firstname"
      type="text"
      placeholder="firstname"
      value={firstName}
      onChange={(e) => updateFirstName(e)}
    ></input>
    <input
      name="lastname"
      type="text"
      placeholder="lastname"
      value={lastName}
      onChange={(e) => updateLastName(e)}
    ></input>
    <input
      name="username"
      type="text"
      placeholder="username"
      value={userName}
      onChange={(e) => updateUserName(e)}
    ></input>
    <input
      name="password"
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => updatePass(e)}
    ></input>
    <input
      type="submit"
      value="create user"
    ></input>
  </form>);
}

  export default SignUpComponent;