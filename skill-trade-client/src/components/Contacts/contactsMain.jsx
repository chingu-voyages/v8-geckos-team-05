import React, { Component } from "react";
import NavBar from "../navBar";
import FriendCard from "./friendCard";

class ContactsMain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="mainContainer">
          <h1>Contacts</h1>
          <div className="contentBox">
            <div className="topBar">
              <div className="myMentorsBlock">
                <h6>My Mentors</h6>
              </div>
              <div className="myMenteesBlock">
                <h6>My Mentees</h6>
              </div>
              <div className="myClassmatesBlock">
                <h6>My classmates</h6>
              </div>
              <div className="showAllBlock">
                <h6>Show all</h6>
              </div>
            </div>
            <div className="searchBar">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
              />
            </div>
            <div className="resultsGrid">
              <FriendCard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactsMain;
