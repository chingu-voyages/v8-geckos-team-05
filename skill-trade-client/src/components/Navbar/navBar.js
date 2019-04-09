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
          <a className="navbar__banner" href="#">
            TALENT TRADE
          </a>
          <div className="navbar__collapse--btn">
            <span>
              <i class="fas fa-bars" />
            </span>
          </div>
          <div className="navbar__collapse--items show">
            <Switch>
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
              <Route path="/home" exact={true} component={Homepage} />
              <Route
                path="/teacherSearch"
                exact={true}
                component={teacherSearch}
              />
            </Switch>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
