import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import TeacherCard from "./teacherCard";
import MainContainer from "../MainContainer/mainContainer";

class TeacherSearch2 extends Component {
  state = {
    all: []
  };
  render() {
    const handleSearch = e => {
      e.preventDefault();
      let results = 30; //to be modified according to this.state.all.length
      fetch(
        `https://api.unsplash.com/photos/random/?query=girl&featured&count=${results}&client_id=1de021314b1360d29ebe9ac43c8388233b18f1aadd026e729e84a9fb355b6b46`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ all: data });
          console.log(this.state);
        });
    };
    return (
      <>
        <NavBar />
        <MainContainer>
          <h1 className="mainContainer__title">Teacher Search</h1>
          <div className="contentBox--teacherSearch">
            <div className="contentBox--teacherSearch__searchBar">
              <form onSubmit={handleSearch}>
                <select
                  className="contentBox--teacherSearch__searchBar__dropdown"
                  required
                >
                  <option value="">What do you want to learn?</option>
                  <option value="Coding">Coding</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Singing">Singing</option>
                  <option value="Spanish">Spanish</option>
                  <option value="English">English</option>
                  <option value="Piano">Piano</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="submit"
                  className="contentBox--teacherSearch__searchBar__btnSearch"
                  value="Search"
                />
              </form>
            </div>
            <div className="contentBox--teacherSearch__resultsGrid">
              {this.state.all.map(friend => (
                <TeacherCard key={friend.id} imgUrl={friend.urls.thumb} /> //The key is just dummy information from the unsplash api response. To be modified when using real info.
              ))}
            </div>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default TeacherSearch2;
