import React from 'react'

class LoginComponent extends React.Component {

    render() {
        return (
            <form method='' action=''>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password" placeholder="password"></input>
                <input name="email" type="text" placeholder="email address"></input>
                <input type="submit" value="verify user"></input>
            </form>
      );
    }
  }

  export default LoginComponent;