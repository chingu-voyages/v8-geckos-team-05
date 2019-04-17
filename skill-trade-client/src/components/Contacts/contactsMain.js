import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import FriendCard from "./friendCard";
import MainContainer from "../MainContainer/mainContainer";

class ContactsMain extends Component {
  state = {};
  render() {
    const handleDropdown = () => {
      const topBar = document.querySelector(".contentBox--contacts__topBar");
      topBar.classList.toggle("contentBox--contacts__topBar--responsive");

      const topBar__myMentors = document.querySelector(
        ".contentBox--contacts__topBar__myMentors"
      );
      topBar__myMentors.classList.toggle(
        "contentBox--contacts__topBar__myMentors--responsive"
      );

      const topBar__myMentees = document.querySelector(
        ".contentBox--contacts__topBar__myMentees"
      );
      topBar__myMentees.classList.toggle(
        "contentBox--contacts__topBar__myMentees--responsive"
      );

      const topBar__myClassmates = document.querySelector(
        ".contentBox--contacts__topBar__myClassmates"
      );
      topBar__myClassmates.classList.toggle(
        "contentBox--contacts__topBar__myClassmates--responsive"
      );

      const topBar__showAll = document.querySelector(
        ".contentBox--contacts__topBar__showAll"
      );
      topBar__showAll.classList.toggle(
        "contentBox--contacts__topBar__showAll--responsive"
      );
    };
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
              <button
                onClick={handleDropdown}
                className="contentBox--contacts__searchBar__btnCollapse"
              >
                <i className="fas fa-bars" />
              </button>
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
