import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import FriendCard from "./friendCard";
import MainContainer from "../MainContainer/mainContainer";

class ContactsMain extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <MainContainer>
          <h1 className="mainContainer__title">Contacts</h1>
          <div className="contentBox--contacts">
            <div className="contentBox--contacts__topBar">
              <div className="contentBox--contacts__topBar__myMentors">
                <h6>My Mentors</h6>
              </div>
              <div className="contentBox--contacts__topBar__myMentees">
                <h6>My Mentees</h6>
              </div>
              <div className="contentBox--contacts__topBar__myClassmates">
                <h6>My classmates</h6>
              </div>
              <div className="contentBox--contacts__topBar__showAll">
                <h6>Show all</h6>
              </div>
            </div>
            <div className="contentBox--contacts__searchBar">
              <div className="contentBox--contacts__searchBar__collapseBtn">
                <h2>
                  <i class="fas fa-bars" />
                </h2>
              </div>
              <input
                className="contentBox--contacts__searchBar__search"
                type="search"
                placeholder="Search by name"
                aria-label="Search"
              />
            </div>
            <div className="contentBox--contacts__resultsGrid">
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default ContactsMain;
