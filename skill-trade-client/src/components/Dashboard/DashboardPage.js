import React, { Component } from "react";

import friends from "./friends";

import DashUserComponent from "./DashUserComponent";
import DashBalanceComponent from "./DashBalanceComponent";
import DashFriendsComponent from "./DashFriendsComponent";
import DashNextLessonComponent from './DashNextLessonComponent';
import DashUpcomingComponent from './DashUpcomingComponent';

import Navbar from "../Navbar/navBar";

class Dashboard extends Component {
  // 5 columns, 8 rows
  render() {
    return (
      <>
        <Navbar />
        <div className="dashboard">
          <div className="dashboard__container">
            <DashUserComponent />
            <DashBalanceComponent />
            <DashFriendsComponent friends={friends} />
            <DashNextLessonComponent/>
            <DashUpcomingComponent/>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
