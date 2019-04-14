import React from "react";

const LoginView = ({ handleInput, passwordValue, emailValue }) => {
  return (
    <div className="loginView">
      <h2 className='loginView__header'>Talent Trade</h2>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginView;
