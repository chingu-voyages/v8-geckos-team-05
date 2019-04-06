import React, { Component } from "react";

import DashUserComponent from './DashUserComponent';

import Navbar from "../Navbar/navBar";

class Dashboard extends Component {
  // 5 columns, 8 rows
  render() {
    return (
      <>
        <Navbar/>
        <div className="dashboard">
          <DashUserComponent/>
        </div>
      </>
    );
  }
}

export default Dashboard;
