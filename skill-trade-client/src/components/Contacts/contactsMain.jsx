import React, { Component } from "react";
import NavBar from "../navBar";
import FriendCard from "./friendCard";

class ContactsMain extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="mainContainerContacts">
          <h1 className="mainContainerContacts__title">Contacts</h1>
          <div className="contentBox">
            <div className="contentBox__topBar">
              <div className="contentBox__topBar__myMentors">
                <h6>My Mentors</h6>
              </div>
              <div className="contentBox__topBar__myMentees">
                <h6>My Mentees</h6>
              </div>
              <div className="contentBox__topBar__myClassmates">
                <h6>My classmates</h6>
              </div>
              <div className="contentBox__topBar__showAll">
                <h6>Show all</h6>
              </div>
            </div>
            <div className="contentBox__searchBar">
              <input
                className="contentBox__searchBar__search"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
              />
            </div>
            <div className="contentBox__resultsGrid">
              <FriendCard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactsMain;
