import React, { Component } from "react";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      passwordValue: "",
      tabNumber: 1
    };
  }

  handleInput = inputName => event => {
    if (inputName === "email") {
      this.setState({
        emailValue: event.target.value
      });
    } else {
      this.setState({
        passwordValue: event.target.value
      });
    }
  };

  handleTabChange = tabNumber => {
    this.setState({ tabNumber });
  };

  render() {
    return (
      <div className="loginComponent">
        <div className="loginComponent__container">
          <div className="loginComponent__buttonContainer">
            <button
              className="loginComponent__button--logInTab"
              onClick={() => this.handleTabChange(1)}
            >
              Log In
            </button>
            <button
              className="loginComponent__button--signUpTab"
              onClick={() => this.handleTabChange(2)}
            >
              Sign Up
            </button>
          </div>
          {this.state.tabNumber === 1 ? (
            <LoginView handleInput={this.handleInput.bind(this)} />
          ) : (
            <SignupView handleInput={this.handleInput.bind(this)} />
          )}
        </div>
      </div>
    );
  }
}

export default LoginSignup;
