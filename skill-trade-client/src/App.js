import React, { Component } from "react";
import TeachProfile from "./components/Teacher/teacherProfile";
import ContactsPg from "./components/Contacts/contactsMain";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TeachProfile />
        <ContactsPg />
      </div>
    );
  }
}

export default App;
