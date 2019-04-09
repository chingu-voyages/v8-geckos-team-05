import React, { Component } from "react";

class MainContainer extends Component {
  state = {};
  render() {
    return (
      <div className="mainContainer">{this.props.children.map(c => c)}</div>
    );
  }
}

export default MainContainer;
