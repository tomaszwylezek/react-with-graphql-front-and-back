import React, { Component } from "react";
import mutation from "../mutations/Login";

import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
