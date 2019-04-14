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
    <h2 className='signupView__header'>Talent Trade</h2>
      <form
        action=""
        className="signupView__form"
        onSubmit={handleConfirmPassword}
      >
        <input
          className="signupView__form__input signupView__form__input--email"
          type="email"
          placeholder="Email"
          value={emailValue}
          onChange={handleInput("email")}
          name="email"
        />
        <input
          className="signupView__form__input signupView__form__input--password"
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={handleInput("password")}
          name="password"
        />
        <input
          className="signupView__form__input signupView__form__input--password"
          type="password"
          placeholder="Confirm password"
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
