import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar">
          <a className="navbar__banner" href="#">
            TALENT TRADE
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          <div className="navbar__collapse">
            <ul className="listedItems">
              <li className="listedItems__item">
                <a className="listedItems__link" href="#">
                  Home
                </a>
              </li>
              <li className="listedItems__item">
                <a className="listedItems__link" href="#">
                  Teachers
                </a>
              </li>
              <li className="listedItems__item">
                <a className="listedItems__link" href="#">
                  Search
                </a>
              </li>
            </ul>
            <button className="navbar__btn-logout" type="submit">
              Log Out
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
