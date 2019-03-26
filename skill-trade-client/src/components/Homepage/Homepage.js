import React from "react";

const Homepage = () => {
  return (
    <div id="homepage-main">
      <div id="homepage-text-container">
        <div id="large-text-container">
          <h1 id="homepage-main-text">Talent Trade</h1>
          <h2 id="homepage-sub-text">Practice makes perfect.</h2>
        </div>
        <div id="small-text-container">
          <p className="homepage-small-text">
            Learn a new talent easily, picking from one of many teachers — or,
            share one of your own talents with one of many eager students.
          </p>
          <p className="homepage-small-text strong">
            Your choice.
            <br />
            Your skills.
            <br />
            Your way.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
