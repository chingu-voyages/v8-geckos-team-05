import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage__intro">
          <div className="homepage__intro--textContainer">
            <h1 className="homepage__intro--mainText">Talent Trade</h1>
            <h2 className="homepage__intro--subtext">
              Practice makes perfect.
            </h2>
          </div>
          <div className="homepage__intro--button--container">
            <button className="homepage__intro--button rounded-button">
              Log In or Sign Up
            </button>
          </div>
        </div>
        <div className="homepage__info">
          <div className="homepage__info--column" id="homepage__info--column1">
            <h2 className="homepage__info--column--header">
              Learn a new skill...
            </h2>
          </div>

          <div className="homepage__info--column" id="homepage__info--column2">
            <h2 className="homepage__info--column--header">
              ...or share one of your own.
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="homepage__footer">
        <p className="homepage__footer--text">
          Created by <strong>Jeff</strong>, <strong>Eliezer</strong>, and{" "}
          <strong>Chris</strong> for the Chingu Voyage-08
        </p>
      </div> */}
    </>
  );
};

export default Homepage;
