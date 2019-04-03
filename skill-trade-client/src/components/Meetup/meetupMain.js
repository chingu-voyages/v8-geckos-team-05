import React, { Component } from "react";
import NavBar from "../navBar";

class MeetupMain extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <div className="mainContainer">
          <div className="contactBox">
            <div className="imgContainer" />
            <div className="textContainer">
              <p>Mentor/mentee</p>
              <h5>Name</h5>
            </div>
          </div>
          <div className="contentBox">
            {/* Lesson Schedule */}
            <div className="section">
              <div className="sectionTitle">
                <div className="circle">
                  <h5>1</h5>
                </div>
                <h4>Lesson Schedule</h4>
              </div>
              <div className="sectionContent">
                <div>
                  <p>Lesson time will appear here</p>
                </div>
                <button>Add date / time</button>
              </div>
            </div>

            {/* Communication tool */}
            <div className="section">
              <div className="sectionTitle">
                <div className="circle">
                  <h5>2</h5>
                </div>
                <h4>Communication tool</h4>
              </div>
              <div className="sectionContent">
                <div>
                  <p>Lesson time will appear here</p>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="section">
              <div className="sectionTitle">
                <div className="circle">
                  <h5>1</h5>
                </div>
                <h4>Lesson Schedule</h4>
              </div>
              <div className="sectionContent">
                <div>
                  <p>Lesson time will appear here</p>
                </div>
                <button>Add date / time</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MeetupMain;
