import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { withUser } from '../contexts/UserContext';
import LoginFormView from '../components/LoginFormView';

class LoginForm extends Component {
  render() {
    const { login, username } = this.props;

    if (username) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        <LoginFormView onLogin={login} />
      </div>
    );
  }
}

export default withUser(LoginForm);
