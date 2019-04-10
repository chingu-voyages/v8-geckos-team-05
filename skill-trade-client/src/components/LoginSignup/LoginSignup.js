import React, { Component } from "react";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      passwordValue: "",
      secondPasswordValue: "",
      tabNumber: 1
    };
  }

  handleInput = inputName => event => {
    if (inputName === "email") {
      this.setState({
        emailValue: event.target.value
      });
    } else if (inputName === "password") {
      this.setState({
        passwordValue: event.target.value
      });
    } else {
      this.setState({
        secondPasswordValue: event.target.value
      });
    }
  };

  handleTabChange = e => {
    const otherTabNumber = Number(e.target.id) === 1 ? 2 : 1;
    const otherTab = document.getElementById(`${otherTabNumber}`);
    
    e.target.classList.add('activeTab');
    e.target.classList.remove('inactiveTab');

    otherTab.classList.add('inactiveTab');
    otherTab.classList.remove('activeTab');
    
    this.setState({
      emailValue: "",
      passwordValue: "",
      secondPasswordValue: "",
      tabNumber: Number(e.target.id)
    });
  };

  handleConfirmPassword = e => {
    const regex = /.*\s.*/;
    if (
      regex.test(this.state.passwordValue) ||
      regex.test(this.state.secondPasswordValue)
    ) {
      alert("no spaces allowed");
    }
    e.preventDefault();
    if (this.state.passwordValue !== this.state.secondPasswordValue) {
      alert("passwords don't match");
    }
  };

  render() {
    return (
      <div className="loginComponent">
        <div className="loginComponent__container">
          <div className="loginComponent__buttonContainer">
            <button
              className="loginComponent__button loginComponent__button--logInTab activeTab"
              id="1"
              onClick={this.handleTabChange}
            >
              Log In
            </button>
            <button
              className="loginComponent__button loginComponent__button--signUpTab inactiveTab"
              id="2"
              onClick={this.handleTabChange}
            >
              Sign Up
            </button>
          </div>
          {this.state.tabNumber === 1 ? (
            <LoginView
              handleInput={this.handleInput.bind(this)}
              passwordValue={this.state.passwordValue}
              emailValue={this.state.emailValue}
            />
          ) : (
            <SignupView
              handleInput={this.handleInput.bind(this)}
              passwordValue={this.state.passwordValue}
              secondPasswordValue={this.state.secondPasswordValue}
              emailValue={this.state.emailValue}
              handleConfirmPassword={this.handleConfirmPassword.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default LoginSignup;
