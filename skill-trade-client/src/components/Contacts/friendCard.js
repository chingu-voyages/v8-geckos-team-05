import React, { Component } from "react";
class FriendCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer--friendCard">
        <div
          className="mainContainer--friendCard__imgContainer"
          style={{
            backgroundImage: `url(${this.props.imgUrl})`
          }}
        />
        <div className="mainContainer--friendCard__textContainer">
          <p className="mainContainer--friendCard__textContainer__name">Name</p>
          <p className="mainContainer--friendCard__textContainer__teachingProgram">
            Teaching program
          </p>
        </div>
      </div>
    );
  }
}

export default FriendCard;
