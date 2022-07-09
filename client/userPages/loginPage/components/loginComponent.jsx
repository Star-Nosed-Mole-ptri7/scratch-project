import React from 'react'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: ''
    };
  }

  updateUserName(e) {
    this.setState({user_name: e.target.value})
  }

  updatePass(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = {
      user_name: this.state.user_name,
      password: this.state.password
    };
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
      .then(() => console.log('Data saved'))
      .catch(e => console.log('err: ', e));
  }

  render() {
    return (<form onSubmit={(e) => this.handleSubmit(e)}>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={this.state.user_name}
        onChange={(e) => this.updateUserName(e)}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="password"
        value={this.state.password}
        onChange={(e) => this.updatePass(e)}
      ></input>
      <input
        type="submit"
        value="Login"
      ></input>
    </form>);
  }
}

  export default LoginComponent;