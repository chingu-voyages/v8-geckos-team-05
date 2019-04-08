import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import teacherSearch from "../Teacher/teacherSch";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar">
          <Link to="/home" className="navbar__banner" href="#">
            TALENT TRADE
          </Link>
          <Switch>
            <div className="navbar__collapse">
              <ul className="listedItems">
                <li className="listedItems__item">
                  <Link to="/home" className="listedItems__item__link" href="#">
                    Home
                  </Link>
                </li>
                <li className="listedItems__item">
                  <Link
                    to="/teachersearch"
                    className="listedItems__item__link"
                    href="#"
                  >
                    Teachers
                  </Link>
                </li>
                <li className="listedItems__item">
                  <Link className="listedItems__item__link" href="#">
                    Search
                  </Link>
                </li>
              </ul>
              <button className="navbar__btn-logout" type="submit">
                Log Out
              </button>
            </div>
            <Route path="/home" exact={true} component={Homepage} />
            <Route
              path="/teacherSearch"
              exact={true}
              component={teacherSearch}
            />
          </Switch>
        </nav>
      </>
    );
  }
}

export default NavBar;
