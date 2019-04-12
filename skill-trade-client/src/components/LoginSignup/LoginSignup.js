import React, { Component } from "react";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

class LoginSignup extends Component {
  state = {
    emailValue: "",
    passwordValue: "",
    secondPasswordValue: "",
    tabNumber: 1
  };

  handleInput = inputName => event => {
    switch (inputName) {
      case "email":
        this.setState({ emailValue: event.target.value });
        break;
      case "password":
        this.setState({ passwordValue: event.target.value });
        break;
      case "secondPassword":
        this.setState({ secondPasswordValue: event.target.value });
        break;
      default:
        console.log("Error in handling input");
    }
  };

  handleTabChange = e => {
    const otherTabNumber = Number(e.target.id) === 1 ? 2 : 1;
    const otherTab = document.getElementById(`${otherTabNumber}`);

    e.target.classList.add("activeTab");
    e.target.classList.remove("inactiveTab");

    otherTab.classList.add("inactiveTab");
    otherTab.classList.remove("activeTab");

    this.setState({
      emailValue: "",
      passwordValue: "",
      secondPasswordValue: "",
      tabNumber: Number(e.target.id)
    });
  };

  handleConfirmPassword = e => {
    e.preventDefault();

    const { passwordValue, secondPasswordValue } = this.state;
    const regex = /.*\s.*/;

    if (regex.test(passwordValue) || regex.test(secondPasswordValue)) {
      alert("no spaces allowed");
    }

    if (passwordValue !== secondPasswordValue) {
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
