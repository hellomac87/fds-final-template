import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleButtonClick = async () => {
    const { username, password } = this.state;
    const { onLogin } = this.props;

    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    // Redirect 컴포넌트 렌더링
    this.setState({
      success: true,
    });
  };

  render() {
    const { username, password, success } = this.state;

    if (success) {
      return <Redirect to={'/'} />;
    }
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
        <button onClick={() => this.handleButtonClick()}>login</button>
      </div>
    );
  }
}

export default LoginFormView;
