import React, { Component } from "react";
class FriendCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainerCard">
        <div
          className="mainContainerCard__imgContainer"
          style={{
            backgroundImage: `url(${this.props.imgUrl})`
          }}
        />
        <div className="mainContainerCard__textContainer">
          <p className="mainContainerCard__textContainer__name">Name</p>
          <p className="mainContainerCard__textContainer__teachingProgram">
            Teaching program
          </p>
        </div>
      </div>
    );
  }
}

export default FriendCard;
