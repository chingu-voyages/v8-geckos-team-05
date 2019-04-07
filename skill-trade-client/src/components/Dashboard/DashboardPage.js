import React, { Component } from "react";

import friends from "./friends";
import lessons from "./lessons";

import DashUserComponent from "./DashUserComponent";
import DashBalanceComponent from "./DashBalanceComponent";
import DashFriendsComponent from "./DashFriendsComponent";
import DashNextLessonComponent from "./DashNextLessonComponent";
import DashUpcomingComponent from "./DashUpcomingComponent";

import Navbar from "../Navbar/navBar";

class Dashboard extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="dashboard">
          <div className="dashboard__container">
            <DashUserComponent />
            <DashBalanceComponent />
            <DashFriendsComponent friends={friends} />
            <DashUpcomingComponent lessons={lessons} />
            <DashNextLessonComponent />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
