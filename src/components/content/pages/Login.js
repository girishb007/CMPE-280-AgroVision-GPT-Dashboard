import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userType: 'government',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleUserTypeChange = (userType) => {
    this.setState({ userType });
  };

  handleLogin = () => {
    // Implement login logic here
  };

  handleSignup = () => {
    // Implement signup logic here
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          style={{ marginBottom: '10px' }}
        />
        <div>
          <input
            type="radio"
            id="government"
            name="userType"
            value="government"
            checked={this.state.userType === 'government'}
            onChange={() => this.handleUserTypeChange('government')}
          />
          <label htmlFor="government" style={{ marginRight: '10px' }}>Government</label>

          <input
            type="radio"
            id="researchers"
            name="userType"
            value="researchers"
            checked={this.state.userType === 'researchers'}
            onChange={() => this.handleUserTypeChange('researchers')}
          />
          <label htmlFor="researchers">Researchers</label>
        </div>
        <button onClick={this.handleLogin} style={{ marginTop: '10px', marginRight: '5px' }}>Login</button>
        <button onClick={this.handleSignup} style={{ marginTop: '10px' }}>Signup</button>
      </div>
    );
  }
}

export default Login;
