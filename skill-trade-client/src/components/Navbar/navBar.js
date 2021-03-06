import React, { Component } from "react";
import { Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import teacherSearch from "../Teacher/teacherSch";
class NavBar extends Component {
  state = {};
  render() {
    const handleDropdown = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("navbar--responsive");

      const listedItems = document.querySelector(".listedItems");
      listedItems.classList.toggle("listedItems--responsive");

      const listedItems__item__link = Array.from(
        document.querySelectorAll(".listedItems__item__link")
      );
      listedItems__item__link.map(e =>
        e.classList.toggle("listedItems__item__link--responsive")
      );

      const listedItems__item__btnLogout = document.querySelector(
        ".listedItems__item__btnLogout"
      );
      listedItems__item__btnLogout.classList.toggle(
        "listedItems__item__btnLogout--responsive"
      );
    };

    return (
      <>
        <nav className="navbar">
          <div className="navbar__banner">
            <a to="/dashboard" className="navbar__banner__link" href="#">
              TALENT TRADE
            </a>
          </div>
          <div className="navbar__collapse--items">
            <ul className="listedItems">
              <li className="listedItems__item">
                <button
                  className="listedItems__item__btnCollapse"
                  onClick={() => handleDropdown()}
                >
                  <i className="fas fa-bars" />
                </button>
              </li>
              <li className="listedItems__item">
                <Link
                  to="/dashboard"
                  className="listedItems__item__link"
                  href="#"
                >
                  Dashboard
                </Link>
              </li>
              <li className="listedItems__item">
                <Link
                  to="/teacher-search"
                  className="listedItems__item__link"
                  href="#"
                >
                  Teachers
                </Link>
              </li>
              <li className="listedItems__item">
                <Link
                  to="/contacts"
                  className="listedItems__item__link"
                  href="#"
                >
                  Contacts
                </Link>
              </li>
              <li className="listedItems__item">
                <button className="listedItems__item__btnLogout" type="submit">
                  <Link
                    className="listedItems__item__btnLogout__link"
                    to="/home"
                  >
                    Log Out
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
