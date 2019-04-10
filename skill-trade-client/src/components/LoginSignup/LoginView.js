import React from "react";

const LoginView = ({ handleInput }) => {
  return (
    <div className="loginView">
      <form action="" className="loginView__form">
        <label htmlFor="email">Email</label>
        <input
          className="loginView__form--emailInput"
          type="email"
        //   value={this.state.emailValue}
          onChange={handleInput('email')}
          name="email"
          id=""
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginView__form--passwordInput"
          type="password"
        //   value={this.state.passwordValue}
          onChange={handleInput('password')}
          name="password"
          id=""
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginView;
