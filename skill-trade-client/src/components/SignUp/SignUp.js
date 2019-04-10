import React, { Component } from "react";

class SignUp extends Component {
  state = {
    emailValue: "",
    passwordValue: ""
  };

  handleChange = (inputName) => (event) => {
      if (inputName === 'email') {
          this.setState({emailValue: event.target.value})
      } else if (inputName === 'password') {
          this.setState({passwordValue: event.target.value})
      }
  }
  render() {
    return (
      <div>
        <div className="signUp__component">
          <div className="signUp__container">
            <h2 className="signUp__header">Sign Up</h2>
            <form action="" className="signUp__form">
            <label htmlFor="email">Email</label>
              <input className='signUp__form--emailInput' type="email" value={this.state.emailValue} onChange={this.handleChange('email')} name="email" id="" />
              <label htmlFor="password">Password</label>
              <input className='signUp__form--passwordInput' type="password" value={this.state.passwordValue} onChange={this.handleChange('password')} name="password" id=""/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
