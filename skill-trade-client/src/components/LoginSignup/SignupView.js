import React from "react";

const SignupView = ({
  handleInput,
  passwordValue,
  secondPasswordValue,
  emailValue,
  handleConfirmPassword
}) => {
  return (
    <div className="signupView">
      <form
        action=""
        className="signupView__form"
        onSubmit={handleConfirmPassword}
      >
        <label htmlFor="email">Email</label>
        <input
          className="signupView__form--emailInput"
          type="email"
          value={emailValue}
          onChange={handleInput("email")}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="signupView__form--passwordInput"
          type="password"
          value={passwordValue}
          onChange={handleInput("password")}
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="signupView__form--passwordInput"
          type="password"
          value={secondPasswordValue}
          onChange={handleInput("secondPassword")}
          name="confirmPassword"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignupView;
