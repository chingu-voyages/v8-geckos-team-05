import React, { Component } from "react";
import NavBar from "../Navbar/navBar";

class MeetupMain extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div className="mainContainer">
          <div className="contactBox">
            <div className="contactBox__imgContainer" />
            <div className="contactBox__textContainer">
              <p>Mentor/mentee</p>
              <h5>Name</h5>
            </div>
          </div>
          <div className="contentBox">
            {/* Lesson Schedule */}
            <div className="contentBox__lessonSchedule">
              <div className="contentBox__lessonSchedule__title">
                <div className="contentBox__lessonSchedule__title__circle">
                  <h5>1</h5>
                </div>
                <h4>Lesson Schedule</h4>
              </div>
              <div className="contentBox__lessonSchedule__content">
                <div>
                  <p>Lesson time will appear here</p>
                </div>
                <button>Add date / time</button>
              </div>
            </div>

            {/* Communication tool */}
            <div className="contentBox__communicationTool">
              <div className="contentBox__communicationTool__title">
                <div className="contentBox__communicationTool__title__circle">
                  <h5>2</h5>
                </div>
                <h4>Communication tool</h4>
              </div>
              <div className="contentBox__lessonSchedule__content">
                <div>
                  <p>Lesson time will appear here</p>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="contentBox__comments">
              <div className="contentBox__comments__title">
                <div className="contentBox__comments__title__circle">
                  <h5>3</h5>
                </div>
                <h4>Comments</h4>
              </div>
              <div className="contentBox__comments__content">
                <textarea />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MeetupMain;
