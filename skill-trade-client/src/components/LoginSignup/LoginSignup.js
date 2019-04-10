import React, { Component } from "react";

class LoginSignup extends Component {
  state = {
    emailValue: "",
    passwordValue: "",
    tabNumber: 1
  };

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
  }
  
  render() {
    let formDisplayed;

    if (this.state.tabNumber === 1) {
        formDisplayed = (<div>Login</div>)
    } else formDisplayed = (<div>login</div>)
    
    return (
        <div className="login__component">
          <div className="login__container">
            <h2 className="login__header">Sign Up</h2>
            <form action="" className="login__form">
            <label htmlFor="email">Email</label>
              <input className='login__form--emailInput' type="email" value={this.state.emailValue} onChange={this.handleChange('email')} name="email" id="" />
              <label htmlFor="password">Password</label>
              <input className='login__form--passwordInput' type="password" value={this.state.passwordValue} onChange={this.handleChange('password')} name="password" id=""/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
    )
  }
}

export default LoginSignup;
