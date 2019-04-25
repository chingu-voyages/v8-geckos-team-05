import React, { Component } from "react";
import NavBar from "../Navbar/navBar";
import MainContainer from "../MainContainer/mainContainer";
class MeetupMain extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <MainContainer>
          <div className="contactBox">
            <div className="contactBox__imgContainer" />
            <div className="contactBox__textContainer">
              <p className="contactBox__textContainer__mentor">Mentor/mentee</p>
              <h5 className="contactBox__textContainer__name">Name</h5>
            </div>
          </div>
          <div className="contentBox--meetup">
            <form>
              {/* Lesson Schedule */}
              <div className="contentBox--meetup__section">
                <div className="contentBox--meetup__section__title">
                  <div className="contentBox--meetup__section__title__circle">
                    <h3>1</h3>
                  </div>
                  <h3 className="contentBox--meetup__section__title__text">
                    Lesson Schedule
                  </h3>
                </div>
                <div className="contentBox--meetup__section__content">
                  <div className="contentBox--meetup__section__content__lessonTime">
                    <p>Lesson time will appear here</p>
                  </div>
                  <button className="contentBox--meetup__section__content__btnAddTime">
                    Add date / time
                  </button>
                </div>
              </div>

              {/* Communication tool */}
              <div className="contentBox--meetup__section">
                <div className="contentBox--meetup__section__title">
                  <div className="contentBox--meetup__section__title__circle">
                    <h3>2</h3>
                  </div>
                  <h3 className="contentBox--meetup__section__title__text">
                    Communication tool
                  </h3>
                </div>
                <div className="contentBox--meetup__section__content">
                  <select
                    required
                    className="contentBox--meetup__section__content__dropdown"
                  >
                    <option value="0">Please select an option</option>
                    <option value="skype">Skype</option>
                    <option value="hangouts">Hangouts</option>
                    <option value="discord">Discord</option>
                  </select>
                </div>
              </div>

              {/* Comments */}
              <div className="contentBox--meetup__section">
                <div className="contentBox--meetup__section__title">
                  <div className="contentBox--meetup__section__title__circle">
                    <h3>3</h3>
                  </div>
                  <h3 className="contentBox--meetup__section__title__text">
                    Comments
                  </h3>
                </div>
                <div className="contentBox--meetup__section__content">
                  <textarea className="contentBox--meetup__section__content__textarea" />
                </div>
              </div>
              <div className="contentBox--meetup__submit">
                <input
                  className="contentBox--meetup__submit__btn"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </MainContainer>
      </>
    );
  }
}

export default MeetupMain;
