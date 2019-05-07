import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="teacher">
        <NavBar />
        <div className="bg-color" />
        <div className="profile">
          <img
            className="profile__img"
            src="https://www.directlink.coop/img/icons/avatars/145841-avatar-set/png/girl-1.png"
            alt="user-profile"
          />
          <div className="profile__extras">
            <div className="profile__nameContainer">
              <h1 className="__nameContainer--bannerName">Caroline Smith</h1>
            </div>
            <div className="profile__info">
              <p className="info--work">Full Stack Developer Mentor</p>
              <p className="info--location">Los Angeles</p>
            </div>
          </div>
        </div>
        <div className="extras">
          <button className="extras__following">following</button>
          <Link to="/meetup">
            <button className="extras__contact">contact</button>
          </Link>
        </div>
        <div className="intro">
          <p className="intro__banner">Introduction</p>
          <p className="intro__descripition">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
}
