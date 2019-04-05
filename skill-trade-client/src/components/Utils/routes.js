import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import contactsMain from "../Contacts/contactsMain";
import teacherProfile from "../Teacher/teacherProfile";
import teacherSearch from "../Teacher/teacherSch";
import Homepage from "../Homepage/Homepage";
import MeetupMain from "../Meetup/meetupMain";

export default function Index() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/contacts" component={contactsMain} />
          <Route exact path="/meetup" component={MeetupMain} />
          <Route exact path="/teacherProfile" component={teacherProfile} />
          <Route exact path="/teacherSearch" component={teacherSearch} />
        </Switch>
      </div>
    </Router>
  );
}
