import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__intro">
        <div className="homepage__intro--textContainer">
          <h1 className="homepage__intro--mainText">Talent Trade</h1>
          <h2 className="homepage__intro--subtext">Practice makes perfect.</h2>
          <button className="homepage__intro--button rounded-button">Sign Up or Log In</button>
        </div>
      </div>
      <div className="homepage__info">
        <div className="homepage__info--column" id="homepage__info--column1">

        </div>
       
        <div className="homepage__info--column" id="homepage__info--column2">

        </div>
        <div className="homepage__info--column" id="homepage__info--column3">

        </div>
      </div>
    </div>
  );
};

export default Homepage;
