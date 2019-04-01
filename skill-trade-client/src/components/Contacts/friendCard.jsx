import React, { Component } from "react";
class FriendCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer">
        <div className="imgContainer" />
        <div className="textContainer">
          <p>Name</p>
          <p>Teaching program</p>
        </div>
      </div>
    );
  }
}

export default FriendCard;
