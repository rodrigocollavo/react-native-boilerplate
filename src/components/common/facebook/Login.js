import React, { Component } from 'react';
import PropTypes from 'prop-types';
var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

export default class Login extends Component {
  render() {
    return (
      <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={() => {
          console.log("Logged in!");
          console.log(data);
          this.setState({ user : data.credentials });
        }}
        onLogout={() => {
          console.log("Logged out.");
          this.setState({ user : null });
        }}
        onLoginFound={() => {
          console.log("Existing login found.");
          console.log(data);
          this.setState({ user : data.credentials });
        }}
        onLoginNotFound={() => {
          console.log("No user logged in.");
          this.setState({ user : null });
        }}
        onError={() => {
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={() => {
          console.log("User cancelled.");
        }}
        onPermissionsMissing={() => {
          console.log("Check permissions!");
          console.log(data);
        }}
      />
    );
  }
};
