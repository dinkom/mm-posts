class AuthService {
  constructor() {
    this.email = 'test@test.com';
    this.password = 'pass';
  }

  validateCredentials(email, password) {
    return (
      (this.email.toLowerCase() === email.toLowerCase()) &&
      (this.password === password)
    );
  }

  setAuthenticatedUser() {
    if (!window.mmState) {
      window.mmState = {};
    }

    window.mmState.authenticated = true;
    window.mmState.auth_token = 'bWFydGlhbmFuZG1hY2hpbmU=';
  }
}

export default AuthService;
