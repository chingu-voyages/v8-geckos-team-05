import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__textContainer">
        <div className="homepage__textContainer--large">
          <h1 className="homepage__text homepage__text--main">Talent Trade</h1>
          <h2 className="homepage__text homepage__text--sub">
            Practice makes perfect.
          </h2>
        </div>
        <div className="homepage__textContainer--small">
          <p className="homepage__text homepage__text--small">
            Learn a new talent easily, picking from one of many teachers — or,
            share one of your own talents with one of many eager students.
          </p>
          <p className="homepage__text homepage__text--small strong">
            Your choice.
            <br />
            Your skills.
            <br />
            Your way.
            <br />
          </p>
        </div>
      </div>
      <div className="homepage__signUp">
        <h1 className="homepage__signUp--header">Sign Up</h1>
        <form action="#" className="homepage_signUp--form">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="homepage__signUp--username" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="homepage__signUp--password"
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Homepage;
