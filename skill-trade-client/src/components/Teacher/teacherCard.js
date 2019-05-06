import React, { Component } from "react";
import { Link } from "react-router-dom";
class TeacherCard extends Component {
  state = {};
  render() {
    return (
      <Link to="teacher-profile">
        <div className="mainContainer--teacherCard">
          <div
            className="mainContainer--teacherCard__imgContainer"
            style={{
              backgroundImage: `url(${this.props.imgUrl})`
            }}
          />
          <div className="mainContainer--teacherCard__textContainer">
            <p className="mainContainer--teacherCard__textContainer__name">
              Name
            </p>
            <p className="mainContainer--teacherCard__textContainer__profession">
              Profession
            </p>
            <p className="mainContainer--teacherCard__textContainer__hourlyRate">
              Hourly Rate
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default TeacherCard;
