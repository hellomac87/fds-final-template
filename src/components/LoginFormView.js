import React, { Component } from 'react';

class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { onLogin } = this.props;
    console.log(this.state);
    return (
      <div>
        <input
          value={username}
          onChange={e => this.handleInputChange(e)}
          name="username"
          type="text"
        />
        <input
          value={password}
          onChange={e => this.handleInputChange(e)}
          name="password"
          type="password"
        />
        <button onClick={() => onLogin(username, password)}>login</button>
      </div>
    );
  }
}

export default LoginFormView;
