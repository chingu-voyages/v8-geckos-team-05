import React from "react";

const LoginView = ({ handleInput, passwordValue, emailValue }) => {
  return (
    <div className="loginView">
      <form action="" className="loginView__form">
        <label htmlFor="email">Email</label>
        <input
          className="loginView__form--emailInput"
          type="email"
          value={emailValue}
          onChange={handleInput('email')}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginView__form--passwordInput"
          type="password"
          value={passwordValue}
          onChange={handleInput('password')}
          name="password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginView;
