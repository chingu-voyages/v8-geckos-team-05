import React from "react";
import { Link } from "react-router-dom";

const LoginView = ({ handleInput, passwordValue, emailValue }) => {
  return (
    <div className="loginView">
      <h2 className="loginView__header">Talent Trade</h2>
      <form action="" className="loginView__form">
        <input
          className="loginView__form__input loginView__form__input--email"
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={handleInput("email")}
          name="email"
        />
        <input
          className="loginView__form__input loginView__form__input--password"
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={handleInput("password")}
          name="password"
        />
        <Link to="/contacts">
          <input type="submit" value="Submit" />
        </Link>
      </form>
    </div>
  );
};

export default LoginView;
