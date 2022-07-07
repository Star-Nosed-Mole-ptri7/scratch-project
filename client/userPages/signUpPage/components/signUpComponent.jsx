import React from 'react'



// User database fields: first_name, last_name, user_name, password, recycle_progress


class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      password: ''
    };
  }

  updateFirstName(e) {
    this.setState({first_name: e.target.value})
  }

  updateLastName(e) {
    this.setState({last_name: e.target.value})
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_name: this.state.user_name,
      password: this.state.password
    };
    console.log(body);
    fetch('/api', {
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
        name="firstname"
        type="text"
        placeholder="firstname"
        value={this.state.first_name}
        onChange={(e) => this.updateFirstName(e)}
      ></input>
      <input
        name="lastname"
        type="text"
        placeholder="lastname"
        value={this.state.last_name}
        onChange={(e) => this.updateLastName(e)}
      ></input>
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
        value="create user"
      ></input>
    </form>);
  }
  }

  export default SignUpComponent;