import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// import '../login.css';

function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updatePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      user_name: userName,
      password: password
    };
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((d) => {
        if (d[0].user_name) {
          navigate('/User');
          location.reload();
        } else {
          navigate('/SignUp');
        }
      })
      .catch(e => console.log('err: ', e));
  };

  return (<form onSubmit={handleSubmit}>
    <input
      name="username"
      type="text"
      placeholder="username"
      value={userName}
      onChange={updateUserName}
    ></input>
    <input
      name="password"
      type="password"
      placeholder="password"
      value={password}
      onChange={updatePass}
    ></input>
    <input
      type="submit"
      value="Login"
    ></input>
  </form>);
}

  export default LoginComponent;