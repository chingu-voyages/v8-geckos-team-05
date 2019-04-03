import React, { Component } from "react";
import TeachProfile from "./components/Teacher/teacherProfile";
import MeetupMain from "./components/Meetup/meetupMain";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MeetupMain />
      </div>
    );
  }
}

export default App;
