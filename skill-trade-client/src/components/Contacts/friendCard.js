import React, { Component } from "react";
class FriendCard extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainerCard">
        <div
          className="mainContainerCard__imgContainer"
          style={{
            backgroundImage: `url(
              "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            )`
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
