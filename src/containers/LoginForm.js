import React, { Component } from 'react';
import { withUser } from '../contexts/UserContext';
import LoginFormView from '../components/LoginFormView';

class LoginForm extends Component {
  render() {
    const { login, username } = this.props;
    return (
      <div>
        <LoginFormView onLogin={login} />
      </div>
    );
  }
}

export default withUser(LoginForm);
