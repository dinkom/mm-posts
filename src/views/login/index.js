import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import AuthService from '../../services/AuthService';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      displayAuthFailedMessage: false,
      redirectToApp: false
    };
  }

  onEmailChange(e) {
    const { email } = this.state;
    const newEmail = e.target.value;
    if (newEmail !== email) {
      this.setState({
        email: newEmail,
        displayAuthFailedMessage: false
      });
    }
  }

  onPasswordChange = (e) => {
    const { password } = this.state;
    const newPassword = e.target.value;
    if (newPassword !== password) {
      this.setState({
        password: newPassword,
        displayAuthFailedMessage: false
      });
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const authService = new AuthService();

    if (authService.validateCredentials(email, password)) {
      authService.setAuthenticatedUser();
      this.setState({
        redirectToApp: true,
      });
    } else {
      this.setState({
        displayAuthFailedMessage: true
      });
    }
  }

  renderRedirect = () => {
    const { redirectToApp } = this.state;

    if (redirectToApp) {
      return <Redirect to="/app" />;
    }

    return '';
  }

  renderAuthFailedMessage = () => {
    const { displayAuthFailedMessage } = this.state;

    if (displayAuthFailedMessage) {
      return (
        <p className="text-danger">
          Email and/or password is incorrect.
        </p>
      );
    }

    return '';
  }

  render() {
    return (
      <div className="container">
        {this.renderRedirect()}
        <div className="row justify-content-center">
          <div className="col-md-4">
            {this.renderAuthFailedMessage()}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form className="form" onSubmit={ (e) => this.onLoginSubmit(e) }>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={ (e) => this.onEmailChange(e) }
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={ (e) => this.onPasswordChange(e) }
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
