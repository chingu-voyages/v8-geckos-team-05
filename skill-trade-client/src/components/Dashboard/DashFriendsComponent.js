/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

class DashFriendsComponent extends Component {
  render() {
    const { friends } = this.props;
    
    const friendsDivs = friends.map((friend, i) => (
      <div className="dashboard__friendsComponent__friend" key={i}>
        <div className="dashboard__friendsComponent__friend--imageContainer">
          <img
            src={friend.profilePic}
            alt={`Profile picture for friend named ${friend.name}`}
            className="dashboard__friendsComponent__friend--image"
          />
        </div>
        <p className="dashboard__friendsComponent__friend--name">{friend.name}</p>
      </div>
    ));
    
    return (
        <div className="dashboard__friendsComponent">
          <h2 className="dashboard__friendsComponent__header">Friends</h2>
          {friendsDivs}
        </div>
    );
  }
}

export default DashFriendsComponent;
